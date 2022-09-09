import { useAuth } from '@/context'
import {
  ChatMessagesQueryDocument,
  ChatMessagesSubscriptionDocument,
  Chat_Messages,
  Query_Root,
  useChatMessagesQuery,
  useDeleteMessageByIdMutation,
  useInsertChatMessageMutation,
  useLikeChatMessageMutation,
  useUnlikeChatMessageMutation,
} from '@/types'
import { useCallback, useEffect } from 'react'

export const useChatMessages = () => {
  const { isAuthenticated } = useAuth()

  const { data: chatMessagesData, subscribeToMore } = useChatMessagesQuery()

  const [insertChatMessage] = useInsertChatMessageMutation()
  const [deleteMessageById] = useDeleteMessageByIdMutation()

  const [likeChatMessage] = useLikeChatMessageMutation()
  const [unlikeChatMessage] = useUnlikeChatMessageMutation()

  const handleSubmitMessage = async (text) => {
    if (text) {
      await insertChatMessage({
        variables: { text },
        update: (store, { data }) => {
          if (data) {
            const allChatMessages: Query_Root | null = store.readQuery({
              query: ChatMessagesQueryDocument,
            })
            store.writeQuery({
              query: ChatMessagesQueryDocument,
              data: {
                chat_messages: [...allChatMessages!.chat_messages, data.insert_chat_messages_one],
              },
            })
          }
        },
      })
    }
  }

  const handleDeleteMessage = async (messageId: number) => {
    await deleteMessageById({
      variables: {
        id: messageId,
      },
      update: (store, { data }) => {
        if (data) {
          const allChatMessages: Query_Root | null = store.readQuery({
            query: ChatMessagesQueryDocument,
          })
          store.writeQuery({
            query: ChatMessagesQueryDocument, // this query document already has the variables order-by ascending which is why this cache update works
            data: {
              chat_messages: allChatMessages!.chat_messages.filter(
                (chat_message) => chat_message.id !== data.delete_chat_messages_by_pk!.id,
              ),
            },
          })
        }
      },
    })
  }

  const handleLikeChatMessage = async (chat_message_id) => {
    await likeChatMessage({
      variables: {
        chat_message_id,
      },
    })
  }
  const handleUnlikeChatMessage = async (chat_message_id) => {
    await unlikeChatMessage({
      variables: {
        chat_message_id,
      },
    })
  }

  useEffect(() => {
    try {
      const unsubFn = subscribeToMore({
        document: ChatMessagesSubscriptionDocument,
        onError: () => null,
        updateQuery: (previousStore, { subscriptionData }) => {
          if (subscriptionData?.data?.chat_messages) {
            return subscriptionData.data
          } else {
            return previousStore
          }
        },
      })

      return () => {
        unsubFn?.()
      }
    } catch {
      // bad unsubscribe
    }
  }, [subscribeToMore])

  return {
    messages: (chatMessagesData?.chat_messages as Chat_Messages[]) || [],
    handleSubmitMessage,
    handleDeleteMessage,
    handleLikeChatMessage,
    handleUnlikeChatMessage,
  }
}
