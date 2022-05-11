import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../commons/store';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Modal } from 'antd';
import RechargeModal from '../../rechargeModal/rechargeModal';
import React from 'react';

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

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
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
  const router = useRouter();
  const [isToken, setIsToken] = useRecoilState(accessTokenState);
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logout] = useMutation(LOGOUT_USER);

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

  const onClickLogOut = async () => {
    try {
      const result = await logout({
        variables: {
          logoutUser: true,
        },
      });
      setIsToken('');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo onClick={onClickLogo}>NoStrss</WrapperLogo>
        <WrapperHeaderMenu>
          <div>{data?.fetchUserLoggedIn.userPoint.amount}포인트</div>
          <SignUpButton onClick={onClickReCharge}>충전하기</SignUpButton>
          <React.StrictMode>
            <Modal
              title='충전하기'
              visible={isOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              centered
            >
              <RechargeModal setIsOpen={setIsOpen}></RechargeModal>
            </Modal>
          </React.StrictMode>

          {isToken ? (
            <>
              <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
              <SignUpButton onClick={onClickLogOut}>로그아웃</SignUpButton>
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
