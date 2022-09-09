import React, { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { UserDisciplineOptionsQuery, Users } from '@/types'
import { Facebook, Instagram, Twitter, Youtube, DeletableImage, ImageDropzone } from '@/components'
import { useMediaUpload } from '@/context'
import { Spinner, Spotify, TikTok } from '@/components/svg'
import { CSV_SEPARATOR, getCurrentLocation, getHometown, REGEX } from '@/utils'
import {
  GoogleLocationSuggest,
  Input,
  TagInput,
  ChipInput,
  Textarea,
  TrickTodosInput,
} from '@/forms'
import { InformationCircleIcon } from '@heroicons/react/solid'
import Tippy from '@tippyjs/react'
import { MultiSelectFormControl } from './MultiSelectFormControl'

type Props = {
  disciplineOptions: UserDisciplineOptionsQuery
  user: Users
  handleSubmit: (data: any) => any
}

export const ProfileForm: FC<Props> = ({ handleSubmit, user, disciplineOptions }) => {
  const methods = useForm({
    defaultValues: {
      full_name: user?.full_name,
      username: user?.username,
      avatar: user?.avatar,
      current_setup: user?.current_setup,
      bio: user?.bio,
      birthday: user?.birthday,
      twitter: user?.socials?.twitter,
      facebook: user?.socials?.facebook,
      instagram: user?.socials?.instagram,
      youtube: user?.socials?.youtube,
      tiktok: user?.socials?.tiktok,
      spotify: user?.socials?.spotify,
      profession: user?.profession,
      nbds: user?.nbds || [],
      interests: user?.interests || [],
      teams: user?.teams || [],
      favorite_tricks: user?.favorite_tricks || [],
      disciplines: user?.disciplines?.map((x) => x.discipline) || [],
      hometown: JSON.stringify(getHometown(user) || null),
      current_location: JSON.stringify(getCurrentLocation(user) || null),
      trick_todos: user?.trick_todos || [],
    },
  })
  const { handleSubmit: rhfHandleSubmit, formState, setValue, watch } = methods

  const avatar = watch('avatar')
  const current_setup = watch('current_setup')

  const { deleteObjectFromS3ByUrl } = useMediaUpload()

  if (!user) return null

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <FormProvider {...methods}>
          <form onSubmit={rhfHandleSubmit(handleSubmit)}>
            <div className="flex flex-col justify-between mb-2 xl:flex-row">
              <div className="w-full xl:mr-4">
                <Input label="Full Name" name="full_name" />
              </div>
              <div className="w-full">
                <Input
                  label="Username"
                  name="username"
                  rules={{
                    pattern: {
                      value: REGEX.NO_WHITESPACES,
                      message: 'Must not include any whitespaces',
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between mb-2 xl:flex-row">
              <div className="w-full xl:mr-4">
                <Input label="Profession" name="profession" />
              </div>

              <div className="w-full xl:mr-4 ">
                <Input label="Birthday" name="birthday" type="date" />
              </div>
              <div className="w-full xl:mr-4 ">
                <GoogleLocationSuggest name="hometown" label="Hometown" />
              </div>
              <div className="w-full">
                <GoogleLocationSuggest name="current_location" label="Current Location" />
              </div>
            </div>
            <Textarea label="Bio" name="bio" rows={15} />
            <div className="grid w-full gap-4 my-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
              <div className="flex items-center rounded-md shadow-sm bg-nord6 dark:bg-nord0 keyboard-focus-within">
                <Twitter className="w-6 h-6 ml-4 text-secondary" />
                <div className="w-full">
                  <Input
                    name="twitter"
                    rules={{
                      pattern: {
                        value: REGEX.URL,
                        message: 'Must include http(s)://',
                      },
                    }}
                    hasIcon
                  />
                </div>
              </div>
              <div className="flex items-center rounded-md shadow-sm bg-nord6 dark:bg-nord0 keyboard-focus-within">
                <Instagram className="w-6 h-6 ml-4 text-secondary" />
                <div className="w-full">
                  <Input
                    name="instagram"
                    rules={{
                      pattern: {
                        value: REGEX.URL,
                        message: 'Must include http(s)://',
                      },
                    }}
                    hasIcon
                  />
                </div>
              </div>
              <div className="flex items-center rounded-md shadow-sm bg-nord6 dark:bg-nord0 keyboard-focus-within">
                <Facebook className="w-6 h-6 ml-4 text-secondary" />
                <div className="w-full">
                  <Input
                    name="facebook"
                    rules={{
                      pattern: {
                        value: REGEX.URL,
                        message: 'Must include http(s)://',
                      },
                    }}
                    hasIcon
                  />
                </div>
              </div>
              <div className="flex items-center rounded-md shadow-sm bg-nord6 dark:bg-nord0 keyboard-focus-within">
                <TikTok className="w-6 h-6 ml-4 text-secondary" />
                <div className="w-full">
                  <Input
                    name="tiktok"
                    rules={{
                      pattern: {
                        value: REGEX.URL,
                        message: 'Must include http(s)://',
                      },
                    }}
                    hasIcon
                  />
                </div>
              </div>
              <div className="flex items-center rounded-md shadow-sm bg-nord6 dark:bg-nord0 keyboard-focus-within">
                <Youtube className="w-6 h-6 ml-4 text-secondary" />
                <div className="w-full">
                  <Input
                    name="youtube"
                    rules={{
                      pattern: {
                        value: REGEX.URL,
                        message: 'Must include http(s)://',
                      },
                    }}
                    hasIcon
                  />
                </div>
              </div>
              <div className="flex items-center rounded-md shadow-sm bg-nord6 dark:bg-nord0 keyboard-focus-within">
                <Spotify className="w-6 h-6 ml-4 text-secondary" />
                <div className="w-full">
                  <Input
                    name="spotify"
                    rules={{
                      pattern: {
                        value: REGEX.URL,
                        message: 'Must include http(s)://',
                      },
                    }}
                    hasIcon
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <MultiSelectFormControl
                name="disciplines"
                label="disciplines"
                items={disciplineOptions?.e_user_disciplines.map((d) => d.type)}
              />
            </div>
            <div className="mb-3">
              <TagInput label="NBDs" name="nbds" initialItems={user.nbds || []} />
            </div>
            <div className="mb-3">
              <TagInput label="Teams" name="teams" initialItems={user.teams || []} />
            </div>
            <div className="mb-3">
              <TagInput
                label="Favorite Tricks"
                name="favorite_tricks"
                initialItems={user.favorite_tricks || []}
              />
            </div>
            <div className="mb-6">
              <TagInput label="Interests" name="interests" initialItems={user.interests || []} />
            </div>

            <div className="max-w-lg mb-3">
              <label className="flex items-center mr-2 text-sm label">
                Trick Todos
                <Tippy content="drag to reorder">
                  <div>
                    <InformationCircleIcon className="ml-1 h-3.5 w-3.5" />
                  </div>
                </Tippy>
              </label>
              <div className="line h-2px" />
              <TrickTodosInput name="trick_todos" initialValues={watch('trick_todos')} />
            </div>

            <div className="flex flex-col justify-around mb-6 xl:flex-row">
              <div className="w-full max-w-xl mb-4">
                {avatar && typeof avatar === 'string' && (
                  <>
                    <label className="text-sm label">avatar</label>
                    <DeletableImage
                      src={avatar}
                      alt={`${user.full_name} avatar`}
                      className="object-cover rounded-md shadow-sm max-h-64"
                      handleDelete={async () => {
                        setValue('avatar', null)
                        await deleteObjectFromS3ByUrl?.(avatar)
                      }}
                    />
                  </>
                )}
                <div className={avatar && typeof avatar === 'string' ? 'hidden' : ''}>
                  <ImageDropzone label="avatar" name="avatar" />
                </div>
              </div>

              <div className="w-full max-w-xl">
                {current_setup && typeof current_setup === 'string' && (
                  <>
                    <label className="text-sm label">current setup</label>
                    <DeletableImage
                      src={current_setup}
                      alt={`${user.full_name} current setup`}
                      className="object-cover rounded-md shadow-sm max-h-64"
                      handleDelete={async () => {
                        setValue('current_setup', null)
                        await deleteObjectFromS3ByUrl?.(current_setup)
                      }}
                    />
                  </>
                )}
                <div className={current_setup && typeof current_setup === 'string' ? 'hidden' : ''}>
                  <ImageDropzone label="current setup" name="current_setup" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button className="flex items-center btn bg-nord7" type="submit">
                Update
                {formState.isSubmitting && (
                  <div className="ml-1">
                    <Spinner className="w-4 h-4" />
                  </div>
                )}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
