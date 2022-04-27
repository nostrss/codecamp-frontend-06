import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../commons/store';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Modal } from 'antd';
import RechargeModal from '../../rechargeModal/rechargeModal';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
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
  const [isOpen, setIsOpen] = useState(false);

  // const [userInfo] = useRecoilState(userInfoState);

  const onClickLogo = () => {
    router.push('/boards');
  };

  const onClickSignIn = () => {
    router.push('/signin');
  };

  const onClickSignUp = () => {
    router.push('/signup');
  };

  const onClickReCharge = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  console.log(data?.fetchUserLoggedIn.userPoint);

  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo onClick={onClickLogo}>NoStrss</WrapperLogo>
        <WrapperHeaderMenu>
          <div>{data?.fetchUserLoggedIn.userPoint.amount}포인트</div>
          <SignUpButton onClick={onClickReCharge}>충전하기</SignUpButton>
          <Modal
            title='충전하기'
            visible={isOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <RechargeModal setIsOpen={setIsOpen}></RechargeModal>
          </Modal>

          {isToken ? (
            <>
              <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
              <SignUpButton>로그아웃</SignUpButton>
            </>
          ) : (
            <>
              <SignUpButton onClick={onClickSignIn}>로그인</SignUpButton>
              <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
            </>
          )}
        </WrapperHeaderMenu>
      </WrapperHeader>
    </Wrapper>
  );
}
