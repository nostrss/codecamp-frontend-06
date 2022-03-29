import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://backend06.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
