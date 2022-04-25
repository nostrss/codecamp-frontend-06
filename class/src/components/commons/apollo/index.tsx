import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

// 0425 추가
import { onError } from '@apollo/client/link/error';
// import { GraphQLClient, gql } from 'graphql-request';

import { createUploadLink } from 'apollo-upload-client';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';
import { accessTokenState, userInfoState } from '../../../commons/store';

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloConfig(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // 브라우저에서 실행되야 하는 부분이 서버에서 실행이 되어 문제가 발생할때!!
  // 1번 방법 : 더이상 지원되지 않음
  // if (process.browser) {

  // } else {

  // }

  // window = 브라우저

  // 2번 방법 :
  // if (typeof window !== 'undefined') {
  //   console.log('여기는 브라우저이다');
  // const mylocalToken = localStorage.getItem('accessToken');
  // setAccessToken(mylocalToken || '');
  // } else {
  //   console.log('여기는 프론트 엔드 서버다');
  // }

  // 3번 방법 : useEffect로 실행, useEffect는 pre렌더링때 실행이 되지 않기 때문에 괜찮음

  useEffect(() => {
    // const mylocalToken = localStorage.getItem('accessToken');
    // 문자열로 저장되어
    // const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    // setAccessToken(mylocalToken || '');
    // accessToken 재발급 받아서 state 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 0425 추가

  // 라이브러리로 옮김

  // const RESTORE_ACCESS_TOKEN = gql`
  //   mutation restoreAccessToken {
  //     restoreAccessToken {
  //       accessToken
  //     }
  //   }
  // `;

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인가 체크
        if (err.extensions.code === 'UNAUTHENTICATED') {
          // 2-1. 리프레시 토큰으로 엑세스 토큰을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            // 리프레시 토큰 받을때는 https!! 주의

            // 자주 사용할 거라 별도 라이브러리로 만들자

            // const graphQLClient = new GraphQLClient(
            //   'https://backend06.codebootcamp.co.kr/graphql',
            //   {
            //     headers: {
            //       authorization: 'Bearer MY_TOKEN',
            //     },
            //   }
            // );

            // const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
            // const newAccessToken = result.restoreAccessToken.accessToken;
            // 2-2 재발급 받은 accessToken 저장하기

            // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기

            // 기존 헤더 정보 받아오기
            // operation.getContext().headers

            // context 만들기
            // 기존 헤더 정보 + 바뀐 access토큰만 정보 덮어씌우기
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
    uri: 'https://backend06.codebootcamp.co.kr/graphql',
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
