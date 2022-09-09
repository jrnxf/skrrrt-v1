import {
  Briefcase,
  ChipsSection,
  Flag,
  Gift,
  Home,
  HyperlinkAwareText,
  InfoCard,
  Map,
  MapPin,
  SocialSection,
  Star,
  UserAvatar,
} from '@/components'
import { useAuth } from '@/context'
import { usePosts, useUser } from '@/hooks'
import { META_DEFAULTS } from '@/utils'
import Tippy from '@tippyjs/react'
import moment from 'moment'
import Head from 'next/head'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'

type Props = {
  username: string
}
export const User: FC<Props> = ({ username }) => {
  const { user, handleUserFavorite, current, hometown } = useUser(username)
  const { authdUser, isAuthenticated } = useAuth() || {}
  const [displayedPosts, setDisplayedPosts] = useState<any>([])

  const {
    posts,
    limit,
    setLimit,
    resultCount,
    loading: postsLoading,
    paginationLimit: postsPaginationLimit,
  } = usePosts({
    paginationLimit: 5,
    initialWhereClause: {
      post: {
        posted_by: {
          username: {
            _eq: username,
          },
        },
      },
    },
  })

  useEffect(() => {
    if (posts.length > 0) {
      setDisplayedPosts(posts.map((view_post) => view_post.post))
    }
  }, [posts])

  if (!user) return null

  const {
    full_name,
    bio,
    current_setup,
    nbds,
    liked_by,
    teams,
    disciplines,
    interests,
    favorite_tricks,
    public_trick_todos,
  } = user

  const TagSection = () => (
    <>
      {[disciplines, teams, nbds, favorite_tricks, interests].some((x) => x && x.length > 0) && (
        <div>
          {liked_by?.length > 0 && (
            <div className="mb-4">
              <InfoCard title="Favorite Riders">
                <div className="flex flex-wrap pb-2">
                  {liked_by?.map((user, idx) => (
                    <div className="no-style-link" key={idx}>
                      <Link href={`/users/${user?.liked_user?.username}`}>
                        <Tippy content={user?.liked_user?.full_name}>
                          <div className="w-20 h-20 mt-4 mr-4">
                            <UserAvatar
                              user={user?.liked_user}
                              initialsClasses="text-sm bg-nord5 dark:bg-nord1"
                            />
                          </div>
                        </Tippy>
                      </Link>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>
          )}

          {current_setup && (
            <div className="mb-4">
              <InfoCard title="Current Setup">
                <div className="py-2">
                  <img
                    className="rounded-md max-h-96"
                    src={current_setup}
                    alt={`current setup of ${full_name}`}
                  />
                </div>
              </InfoCard>
            </div>
          )}
          <ChipsSection title="interests" chips={interests} />
          <ChipsSection title="disciplines" chips={disciplines.map((d) => d.discipline)} />
          <ChipsSection title="teams" chips={teams} />
          <ChipsSection title="nbds" chips={nbds} />
          <ChipsSection title="favorite tricks" chips={favorite_tricks} />
          {public_trick_todos?.length > 0 && (
            <div className="mb-4">
              <InfoCard title="Trick Todos">
                <div className="flex flex-row flex-wrap items-start font-medium">
                  <ol className="w-full">
                    {public_trick_todos.map((public_trick_todo, idx) => (
                      <li
                        className="px-3 py-2 mt-2 mb-1 font-medium rounded-md shadow-sm bg-nord5 dark:bg-nord1"
                        key={public_trick_todo.todo.id}
                      >
                        {public_trick_todo.todo.value}
                      </li>
                    ))}
                  </ol>
                </div>
              </InfoCard>
            </div>
          )}
        </div>
      )}
    </>
  )

  if (!user) return null

  return (
    <>
      <Head>
        <title>skrrrt | {full_name}</title>

        <meta property="title" content={`skrrrt ~ ${user.full_name}`} key="title" />
        <meta property="og:title" content={`skrrrt ~ ${user.full_name}`} key="og:title" />
        <meta property="description" content={user?.bio || ``} key="description" />
        <meta property="og:description" content={user?.bio || ``} key="og:description" />
        <meta property="og:image" content={user?.avatar || META_DEFAULTS.OG_IMAGE} key="og:image" />
        <meta property="og:image:alt" content={user.full_name} key="og:image:alt" />
      </Head>
      <div className="flex flex-col w-full mb-4 text-lg">
        <div className="w-full">
          {current && (
            <div className="relative w-full h-64 max-w-5xl mx-auto border-2 rounded-md 2xl:h-96 border-nord6 dark:border-nord0 bg-nord6 dark:bg-nord0">
              <Map
                coords={{
                  lat: current?.lat,
                  lng: current?.lng,
                }}
              />
            </div>
          )}

          <div className="flex flex-col w-full max-w-3xl mx-auto">
            <div className="flex flex-col w-full">
              <div
                className={`mx-auto flex flex-col items-center ${
                  current && '2xl:-mt-44 sm:-mt-36 -mt-28'
                }`}
              >
                <div className="relative w-56 h-56 mx-auto mb-4 overflow-hidden shadow-sm 2xl:w-84 2xl:h-84 sm:w-72 sm:h-72">
                  <UserAvatar
                    user={user}
                    initialsClasses="2xl:text-8xl sm:text-7xl text-6xl bg-nord6 dark:bg-nord0 border-6 border-primary"
                    imageClasses="border-6 border-primary"
                    routingEnabled={false}
                  />
                </div>

                <div className="mx-2 mb-4">
                  <h1 className="flex items-center text-4xl font-black lg:text-5xl">
                    <span
                      className={
                        hometown || (isAuthenticated && user.id !== authdUser?.id) ? 'mr-2' : ''
                      }
                    >
                      {user?.full_name}
                    </span>
                    {hometown && (
                      <span
                        className={`inline-flex ${
                          isAuthenticated && user.id !== authdUser?.id && 'mr-3'
                        }`}
                      >
                        <Flag location={hometown} dimensions=".75em" />
                      </span>
                    )}
                    {isAuthenticated && user.id !== authdUser?.id && (
                      <span
                        className="inline-flex cursor-pointer select-none text-nord7"
                        onClick={handleUserFavorite}
                      >
                        <Star
                          fill={
                            user?.liked_users?.some(
                              (like) => like.liked_by_user_id === authdUser?.id,
                            )
                              ? 'currentColor'
                              : 'transparent'
                          }
                        />
                      </span>
                    )}
                  </h1>
                </div>
                {user.id === authdUser?.id && (
                  <div className="flex items-center justify-around mb-4">
                    <Link href="/account/profile">
                      <div className="mr-2 btn bg-nord7">Edit Profile</div>
                    </Link>
                  </div>
                )}
              </div>
              {bio && (
                <div className="mb-4">
                  <InfoCard title="bio">
                    <p className="px-1.5 py-2 whitespace-pre-wrap">
                      <HyperlinkAwareText>{bio}</HyperlinkAwareText>
                    </p>
                  </InfoCard>
                </div>
              )}
              <SocialSection socials={user.socials} />

              {(hometown?.formatted_address ||
                current?.formatted_address ||
                user.birthday ||
                user.profession) && (
                <div className="mb-4">
                  <InfoCard title="About">
                    <div className="flex flex-col items-start font-medium">
                      {hometown?.formatted_address && (
                        <div className="flex items-center py-2">
                          <MapPin className="mr-3 h-7 w-7" />
                          {hometown.formatted_address}
                        </div>
                      )}

                      {current?.formatted_address && (
                        <div className="flex items-center py-2">
                          <Home className="mr-3 h-7 w-7" />
                          {current.formatted_address}
                        </div>
                      )}

                      {user?.profession && (
                        <div className="flex items-center py-2">
                          <Briefcase className="mr-3 h-7 w-7" />
                          {user.profession}
                        </div>
                      )}

                      {user?.birthday && (
                        <div className="flex items-center py-2">
                          <Gift className="mr-3 h-7 w-7" />
                          {moment(user.birthday).format('MMMM Do, YYYY')}
                        </div>
                      )}
                    </div>
                  </InfoCard>
                </div>
              )}

              <TagSection />
            </div>

            {/* <div className="grid w-full max-w-3xl grid-cols-1 mx-auto gap-y-4"> */}
            {/*   {displayedPosts.length > 0 && */}
            {/*     displayedPosts?.map((post) => ( */}
            {/*       <div key={post.id}> */}
            {/*         <PostCard post={post as tPosts} /> */}
            {/*       </div> */}
            {/*     ))} */}
            {/* </div> */}
            {/* {postsLoading ? ( */}
            {/*   <div className="flex justify-center my-4"> */}
            {/*     <Spinner className="w-4 h-4" /> */}
            {/*   </div> */}
            {/* ) : ( */}
            {/*   <div className="flex flex-col items-end justify-end my-4"> */}
            {/*     <p className="text-sm label"> */}
            {/*       {resultCount > 0 && */}
            {/*         `Showing ${displayedPosts?.length || 0} of ${resultCount} ${pluralize( */}
            {/*           resultCount, */}
            {/*           'post', */}
            {/*           'posts', */}
            {/*         )}`} */}
            {/*     </p> */}
            {/*     {displayedPosts?.length < resultCount && ( */}
            {/*       <div className="flex justify-center mt-2"> */}
            {/*         <div */}
            {/*           className="flex items-center btn bg-nord7" */}
            {/*           onClick={() => setLimit(limit + postsPaginationLimit)} */}
            {/*         > */}
            {/*           load more */}
            {/*           <ChevronDown className="ml-1" size={12} /> */}
            {/*         </div> */}
            {/*       </div> */}
            {/*     )} */}
            {/*   </div> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default User
