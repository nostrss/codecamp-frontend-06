// import { gql, useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../src/commons/store';
import { withAuth } from '../../src/components/commons/hocs/withAuth';

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userInfo] = useRecoilState(userInfoState);

  return (
    <div>
      <div>{userInfo.name}님 환영합니다</div>
      <div>이메일주소는 {userInfo.email}</div>
    </div>
  );
}

export default withAuth(LoginSuccessPage);
