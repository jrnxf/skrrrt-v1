import { useAuth } from '@/context'
import { ProfileForm } from '@/forms'
import {
  E_User_Disciplines_Enum,
  E_User_Locations_Enum,
  useDeleteUserDisciplinesMutation,
  useDeleteUserLocationByTypeMutation,
  useInsertUserDisciplinesMutation,
  Users as tUsers,
  useUpdateUserMutation,
  useUpsertUserLocationMutation,
  useUpsertUserSocialsMutation,
  useUserDisciplineOptionsQuery,
  useUserProfileByUserIdQueryLazyQuery,
} from '@/types'
import { getCurrentLocation, getHometown, isProduction, ssrAuthCheck } from '@/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Spinner } from '@/components'
import { addApolloState, initializeApollo } from '@/lib/apollo'
import { Logger } from '@/middleware'

export const EditProfile = () => {
  const router = useRouter()

  const { authdUser } = useAuth()

  const [getUserProfile, { data: authdUserData }] = useUserProfileByUserIdQueryLazyQuery()

  const { data: disciplineOptions } = useUserDisciplineOptionsQuery()

  const [deleteUserDisciplines] = useDeleteUserDisciplinesMutation()
  const [insertUserDisciplines] = useInsertUserDisciplinesMutation()
  const [updateUser] = useUpdateUserMutation()
  const [upsertSocials] = useUpsertUserSocialsMutation()
  const [upsertUserLocation] = useUpsertUserLocationMutation()
  const [deleteUserLocation] = useDeleteUserLocationByTypeMutation()

  useEffect(() => {
    if (authdUser?.id) {
      getUserProfile({
        variables: {
          id: authdUser.id,
        },
      })
    }
  }, [authdUser])

  const handleSubmit = async (data) => {
    const originalUser = authdUserData?.users_by_pk

    let {
      full_name,
      username,
      avatar,
      current_setup,
      bio,
      birthday,
      profession,
      facebook,
      twitter,
      instagram,
      youtube,
      tiktok,
      spotify,
      disciplines,
      nbds,
      teams,
      interests,
      favorite_tricks,
      hometown,
      current_location,
      trick_todos,
    } = data

    const bulkPromises: Promise<any>[] = []

    if (hometown) {
      if (
        getHometown(originalUser)?.formatted_address !== JSON.parse(hometown)?.formatted_address
      ) {
        bulkPromises.push(
          handleUpsertUserLocationByType(E_User_Locations_Enum.Hometown, JSON.parse(hometown)),
        )
      }
    } else {
      await handleDeleteUserLocationByType(E_User_Locations_Enum.Hometown)
    }

    if (current_location) {
      if (
        getCurrentLocation(originalUser)?.formatted_address !==
        JSON.parse(current_location)?.formatted_address
      ) {
        bulkPromises.push(
          handleUpsertUserLocationByType(
            E_User_Locations_Enum.Current,
            JSON.parse(current_location),
          ),
        )
      }
    } else {
      await handleDeleteUserLocationByType(E_User_Locations_Enum.Current)
    }

    await deleteUserDisciplines()
    //  hasura doesn't currently offer nested updates :'(
    bulkPromises.push(
      insertUserDisciplines({
        variables: {
          objects: disciplines.map((discipline) => ({
            discipline: discipline as E_User_Disciplines_Enum,
          })),
        },
      }),
    )

    bulkPromises.push(
      upsertSocials({
        variables: {
          facebook,
          twitter,
          instagram,
          youtube,
          tiktok,
          spotify,
        },
      }),
    )
    bulkPromises.push(
      updateUser({
        variables: {
          full_name,
          username,
          bio,
          profession,
          birthday: birthday || null,
          nbds,
          teams,
          favorite_tricks,
          interests,
          avatar,
          current_setup,
          trick_todos,
        },
      }),
    )

    await Promise.all(bulkPromises)
    router.push(`/users/${username}`)
  }

  const handleDeleteUserLocationByType = async (type) => {
    await deleteUserLocation({
      variables: {
        type,
      },
    })
  }
  const handleUpsertUserLocationByType = async (type, data) => {
    const { lat, lng, ...variables } = data
    await upsertUserLocation({
      variables: {
        type,
        ...variables,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
    })
  }

  if (!authdUserData?.users_by_pk || !disciplineOptions) {
    return (
      <div className="flex justify-center my-4">
        <Spinner className="w-4 h-4" />
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>skrrrt | edit profile</title>
      </Head>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <ProfileForm
            user={authdUserData?.users_by_pk as tUsers}
            disciplineOptions={disciplineOptions}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  )
}

export default EditProfile

export async function getServerSideProps(ctx) {
  Logger.info(`${ctx.req.method} ${ctx.req.url}`)
  const apolloClient = initializeApollo()

  try {
    const props = await ssrAuthCheck(ctx)
    return addApolloState(apolloClient, { props })
  } catch (e) {
    Logger.error(e)
    // not logged in
    return {
      redirect: {
        destination: `/access-denied`,
        permanent: false,
      },
    }
  }
}
