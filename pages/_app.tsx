import { AppProps } from 'next/app';
import { FC } from 'react';

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) => {
  const Layout = Component.Layout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
