import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../commons/store';

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloConfig(props: IApolloProps) {
  const [accessToken] = useRecoilState(accessTokenState);
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
