import { Component } from 'react';

// class는 컴포넌트가 아니다
// component로 만들기 위해 extends Component(리액트에서 제공)
// 아래는 클래스 기능을 가진 컴포넌트

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // state는 count라는 스테이트 만들기, 컴포넌트로 확장해야 이렇게 사용가능
  state = {
    count: 99,
  };

  // 화살표 함수로 해야.. this가 제대로 bind로 하는 법도 있다.
  onClickCounter = () => {
    console.log(this.state.count);
    // setState : 컴포넌트로 확장해야 이렇게 사용가능
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  // class는 함수와 달리 return이 없다. 대신 render가 있다.
  // render는 component로 확장해서 가능한 기능
  render() {
    return (
      <div>
        {/* this : class를 가리킨다 */}
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!</button>
      </div>
    );
  }
}
