import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
  handleSubmit: any
  inputBgStyles: string
  autoFocus?: boolean
}
export const MessageForm: React.FC<Props> = ({
  handleSubmit,
  inputBgStyles,
  autoFocus = false,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { register, handleSubmit: rhfHandleSubmit, reset } = useForm()

  const interceptSubmit = (e) => {
    rhfHandleSubmit(handleSubmit)(e)
    textareaRef.current?.focus()
    reset()
  }
  return (
    <form onSubmit={interceptSubmit}>
      <div className="mt-2 ">
        <textarea
          name="message"
          autoFocus={autoFocus}
          data-testid="message-textarea"
          {...register('message')}
          className={`textarea w-full text-lg ${inputBgStyles}`}
          rows={4}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              interceptSubmit(e)
            }
          }}
        />
      </div>

      <div className="flex justify-end my-1">
        <button className="btn bg-nord7" type="submit" data-testid="message-submit-button">
          send
        </button>
      </div>
    </form>
  )
}
