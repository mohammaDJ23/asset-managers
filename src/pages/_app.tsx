import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../@asset-manager/redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            maxWidth: '400px',
          },
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
