import React, { FC, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useClickawayListener } from '@/hooks'

type Props = {
  children: any
  show: boolean
  title: string
  handleClose: () => void
}

export const Modal: FC<Props> = ({ children, show, title, handleClose }) => {
  const backgroundRef = useRef(null)

  useClickawayListener(backgroundRef, () => handleClose())

  return (
    <>
      <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
        <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none scrollbar z-300 focus:outline-none">
          <div
            ref={backgroundRef}
            className="relative w-auto max-w-3xl max-h-screen px-8 mx-auto my-6"
          >
            <div className="relative flex flex-col w-full border-0 rounded-md shadow-sm outline-none bg-primary focus:outline-none">
              {title && (
                <div className="px-4 py-2 mb-2 text-sm font-bold tracking-wide text-center uppercase border-b-2 border-gray-300 rounded-t dark:border-gray-700">
                  {title}
                </div>
              )}

              <div>{children}</div>
              <div className="flex items-center justify-end px-3 py-2 rounded-b">
                <button className="btn bg-nord11" type="button" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition in={show} timeout={300} classNames="translucent-bg" unmountOnExit>
        <div className="translucent-overlay" />
      </CSSTransition>
    </>
  )
}
