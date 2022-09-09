import { ContextualRoutingModal, Menu, MultiSelect, Spinner, User, UserTile } from '@/components'
import {
  E_User_Disciplines_Enum,
  Users as _Users,
  useUserDisciplineOptionsQuery,
  useUsersQuery,
} from '@/types'
import { shuffleArray } from '@/utils'
import { SelectorIcon } from '@heroicons/react/outline'
import { matchSorter } from 'match-sorter'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

const Users: React.FC = () => {
  const PAGINITATION_LIMIT = 10
  const router = useRouter()
  const [limit, setLimit] = useState(PAGINITATION_LIMIT)
  const [shuffling, setShuffling] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState<any>([])
  const [displayedUsers, setDisplayedUsers] = useState<any>([])
  const [activeDisciplines, setActiveDisciplines] = useState<E_User_Disciplines_Enum[]>([])
  const [userSearchText, setUserSearchText] = useState<string>('')
  const [userSearchQuery, setUserSearchQuery] = useState<string>('')

  const { data: disciplineOptionsData } = useUserDisciplineOptionsQuery()
  const { data: usersData, loading: usersLoading } = useUsersQuery()

  const timeoutIdRef = useRef<NodeJS.Timeout>()

  const handleDisciplineClicked = (clickedDiscipline) => {
    if (activeDisciplines.includes(clickedDiscipline)) {
      setActiveDisciplines(activeDisciplines.filter((d) => d !== clickedDiscipline))
    } else {
      setActiveDisciplines([...activeDisciplines, clickedDiscipline])
    }
  }

  const rankUsers = (users: _Users[]) => {
    const best = []
    const nextBest = []
    const usersWithPhoto = []
    const usersWithoutPhoto = []

    users.forEach((u) => {
      if (
        u.avatar &&
        u.disciplines?.length &&
        (u.socials?.facebook ||
          u.socials?.instagram ||
          u.socials?.tiktok ||
          u.socials?.spotify ||
          u.socials?.twitter ||
          u.socials?.youtube)
      ) {
        if (u.bio) {
          best.push(u)
        } else {
          nextBest.push(u)
        }
      } else if (u.avatar) {
        usersWithPhoto.push(u)
      } else {
        usersWithoutPhoto.push(u)
      }
    })

    return [...best, ...usersWithPhoto, ...usersWithoutPhoto]
  }
  useEffect(() => {
    // reset the # loaded
    setLimit(PAGINITATION_LIMIT)
  }, [userSearchText, activeDisciplines])

  useEffect(() => {
    // if the user keeps hitting this, clear the timeout and reset (the 'api' call
    // is only fired if the full timeout length is hit)
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = setTimeout(() => {
      setUserSearchQuery(userSearchText)
    }, 500)
  }, [userSearchText])

  useEffect(() => {
    if (!usersData?.users) return
    if (shuffling) {
      // reset
      setLimit(PAGINITATION_LIMIT)
      // window.scrollTo(0, 0)
    }

    if (userSearchQuery === '' && !activeDisciplines?.length) {
      let clone = [...usersData?.users]
      shuffleArray(clone)
      setFilteredUsers(clone)
    } else {
      let matchingUsers = []

      if (usersData?.users?.length) {
        matchingUsers = matchSorter(usersData?.users, userSearchQuery, {
          keys: ['full_name'],
        })
      }

      if (activeDisciplines?.length) {
        matchingUsers = matchingUsers.filter((user) => {
          let riderDisciplines = user.disciplines.map((d) => d.discipline)
          return activeDisciplines.every((d) => riderDisciplines.includes(d))
        })
      }
      shuffleArray(matchingUsers)
      setFilteredUsers(matchingUsers)
    }
    setShuffling(false)
  }, [activeDisciplines, userSearchQuery, usersData, shuffling])

  useEffect(() => {
    if (filteredUsers.length > 0) {
      const rankedUsers = rankUsers(filteredUsers)
      setDisplayedUsers(rankedUsers)
    }
  }, [filteredUsers, limit])

  const [sentryRef] = useInfiniteScroll({
    loading: usersLoading,
    hasNextPage:
      displayedUsers.length > 0 && filteredUsers.length > 0 && limit < filteredUsers.length,
    onLoadMore: () => setLimit(limit + PAGINITATION_LIMIT),
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 400px 0px',
  })

  return (
    <>
      <Head>
        <title>skrrrt | users</title>
      </Head>
      <ContextualRoutingModal isOpen={!!router.query.username}>
        <User username={router.query.username as string} />
      </ContextualRoutingModal>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-end justify-center mb-3 md:flex-row">
          <div className="flex flex-col items-end w-full max-w-2xl md:flex-row">
            <div className="flex items-center w-full p-2 mb-2 overflow-hidden rounded-md shadow-sm keyboard-focus-within md:mb-0 md:w-auto bg-nord6 dark:bg-nord0">
              <div className="mx-2 select-none label">search</div>
              <input
                className="w-full max-w-xs text-primary focus:outline-none bg-nord6 dark:bg-nord0"
                onChange={(e) => setUserSearchText(e.target.value)}
                value={userSearchText}
              />
            </div>

            <div className="w-full mb-2 ml-0 md:w-auto md:ml-4 md:mb-0">
              <MultiSelect
                label="disciplines"
                activeItems={activeDisciplines}
                items={disciplineOptionsData?.e_user_disciplines.map((d) => d.type) || []}
                itemClicked={handleDisciplineClicked}
                handleBackspace={() => {
                  if (activeDisciplines?.length > 0) {
                    setActiveDisciplines((ad) => ad.slice(0, ad.length - 1))
                  }
                }}
              />
            </div>

            <div className="ml-0 sm:ml-4">
              <Menu
                triggerSlot={
                  <div className="inline-flex items-center justify-center w-full px-2 py-2 font-medium rounded-md shadow-sm bg-nord6 dark:bg-nord0 focus:outline-none min-h-9">
                    <div className="mx-2 select-none label">actions</div>

                    <SelectorIcon
                      className="w-4 h-4 text-nord4 dark:text-nord2"
                      aria-hidden="true"
                    />
                  </div>
                }
                items={[
                  [
                    {
                      text: 'shuffle',
                      show: true,
                      handler: () => setShuffling(true),
                    },
                  ],
                  [
                    {
                      text: 'view map',
                      show: true,
                      handler: () => {
                        router.push('/users/map')
                      },
                    },
                  ],
                ]}
              />
            </div>
          </div>
        </div>

        {usersLoading && (
          <div className="flex justify-center my-4">
            <Spinner className="w-4 h-4" />
          </div>
        )}

        <div>
          {!shuffling && (
            <div className="grid w-full grid-cols-1 mx-auto gap-y-4">
              {displayedUsers.slice(0, limit).map((user, idx) => (
                <UserTile
                  key={idx}
                  user={user as _Users}
                  activeDisciplines={activeDisciplines}
                  handleDisciplineClicked={handleDisciplineClicked}
                />
              ))}
            </div>
          )}

          <div ref={sentryRef} />
        </div>
      </div>
    </>
  )
}

export default Users
