import { CustomToast, Layout } from '@/components'
import { AuthProvider, MediaUploadProvider, ThemeProvider, UserActionsProvider } from '@/context'
import { useApollo } from '@/lib/apollo'
import '@/styles/index.css'
import { META_DEFAULTS } from '@/utils'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { CookiesProvider } from 'react-cookie'
import { ToastProvider } from 'react-toast-notifications'
import 'tippy.js/dist/tippy.css'
import 'video.js/dist/video-js.css'

const App = ({ Component, pageProps }: AppProps<{ user: any }>) => {
  const apolloClient = useApollo(pageProps)

  const { user } = pageProps || {}

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        console.log('Service worker loaded.')

        navigator.serviceWorker
          .register('/sw.js')
          .then(() => console.log('Service worker registered!')),
          (err) => console.log('Service worker registration error.', err)
      })
    }
  }, [])
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={META_DEFAULTS.DESCRIPTION} key="description" />
        <meta property="og:image" content={META_DEFAULTS.OG_IMAGE} key="og:image" />
        <meta property="og:title" content="skrrrt" key="og:title" />
        <meta property="og:site_name" content="skrrrt.io" key="og:site_name" />
        <meta property="og:url" content="https://skrrrt.io" key="og:url" />
        <meta property="og:description" content={META_DEFAULTS.DESCRIPTION} key="og:description" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="404238334158122" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;"
        />
      </Head>
      <CookiesProvider>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider>
            <ToastProvider
              components={{
                Toast: ({ children, ...props }) => <CustomToast {...props}>{children}</CustomToast>,
              }}
              placement="bottom-right"
              autoDismiss
              autoDismissTimeout={3000}
            >
              <AuthProvider initialUser={user || null}>
                <MediaUploadProvider>
                  <UserActionsProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </UserActionsProvider>
                </MediaUploadProvider>
              </AuthProvider>
            </ToastProvider>
          </ThemeProvider>
        </ApolloProvider>
      </CookiesProvider>
    </div>
  )
}

export default App
