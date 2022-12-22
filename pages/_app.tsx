import '@assets/main.css';
import { AppProps } from 'next/app';
import { FC, ReactNode } from 'react';
import { UIProvider, useUI } from '@components/ui/context';

interface Props {
  children?: ReactNode;
}

const Noop: FC<Props> = ({ children }) => <>{children}</>;

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) => {
  const Layout = Component.Layout ?? Noop;
  const ui = useUI();

  console.log(ui);

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
};

export default App;
