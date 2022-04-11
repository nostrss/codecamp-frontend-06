// 부모컴포넌트
import FuncionalComponentChild from '../21-02-functional-component-child/index';
export default function FuncionalComponentParent() {
  // return <FuncionalComponentChild count={123} />;
  // 결국 자식 컴포넌트는 함수였다.
  return <>{FuncionalComponentChild({ count: 123 })}</>;
}
