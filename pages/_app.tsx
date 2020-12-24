import React from 'react'
import { AppProps } from 'next/app'
import { ProvideAuth } from '../utils/auth'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  )
}
