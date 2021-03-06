import { useEffect, useState } from 'react';
// import Head from 'next/head';
import router from 'next/router';
import { gql, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { FETCH_USER_LOGGED_IN } from '../../units/signin/signin.query';
import { accessTokenState } from '../../../commons/store';
import { useRecoilState } from 'recoil';

declare const window: typeof globalThis & {
  IMP: any;
};

export const CREATE_RECHARGE = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
      status
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  width: 460px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  width: 384px;
  height: 52px;
  border-bottom: 1px solid black;
  margin-bottom: 17px;
`;

export const Option = styled.option`
  width: 384px;
  height: 52px;
`;

export const Button = styled.button`
  width: 384px;
  height: 51px;
  padding: 14px 16px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: white;
  border: none;
  :hover {
    background-color: black;
  }
`;

export default function RechargeModal(props: any) {
  const [createRecharge] = useMutation(CREATE_RECHARGE);
  const [amount, setAmount] = useState(100);
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    document.head.appendChild(jqueryScript);

    const iamportScript = document.createElement('script');
    iamportScript.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
    document.head.appendChild(iamportScript);
  }, []);

  const requestPay = () => {
    // IMP.request_pay(param, callback) ????????? ??????
    const IMP = window.IMP; // ?????? ??????
    IMP.init('imp49910675'); // Example: imp00000000 ????????? ????????????
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: 'ORD20180131-0000011',
        name: '????????? ???????????????',
        amount: amount,
        buyer_email: 'jintagi@gmail.com',
        buyer_name: '?????????',
        buyer_tel: '010-4242-4242',
        buyer_addr: '??????????????? ????????? ?????????',
        buyer_postcode: '01181',
        // m_redirect_url: 'http://localhost:3000/usedmarket',
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // ?????? ?????? ??? ??????,
          const response = await createRecharge({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
                context: {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                },
              },
            ],
          });
          props.setIsOpen(false);
          alert('????????? ?????????????????????');
          router.push('/usedmarket');
          console.log(rsp);
          console.log(response);
        } else {
          // ?????? ?????? ??? ??????,
          alert('????????? ??????????????????. ?????? ????????? ?????????');
        }
      }
    );
  };

  const onChangeRecharge = (event: any) => {
    setAmount(event.target.value);
  };
  return (
    <Wrapper>
      <Title>???????????? ????????? ??????????????????!</Title>
      <Select name='recharge' onChange={onChangeRecharge}>
        <Option disabled value='default'>
          ????????? ??????
        </Option>
        <Option value={100}>100</Option>
        <Option value={500}>500</Option>
        <Option value={2000}>2000</Option>
        <Option value={5000}>5000</Option>
      </Select>
      <Button onClick={requestPay}>????????????</Button>
    </Wrapper>
  );
}
