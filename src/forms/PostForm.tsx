import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ChipInput, Textarea } from '.'
import { Posts, usePostTagOptionsQuery } from '@/types'
import { FileDropzone } from '@/components'
import { Spinner } from '@/components/svg'
import { CSV_SEPARATOR } from '@/utils'
import { IframelyInput } from './IframelyInput'
import { Radios } from './Radios'

type Props = {
  handleSubmit: (data: any) => any
  existingPost?: Posts
  attachmentInput?: boolean
}
export const PostForm: FC<Props> = ({
  handleSubmit,
  existingPost = null,
  attachmentInput = false,
}) => {
  const { data: tagOptions } = usePostTagOptionsQuery()

  const methods = useForm({
    defaultValues: {
      file: null,
      embed_url: null,
      oembed_json: null,
      body: existingPost?.body || '',
      tags: existingPost?.tags?.map((t) => t.tag)?.join(CSV_SEPARATOR) || '',
      attachmentInput: '',
    },
  })

  const { handleSubmit: rhfHandleSubmit, formState, watch, getValues, trigger } = methods

  const attachmentType = watch('attachmentInput')

  const handleOnDrop = () => {
    trigger(['body', 'file'])
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={rhfHandleSubmit(handleSubmit)} className="w-full">
        <div className="mb-4">
          <Textarea
            label="Body"
            name="body"
            rows={15}
            autoFocus
            rules={{
              validate: (val) => {
                const currentValues = getValues()
                if (!currentValues.file && !currentValues.embed_url && !currentValues.oembed_json) {
                  if (!val || val.trim() === '') {
                    return 'Body is required unless an attachment is present'
                  }
                }
                return undefined
              },
            }}
          />
        </div>

        <ChipInput
          name="tags"
          label="tags"
          subLabel="(3 max)"
          maxTags={3}
          tagOptions={tagOptions?.e_post_tags.map((t) => t.type) || []}
          rules={{
            validate: (val) => {
              if (!val) {
                return 'At least one tag is required'
              }
              return undefined
            },
          }}
        />

        {attachmentInput && (
          <>
            <Radios label="Attachment" options={['', 'file', 'embed']} name="attachmentInput" />
            {attachmentType === 'file' && (
              <div>
                <label className="label text-sm">Attachment</label>
                <FileDropzone handleOnDrop={handleOnDrop} name="file" required={false} />
              </div>
            )}

            {attachmentType === 'embed' && (
              <div>
                {/* <Alert color="blue" title="How To Embed" closeable={false}>
             Paste in any url below and click generate. If no preview is found, try checking
             the privacy policy on the content you are trying to share. Unless the content is
             publicy accessible no preview will be made. If the problem persists, its
             possible no metadata exists on the url, associated with the url, meaning no
             preview is possible.
           </Alert> */}
                <div>
                  <IframelyInput label="url" urlName="embed_url" />
                </div>
              </div>
            )}
          </>
        )}

        <div className="flex items-center justify-end my-4">
          <button
            data-testid="post-form-submit"
            className="flex items-center btn bg-nord7"
            type="submit"
          >
            {existingPost ? 'Update' : 'Create'}
            {formState.isSubmitting && (
              <div className="ml-1">
                <Spinner className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
