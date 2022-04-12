// import '../styles/globals.css';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';

// firebase 시작
// firebase console에서 복사
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { RecoilRoot } from 'recoil';
import ApolloConfig from '../src/components/commons/apollo';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFB9swY4vkUMwxQfgB-b2o2qTpiLAFyR4',
  authDomain: 'portfolio-12174.firebaseapp.com',
  projectId: 'portfolio-12174',
  storageBucket: 'portfolio-12174.appspot.com',
  messagingSenderId: '761084054508',
  appId: '1:761084054508:web:9461ada6c0ef0209228ec9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// firebase 종료

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
