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
// import Head from 'next/head'
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
    <div>
      {/* <Head> 모든페이지에서 가능하나 효율적이지 않음
        <script
          type='text/javascript'
          src='//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a'
        ></script>
      </Head> */}

      <RecoilRoot>
        <ApolloConfig>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloConfig>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
