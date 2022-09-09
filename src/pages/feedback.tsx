import { FeedbackForm } from '@/forms'
import axios from 'axios'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import React from 'react'
import { useToasts } from 'react-toast-notifications'
import { useMediaUpload } from '@/context'

const Feedback = () => {
  const router = useRouter()
  const { addToast } = useToasts()
  const { uploadFileToS3 } = useMediaUpload()

  const handleSubmit = async (data) => {
    const { email, feedback, file } = data

    let build = null

    try {
      const response = await axios.get('/api/build')
      build = response.data
    } catch (error) {
      console.log('An error occurred fetching build details prior to sending feedback', error)
    }

    try {
      let attachment = ''
      if (file) {
        const { url } = await uploadFileToS3?.({
          file,
          prefix: 'tmp/',
        })

        attachment = url
      }

      await axios.post('/api/send/feedback', {
        email,
        feedback,
        attachment,
        build,
      })

      addToast(`Feedback sent!`, {
        appearance: 'info',
        autoDismiss: true,
      })
    } catch (error) {
      console.log(error)
      addToast(`An error occurred sending your feedback. Please try again later.`, {
        appearance: 'error',
        autoDismiss: true,
      })
    } finally {
      router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>skrrrt | feedback</title>
      </Head>

      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-center ">
          <FeedbackForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default Feedback
