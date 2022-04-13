import { gql, useQuery } from '@apollo/client';
import { withAuth } from '../../src/components/commons/hocs/withAuth';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
      <div>이메일주소는 {data?.fetchUserLoggedIn.email}</div>
    </div>
  );
}

export default withAuth(LoginSuccessPage);
