import React, { createContext, useContext, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

type UserActionInput = {
  question: string
  requiresDescription: boolean
  initialValue: string
  declineText: string
  confirmText: string
}

type UserActionOutput = {
  accepts: boolean
  response: string | null
}

interface UserActionsContextProps {
  getUserResponse: (UserActionInput) => Promise<UserActionOutput>
}
export const UserActionsContext = createContext<UserActionsContextProps>({
  getUserResponse: async () => ({
    accepts: false,
    response: null,
  }),
})

export const useUserActions = () => useContext(UserActionsContext)

export const UserActionsProvider = ({ children }) => {
  const [question, setQuestion] = useState('')
  const [declineText, setDeclineText] = useState('no')
  const [confirmText, setConfirmText] = useState('yes')
  const [showDescriptionField, setShowDescriptionField] = useState(false)
  const [response, setResponse] = useState<string | null>()
  const [showUserActionsModal, setShowUserActionsModal] = useState(false)

  const resolver = useRef<any>()

  const getUserResponse = ({
    question,
    requiresDescription = false,
    initialValue = '',
    declineText = 'no',
    confirmText = 'yes',
  }): Promise<UserActionOutput> => {
    setShowDescriptionField(requiresDescription)
    setQuestion(question)
    setShowUserActionsModal(true)
    setResponse(initialValue)
    setDeclineText(declineText)
    setConfirmText(confirmText)
    return new Promise((resolve) => {
      resolver.current = resolve
    })
  }

  const handleConfirm = () => {
    resolver.current &&
      resolver.current({
        accepts: true,
        response,
      })
    setShowUserActionsModal(false)
  }

  const handleDecline = () => {
    resolver.current &&
      resolver.current({
        accepts: false,
        response: null,
      })
    setShowUserActionsModal(false)
  }

  return (
    <UserActionsContext.Provider value={{ getUserResponse }}>
      <CSSTransition in={showUserActionsModal} timeout={200} classNames="modal" unmountOnExit>
        <div className="modal-container">
          <div className="relative w-full max-w-xl max-h-screen px-8 mx-auto my-6">
            <div className="relative flex flex-col w-full p-4 rounded-md shadow-sm outline-none bg-nord6 dark:bg-nord0 focus:outline-none">
              <div className="mb-2 text-center">{question}</div>
              {showDescriptionField && (
                <textarea
                  className="textarea"
                  rows={5}
                  value={response || ''}
                  onChange={(e) => setResponse(e.target.value)}
                />
              )}
              <div className="flex justify-center mt-4">
                <button className="mx-2 btn bg-nord11" onClick={handleDecline} autoFocus>
                  {declineText}
                </button>
                <button className="mx-2 btn bg-nord14" onClick={handleConfirm}>
                  {confirmText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={showUserActionsModal}
        timeout={200}
        classNames="translucent-bg"
        unmountOnExit
      >
        <div className="translucent-overlay" />
      </CSSTransition>
      {children}
    </UserActionsContext.Provider>
  )
}
