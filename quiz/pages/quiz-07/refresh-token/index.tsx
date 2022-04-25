// 1. 로그인을 했을 때, 받아오게 되는 refreshToken을 쿠키에 저장하기 위해 Apollo 설정에서, credentials를 include로 설정해 주세요.
// ⇒ 설정 후, 로그인을 시도하면 refreshToken을 아래와 같이 받아오게 됩니다.

//     ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93be458a-9c87-4742-810f-957b71d90695/Untitled.png)

// 1. 실제로 에러가 발생하였을 때, 인증관련 에러인지 확인하고, 인증 에러라면 refreshToken으로 accessToken을 다시 받아오는 로직을 getAccessToken이라는 함수를 만들고 작성해 주세요.

// 2. 새롭게 받은 accessToken을 활용해서, 기존에 실패했던 쿼리를 재시도 하는 로직을 Apollo 설정의 onError 내부에 작성해 주세요.

// 3. 새로고침을 해서 변수에 저장된 accessToken이 초기화 되었을 때, 새롭게 accessToken을 요청해서 적용하는 코드를 Apollo header 설정에서 추가해 주세요.
