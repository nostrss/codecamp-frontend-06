// 3. 이동된 페이지에서 가격을 선택할 수 있는 선택상자와 [ 충전하기 ] 버튼을 만들어 주세요.
// ⇒ 가격은 500원, 1000원, 2000원, 5000원을 선택 가능합니다.
// 4. 가격을 선택하고 [ 충전하기 ] 버튼을 누르면, 해당 금액으로 아임포트 결제화면을 띄워주세요.

// Html의 head 태그를 생성하는 기능을 next가 제공
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

// typescript를 위해 작성
declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment() {
  const router = useRouter();
  const [amount, setAmount] = useState(100);

  // https://docs.iamport.kr/implementation/payment

  const requestPay = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    const IMP = window.IMP; // 생략 가능
    IMP.init('imp80695567'); // Example: imp00000000 가맹점 식별코드
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
        m_redirect_url: 'http://localhost:3000/quiz-06/payment/complete',
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          router.push('/quiz-06/payment/complete');
          console.log(rsp);
        } else {
          // 결제 실패 시 로직,
          alert('결제에 실패했습니다. 다시 시도해 주세요');
        }
      }
    );
  };

  const onChangeCoffee = (event) => {
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
      <select name='coffee' onChange={onChangeCoffee}>
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
