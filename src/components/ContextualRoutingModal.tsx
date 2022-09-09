import { Layout, User } from '@/components'
import { useTheme } from '@/context'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

export const ContextualRoutingModal = ({ isOpen, children }) => {
  const { isDarkMode } = useTheme()
  const [_document, _setDocument] = useState(null)
  const router = useRouter()

  useEffect(() => {
    _setDocument(document)
  }, [])

  useEffect(() => {
    if (_document) {
      if (isOpen) {
        _document.body.classList.add('overflow-hidden')
      }
      return () => {
        _document.body.classList.remove('overflow-hidden')
      }
    }
  }, [isOpen, _document])

  if (!_document) return null

  return (
    <Modal
      appElement={_document.querySelector('#__next')}
      isOpen={isOpen}
      onRequestClose={() => router.back}
      id="react-modal"
      portalClassName="react-modal-portal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={isDarkMode ? 'dark' : ''}>
        <section className="bg-primary text-primary">
          <Layout>{children}</Layout>
        </section>
      </div>
    </Modal>
  )
}
