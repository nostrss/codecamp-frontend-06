import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// 함수명을 use ***, 그래야 나중에 예측이 된다.

export function useAuth() {
  // 권한 분기 로직 추가

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인 후 이용 가능합니다');
      router.push('/23-06-login-hoc');
    }
  }, []);

  return {
    // isLoading: isLoading, 객체에서 키와 밸류가 같으면 키를 생략할 수 있다.
    isLoading,
  };
}
