import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/icon_x192.png" />
          <link rel="manifest" href="/manifest.json" />
          {/* This should be be inlined at build time due to Next.js Automatic Webfont Optimization
            https://nextjs.org/blog/next-10-2#automatic-webfont-optimization*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {/* PWACompat is a library that brings the Web App Manifest to non-compliant browsers for better Progressive Web Apps. This mostly means creating splash screens and icons for Mobile Safari, as well as supporting IE/Edge's Pinned Sites feature. */}
          <script async src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
