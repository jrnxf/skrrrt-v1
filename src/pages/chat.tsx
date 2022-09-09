import { HyperlinkAwareText } from '@/components'
import { useAuth, useUserActions } from '@/context'
import { TextareaAutosize } from '@/forms'
import { useChatMessages } from '@/hooks'
import { ChatMessagesQuery, ChatMessagesQueryDocument } from '@/types'
import {
  classNames,
  CSV_SEPARATOR_SPACE,
  // scrollToBottomOfWindow,
  ssrAuthCheck,
  userIsOnline,
} from '@/utils'
import Tippy from '@tippyjs/react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Moment from 'react-moment'
import { addApolloState, initializeApollo } from '@/lib/apollo'
import { Logger } from '@/middleware'

const Chat = () => {
  const {
    messages,
    handleSubmitMessage,
    handleDeleteMessage,
    handleLikeChatMessage,
    handleUnlikeChatMessage,
  } = useChatMessages()

  const { getUserResponse } = useUserActions()
  const { authdUser, isAuthenticated } = useAuth()

  // const [firstRenderScroll, setFirstRenderScroll] = useState<boolean>(false)

  const handleMessageClick = async (e, message) => {
    if (e.target.tagName === 'A' || window.getSelection()?.toString() !== '') return // they clicked on a link or something is highlighted
    if (message.author_id === authdUser?.id) {
      const response = await getUserResponse({
        question: 'Are you sure you want to delete this message?',
      })
      if (response.accepts) {
        handleDeleteMessage(message.id)
      }
    } else if (isAuthenticated) {
      if (message.likes.some((like) => like?.user?.id === authdUser?.id)) {
        handleUnlikeChatMessage(message.id)
      } else {
        handleLikeChatMessage(message.id)
      }
    }
  }

  // useEffect(() => {
  //   if (messages?.length > 0 && !firstRenderScroll) {
  //     setFirstRenderScroll(true)
  //     setTimeout(scrollToBottomOfWindow, 0)
  //   }
  //   if (isNearBottomOfWindow(200)) {
  //     scrollToBottomOfWindow()
  //   }
  // }, [messages, firstRenderScroll])

  return (
    <>
      <Head>
        <title>skrrrt | chat</title>
        <meta property="title" content={`skrrrt ~ chat`} key="title" />
        <meta property="og:title" content={`skrrrt ~ chat`} key="og:title" />
      </Head>
      <div className="relative w-full max-w-3xl mx-auto" id="chat-column">
        <div className="flex flex-col overflow-y-auto scrollbar">
          <div
            className="flex-grow"
            style={{
              minHeight: 'calc(100vh - 260px)',
            }}
          >
            {messages.length > 0 && (
              <div
                className="flex flex-col flex-grow pt-3 overflow-x-hidden overflow-y-auto scrollbar" // pt-2 makes the top message not cut off the heart if messages
              >
                {messages?.map((message, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className={`mb-2 ${
                        message.author_id === authdUser?.id
                          ? 'items-end pl-16 self-end'
                          : 'items-start pr-16 self-start'
                      }`}
                    >
                      <div
                        className="relative flex flex-row items-center justify-between px-3 py-2 rounded-md shadow-sm cursor-pointer dark:bg-nord0 bg-nord6"
                        onClick={(e) => handleMessageClick(e, message)}
                      >
                        <div className="whitespace-pre-wrap max-w-[80vw] sm:max-w-[70vw] md:max-w-[60vw]">
                          {message.likes?.length > 0 && (
                            <div>
                              <Tippy
                                content={message.likes
                                  .map((like) => like?.user?.full_name)
                                  .join(CSV_SEPARATOR_SPACE)}
                              >
                                <span
                                  className="absolute px-2 text-sm font-semibold rounded-full select-none text-nord6 bg-nord11 py-1px grow"
                                  style={{
                                    top: '-10px',
                                    left: message.author_id === authdUser?.id ? '-20px' : undefined,
                                    right:
                                      message.author_id === authdUser?.id ? undefined : '-20px',
                                  }}
                                >
                                  ♥ {message.likes.length}
                                </span>
                              </Tippy>
                            </div>
                          )}
                          <p className="max-w-full text-lg overflow-wrap-anywhere">
                            <HyperlinkAwareText>{message.text}</HyperlinkAwareText>
                          </p>
                        </div>
                      </div>
                    </div>
                    {messages[idx + 1]?.author?.id !== message.author?.id && (
                      <div className="mb-5">
                        <Link href={`/users/${message.author?.username}`}>
                          <div
                            className={classNames(
                              'flex flex-col cursor-pointer text-sm',
                              message.author_id === authdUser?.id ? 'items-end' : 'items-start',
                            )}
                          >
                            <div
                              className={`font-semibold flex items-center ${
                                message.author_id === authdUser?.id
                                  ? 'justify-end flex-row-reverse '
                                  : ''
                              }`}
                            >
                              <span>{message?.author?.full_name}</span>

                              {userIsOnline(message?.author?.activity?.app) && (
                                <span
                                  className={`relative flex h-2 w-2 ${
                                    message.author_id === authdUser?.id ? 'mr-1 ' : 'ml-1'
                                  }`}
                                >
                                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-nord14 animate-ping"></span>
                                  <span className="relative inline-flex w-2 h-2 rounded-full bg-nord14"></span>
                                </span>
                              )}
                            </div>
                            <div className="text-xs font-medium text-secondary">
                              <Moment fromNow interval={15000}>
                                {message.created_at}
                              </Moment>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
          <div className="px-1">
            <TextareaAutosize handleSubmit={handleSubmitMessage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  Logger.info(`${ctx.req.method} ${ctx.req.url}`)
  const apolloClient = initializeApollo()
  const [props] = await Promise.all([
    await ssrAuthCheck(ctx),
    await apolloClient.query<ChatMessagesQuery>({
      query: ChatMessagesQueryDocument,
    }),
  ])

  return addApolloState(apolloClient, {
    props,
  })
}
