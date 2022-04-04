// 16-03을 함수형으로 바꾸기
import { useEffect, useRef, useState } from 'react';

// router 통째로 임포트
import { useRouter } from 'next/router';
// class는 컴포넌트가 아니다
// component로 만들기 위해 extends Component(리액트에서 제공)
// 아래는 클래스 기능을 가진 컴포넌트

// interface IState {
//   count: number;
// }

export default function CounterPage() {
  const router = useRouter();

  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(99);

  // state는 count라는 스테이트 만들기, 컴포넌트로 확장해야 이렇게 사용가능
  // state = {
  //   count: 99,
  // };

  // 1. DID MOUNT
  // // 렌더링 이후 실행, 1번만 실행됨
  // // ex) 포커스 깜빡깜빡거리게 할때 사용
  // componentDidMount() {
  //   console.log('마운트됨!!');
  //   this.inputRef.current?.focus();
  // }

  // useEffect(() => {
  //   console.log('마운트됨');
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // // 리렌더가 될때 마다 실행됨
  // componentDidUpdate() {
  //   console.log('수정되고 다시 그려짐!!');
  // }

  // 그런데 이건 처음에도 1번 실행됨
  useEffect(() => {
    console.log('수정되고 다시 그려짐!!');
  });

  // 대괄호안에 변수가 바뀔때마다 실행되도록 설정가능. 없으면 뭐가 바뀌든 계속 실행
  // useEffect(() => {
  //   console.log('수정되고 다시 그려짐!!');
  // },[count]);

  // 3. WillUnmount
  // // 컴포넌트가 사라지고 난뒤 실행
  // // ex) 채팅방 나가기 => api 요청!
  // componentWillUnmount() {
  //   console.log('컴포넌트 사라짐!!');
  // }

  // useEffect(() => {
  //   return () => {
  //     console.log('컴포넌트 사라짐!!');
  //   };
  // }, []);

  // 4. DIDMOUNT와 WillUnMOUNT를 합치기
  useEffect(() => {
    console.log('마운트됨');
    inputRef.current?.focus();
    return () => {
      console.log('컴포넌트 사라짐!!');
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예(1. 추가렌더링)
  // useEffect에서 setState를 사용하면 불필요한 랜더링이 발생할수 있어서 권장하지는 않음
  // useEffect(() => {
  //   setCount(10)
  // }, [])

  // 5. useEffect의 잘못된 사용 예(2. 무한루프)
  // useEffect(() => {
  //   setCount(prev => prev+1)
  // },[])

  // 대괄호 : 의존성 배열(dependency array) 대괄호가 있으면 1번만 실행되고 끝난다.

  // 화살표 함수로 해야.. this가 제대로 bind로 하는 법도 있다.
  const onClickCounter = () => {
    // console.log(this.state.count);
    // setState : 컴포넌트로 확장해야 이렇게 사용가능
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    // }));
    // console.log(this.state.count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push('/');
  };

  // class는 함수와 달리 return이 없다. 대신 render가 있다.
  // render는 component로 확장해서 가능한 기능
  console.log('나는 언제 실행되게?!!');

  return (
    <div>
      <input type='text' ref={inputRef} />
      {/* this : class를 가리킨다 */}
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기!!</button>
    </div>
  );
}
