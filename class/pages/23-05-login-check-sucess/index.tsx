import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인 후 이용 가능합니다');
      router.push('/23-04-login-check');
    }
  }, []);
  // 작동은 하나 이런 기능이 필요한 곳에 모두 넣어줘야 한다.
  // 이런 곳이 많을 경우 수정이 필요할 떄 어려움이 있다. 따로 빼서 임포트 해서 쓰면 어떨까? => HOC!!

  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
      <div>이메일주소는 {data?.fetchUserLoggedIn.email}</div>
    </div>
  );
}
