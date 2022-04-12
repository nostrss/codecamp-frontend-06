import 'antd/dist/antd.css';
// import '../styles/globals.css';

import { AppProps } from 'next/app';
import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { RecoilRoot } from 'recoil';
import ApolloConfig from '../src/components/commons/apollo';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8YCjcCG0Yko0VE-qPlsf6oET-bOwFxj0',
  authDomain: 'codecamp-fd9d5.firebaseapp.com',
  projectId: 'codecamp-fd9d5',
  storageBucket: 'codecamp-fd9d5.appspot.com',
  messagingSenderId: '773973841287',
  appId: '1:773973841287:web:8d9d1ef4815fe056772f22',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloConfig>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloConfig>
    </RecoilRoot>
  );
}

export default MyApp;
