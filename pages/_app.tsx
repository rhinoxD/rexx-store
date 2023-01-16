import '@assets/main.css'
import 'keen-slider/keen-slider.min.css'
import { AppProps } from 'next/app'
import { FC, ReactNode } from 'react'
import { UIProvider } from '@components/ui/context'

const Noop: FC<any> = ({ children }) => <>{children}</>

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) => {
  const Layout = Component.Layout ?? Noop

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default App
