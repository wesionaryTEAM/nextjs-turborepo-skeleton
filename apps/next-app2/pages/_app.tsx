import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from 'ui'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeContextProvider>
    <Component {...pageProps} />
  </ThemeContextProvider>
)

export default MyApp
