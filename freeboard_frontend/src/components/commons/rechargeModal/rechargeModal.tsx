import { useState } from 'react';
import Head from 'next/head';
import router from 'next/router';
import { gql, useMutation } from '@apollo/client';

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

export default function RechargeModal(props) {
  const [createRecharge] = useMutation(CREATE_RECHARGE);
  const [amount, setAmount] = useState(100);

  const requestPay = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    const IMP = window.IMP; // 생략 가능
    IMP.init('imp49910675'); // Example: imp00000000 가맹점 식별코드
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: 'ORD20180131-0000011',
        name: '아이스 아메리카노',
        amount: amount,
        buyer_email: 'jintagi@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
        // m_redirect_url: 'http://localhost:3000/usedmarket',
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          const response = await createRecharge({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          router.push('/usedmarket');
          console.log(rsp);
          console.log(response);
          props.setIsOpen(false);
        } else {
          // 결제 실패 시 로직,
          alert('결제에 실패했습니다. 다시 시도해 주세요');
        }
      }
    );
  };

  const onChangeRecharge = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div>
      <Head>
        <script
          type='text/javascript'
          src='https://code.jquery.com/jquery-1.12.4.min.js'
        ></script>
        <script
          type='text/javascript'
          src='https://cdn.iamport.kr/js/iamport.payment-1.2.0.js'
        ></script>
      </Head>
      <select name='recharge' onChange={onChangeRecharge}>
        <option disabled selected>
          충전금액을 선택하세요
        </option>
        <option value={500}>아이스 아메리카노(S): 500원</option>
        <option value={1000}>아이스 아메리카노(M): 1000</option>
        <option value={2000}>아이스 아메리카노(L): 2000</option>
        <option value={5000}>아이스 아메리카노(XL): 5000</option>
      </select>
      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}
