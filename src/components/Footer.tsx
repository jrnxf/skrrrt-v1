import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Modal } from '.'
import axios from 'axios'
export const Footer = () => {
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [commitSha, setCommitSha] = useState('loading...')

  useEffect(() => {
    if (showInfoModal) {
      axios.get('/api/info').then((data) => {
        setCommitSha(data.data.commitSha || 'n/a')
      })
    }
  }, [showInfoModal])

  return (
    <>
      <footer className="flex flex-row justify-between text-sm font-semibold mt-6 safari-only bg-nord5 dark:bg-nord1 h-32">
        {/* div used for spacing */}
        <div className="w-0 sm:w-full" />
        <div className="flex justify-center w-full">
          <div className="px-6">
            <Link href="/terms">terms</Link>
          </div>

          <div className="px-6">
            <Link href="/privacy">privacy</Link>
          </div>

          <div className="px-6 cursor-pointer" onClick={() => setShowInfoModal(!showInfoModal)}>
            info
          </div>

          <a
            href="https://patreon.com/skrrrt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6"
          >
            donate
          </a>
        </div>
        <div className="w-0 sm:w-full sm:flex sm:justify-end">
          <a href="https://colby.sh" className="mr-4 hidden sm:block">
            made with
            <span className="ml-1 mr-1" role="img" aria-label="love">
              ❤️
            </span>
            by colby
          </a>
        </div>
      </footer>
      <Modal
        title="Application Info"
        show={showInfoModal}
        handleClose={() => setShowInfoModal(false)}
      >
        <div className="mx-4 my-1 font-semibold text-sm">
          <div>
            environment: <span className="text-secondary">{process.env.NODE_ENV}</span>
          </div>
          <div>
            version: <span className="text-secondary">{commitSha?.slice(0, 10)}</span>
          </div>
        </div>
      </Modal>
    </>
  )
}
