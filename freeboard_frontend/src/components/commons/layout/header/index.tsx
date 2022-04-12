import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../commons/store';
import { gql, useQuery } from '@apollo/client';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: white;
  justify-content: center;
  position: fixed;
  box-shadow: -1px 1px 1px 0 rgb(42 42 42 / 27%);
  z-index: 100;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
  width: 1200px;
  height: 100%;
`;

const WrapperHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
`;
const WrapperLogo = styled.div`
  width: 200px;
  height: 40px;
  line-height: 40px;
  :hover {
    background-color: lightgray;
  }
`;

const SignUpButton = styled.button`
  width: 90px;
  height: 40px;
  margin-left: 20px;
  font-size: 20px;
  line-height: 40px;
  border-radius: 5px;
`;

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  const [isToken] = useRecoilState(accessTokenState);

  const onClickLogo = () => {
    router.push('/boards');
  };

  const onClickSignIn = () => {
    router.push('/signin');
  };

  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo onClick={onClickLogo}>NoStrss</WrapperLogo>
        <WrapperHeaderMenu>
          {isToken ? (
            <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
          ) : (
            <>
              <SignUpButton onClick={onClickSignIn}>로그인</SignUpButton>
              <SignUpButton>회원가입</SignUpButton>
            </>
          )}
        </WrapperHeaderMenu>
      </WrapperHeader>
    </Wrapper>
  );
}
