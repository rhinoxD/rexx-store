import { AppProps } from 'next/app';
import { Layout } from '@components/common';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
