import '../styles/globals.css'
import 'antd/dist/antd.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppProps } from 'next/app'
import Layout from '../src/commons/layout/index'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://backend06.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp