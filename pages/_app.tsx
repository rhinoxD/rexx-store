import { AppProps } from 'next/app';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Noop: FC<Props> = ({ children }) => <>{children}</>;

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) => {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
