// import '../styles/globals.css';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { createUploadLink } from 'apollo-upload-client';

// firebase 시작
// firebase console에서 복사
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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
  const uploadLink = createUploadLink({
    uri: 'http://backend06.codebootcamp.co.kr/graphql',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // uri: 'http://backend06.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
