import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { ReactNode, useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  accessTokenState,
  restoreAccessTokenLoadable,
  // userInfoState,
} from '../../../commons/store';
import { onError } from '@apollo/client/link/error';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloConfig(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   getAccessToken().then((newAccessToken) => {
  //     setAccessToken(newAccessToken);
  //   });
  // }, []);

  useEffect(() => {
    restoreAccessToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인가 체크
        if (err.extensions.code === 'UNAUTHENTICATED') {
          // 2-1. 리프레시 토큰으로 엑세스 토큰을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            // 3-2 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'https://backend06.codebootcamp.co.kr/graphql30',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // uri: 'http://backend06.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
