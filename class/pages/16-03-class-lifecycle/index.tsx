import { Component, createRef } from 'react';

// router 통째로 임포트
import Router from 'next/router';
// class는 컴포넌트가 아니다
// component로 만들기 위해 extends Component(리액트에서 제공)
// 아래는 클래스 기능을 가진 컴포넌트

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();

  // state는 count라는 스테이트 만들기, 컴포넌트로 확장해야 이렇게 사용가능
  state = {
    count: 99,
  };

  // 렌더링 이후 실행, 1번만 실행됨
  // ex) 포커스 깜빡깜빡거리게 할때 사용
  componentDidMount() {
    console.log('마운트됨!!');
    this.inputRef.current?.focus();
  }

  // 리렌더가 될때 마다 실행됨
  componentDidUpdate() {
    console.log('수정되고 다시 그려짐!!');
  }

  // 컴포넌트가 사라지고 난뒤 실행
  // ex) 채팅방 나가기 => api 요청!
  componentWillUnmount() {
    console.log('컴포넌트 사라짐!!');
  }

  // 화살표 함수로 해야.. this가 제대로 bind로 하는 법도 있다.
  onClickCounter = () => {
    console.log(this.state.count);
    // setState : 컴포넌트로 확장해야 이렇게 사용가능
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    console.log(this.state.count);
  };

  onClickMove() {
    Router.push('/');
  }

  // class는 함수와 달리 return이 없다. 대신 render가 있다.
  // render는 component로 확장해서 가능한 기능
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        {/* this : class를 가리킨다 */}
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </div>
    );
  }
}
