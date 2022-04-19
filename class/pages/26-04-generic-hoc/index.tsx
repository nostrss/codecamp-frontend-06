// @ts-ignore

import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

// prettier-ignore
export const withAuth = (Component : ComponentType) => <P extends {}> (props : P) => {
  // 권한 분기 로직 추가

  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인 후 이용 가능합니다');
      router.push('/23-06-login-hoc');
    }
  }, []);

  return <Component {...props} />;
};
