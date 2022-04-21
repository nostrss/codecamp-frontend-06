// Html의 head 태그를 생성하는 기능을 next가 제공
import Head from 'next/head';
// import Script from 'next/script';
import { useState } from 'react';

// typescript를 위해 작성
declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);

  // https://docs.iamport.kr/implementation/payment

  const requestPay = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    const IMP = window.IMP; // 생략 가능
    IMP.init('imp80695567'); // Example: imp00000000 가맹점 식별코드
    // imp49910675 로 중고마켓에서는 사용해라
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: 'ORD20180131-0000011',
        // 주석 처리 하면 랜덤으로 생성됨
        name: '노르웨이 회전 의자',
        amount: amount,
        buyer_email: 'jintagi@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
        // 모바일에서 결제 후 돌아갈 주소
        m_redirect_url: 'http://localhost:3000/28-01-payment',
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 백엔드에 결제관련 데이터 넘겨주기(=> 뮤테이션 실행하기)
          // 포인트 충전
          // createPointTransactionOfLoading(
          //   impUid: ID!
          //   ): PointTransaction!

          // 구매시
          // createPointTransactionOfBuyingAndSelling(
          //   useritemId: ID!
          //   ): Useditem!
        } else {
          // 결제 실패 시 로직,
          alert('결제에 실패했습니다. 다시 시도해 주세요');
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type='text/javascript'
          src='https://code.jquery.com/jquery-1.12.4.min.js'
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type='text/javascript'
          src='https://cdn.iamport.kr/js/iamport.payment-1.2.0.js'
        ></script>
      </Head>
      <button onClick={requestPay}>결제하기</button>
    </div>
    // <button onClick={this.requestPay}>결제하기</button> 함수형에서는 this를 쓰지 않으므로 삭제
  );
}
