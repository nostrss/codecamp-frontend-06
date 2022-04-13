import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../commons/store';

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloConfig(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 브라우저에서 실행되야 하는 부분이 서버에서 실행이 되어 문제가 발생할때!!
  // 1번 방법 : 더이상 지원되지 않음
  // if (process.browser) {

  // } else {

  // }

  // window = 브라우저

  // 2번 방법 :
  if (typeof window !== 'undefined') {
    console.log('여기는 브라우저이다');
    // const mylocalToken = localStorage.getItem('accessToken');
    // setAccessToken(mylocalToken || '');
  } else {
    console.log('여기는 프론트 엔드 서버다');
  }

  // 3번 방법 : useEffect로 실행, useEffect는 pre렌더링때 실행이 되지 않기 때문에 괜찮음
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
