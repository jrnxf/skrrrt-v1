import { useRef } from 'react'
import _TextareaAutosize from 'react-textarea-autosize'
import { useToasts } from 'react-toast-notifications'
import { useAuth } from '@/context'
import { preprocessText } from '@/utils'

export const TextareaAutosize = ({ handleSubmit }) => {
  const { isAuthenticated } = useAuth()
  const messageRef = useRef<HTMLTextAreaElement>()
  const { addToast } = useToasts()
  return (
    <_TextareaAutosize
      name="message"
      ref={messageRef}
      placeholder="Write a message..."
      minRows={3}
      maxRows={6}
      className="w-full px-4 py-3 text-lg leading-tight border-0 rounded-md shadow-sm resize-none dark:bg-nord1 bg-nord5 text-nord6 keyboard-focus-visible placeholder-shown dark:placeholder-nord4"
      onFocus={() => {
        if (!isAuthenticated) {
          addToast(`You must login to write a message.`, {
            appearance: 'info',
            autoDismiss: true,
          })
        }
      }}
      onKeyPress={(e) => {
        if (!isAuthenticated) e.preventDefault()
        else if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          const cleanedText = preprocessText(messageRef.current?.value)
          handleSubmit(cleanedText)
          // reset
          messageRef.current.value = ''
        }
      }}
    />
  )
}
