// @ts-ignore

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const withAuth = (Component) => (props) => {
  // 권한 분기 로직 추가

  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인 후 이용 가능합니다');
      router.push('/example/hoc/login');
    }
  }, []);

  return <Component {...props} />;
};
