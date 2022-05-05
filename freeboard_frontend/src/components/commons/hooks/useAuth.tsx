import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from '../../../commons/store';

// 함수명을 use ***, 그래야 나중에 예측이 된다.

export function useAuth() {
  // 권한 분기 로직 추가

  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoading] = useState(true);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   if (!accessToken) {
  //     alert('로그인 후 이용 가능합니다');
  //     router.push('/signin');
  //   }
  // }, []);
  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert('로그인 후 이용 가능합니다!!!');
          router.push('/signin');
        }
      });
    }
  }, []);

  return {
    // isLoading: isLoading, 객체에서 키와 밸류가 같으면 키를 생략할 수 있다.
    isLoading,
  };
}
