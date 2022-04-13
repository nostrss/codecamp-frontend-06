import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../store';

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloConfig(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const mylocalToken = localStorage.getItem('accessToken');
    setAccessToken(mylocalToken || '');
  }, []);

  const uploadLink = createUploadLink({
    uri: 'http://backend06.codebootcamp.co.kr/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // uri: 'http://backend06.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
