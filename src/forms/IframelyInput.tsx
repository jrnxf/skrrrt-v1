import axios from 'axios'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { OembedCard } from '@/components'
import { classNames, isProduction } from '@/utils'

type Props = {
  label?: string
  urlName: string
}
export const IframelyInput: FC<Props> = ({ label, urlName }) => {
  const [oembed, setOembed] = useState<any>()
  const {
    register,
    unregister,
    setValue,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext()

  const url = watch(urlName)

  const previewEmbed = useCallback(async () => {
    if (url && url !== '') {
      try {
        const res = await axios.get(
          `https://${isProduction() ? 'oembed.skrrrt.io' : 'localhost:8062'}/oembed?url=${encodeURI(
            url,
          )}&api_key=a4be3edfcb99a978cf9aa6&omit_script=1&omit_css=1`,
        )

        return setOembed(res.data)
      } catch {
        setError(urlName, {
          message: 'Unable to generate preview',
        })
        setOembed(undefined)
      }

      // setError(urlName, {
      //   message: 'No preview found',
      // })
    } else {
      setError(urlName, {
        message: 'URL needed for preview',
      })
      setOembed(undefined)
    }
  }, [url, setError, urlName])

  useEffect(() => {
    clearErrors(urlName)
  }, [urlName, clearErrors, setValue])

  useEffect(() => {
    register(urlName)
    return () => {
      unregister(urlName)
    }
  }, [register, unregister, urlName])

  return (
    <div>
      {label && (
        <label htmlFor="url" className="mr-2 text-sm label">
          {label}
        </label>
      )}
      <div className="flex items-center">
        <div className="flex-grow">
          <input
            {...register(urlName)}
            name={urlName}
            type="text"
            className="w-full px-3 py-2 leading-tight border-0 rounded text-primary bg-nord5 dark:bg-nord1 keyboard-focus-visible"
          />
          {errors && errors[urlName] && (
            <p className="text-xs font-semibold text-nord11">
              {errors[urlName].message.toString()}
            </p>
          )}
        </div>
        <button className="ml-4 btn bg-nord8" type="button" onClick={previewEmbed}>
          preview
        </button>
      </div>
      <div className="mt-4">
        <OembedCard oembed={oembed} />
      </div>
    </div>
  )
}
