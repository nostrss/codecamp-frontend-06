import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../src/components/commons/store';

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
  const [isToken, setIsToken] = useRecoilState(accessTokenState);

  const [load, setLoad] = useState(false);

  console.log(data);
  console.log(isToken);

  useEffect(() => {
    if (data) {
      setLoad(true);
    }
  }, [data]);

  useEffect(() => {
    if (load || isToken === '') {
      if (!data?.fetchUserLoggedIn.name) {
        alert('로그인 이후 이용해주십시오');
        router.push('/17-login');
      }
    }
  }, [load]);

  return (
    <div>
      <div>
        <div>
          <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
          <div>이메일주소는 {data?.fetchUserLoggedIn.email}</div>
        </div>
      </div>
    </div>
  );
}
