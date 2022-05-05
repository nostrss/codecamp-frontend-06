import * as U from './today.style';
import TodayItemUI from './todayitem.presenter';

export default function TodayUI(props) {
  return (
    <>
      <U.WrappFIXDivFlexCol>
        최근 본 상품
        <U.DivFlexCol>
          {props.isToday.length >= 1 ? (
            <TodayItemUI el={props.isToday[props.isToday.length - 1]} />
          ) : (
            ''
          )}
          {props.isToday.length >= 2 ? (
            <TodayItemUI el={props.isToday[props.isToday.length - 2]} />
          ) : (
            ''
          )}
          {props.isToday.length >= 3 ? (
            <TodayItemUI el={props.isToday[props.isToday.length - 3]} />
          ) : (
            ''
          )}
        </U.DivFlexCol>
        <button onClick={props.onClickNewProduct}>글쓰기</button>
      </U.WrappFIXDivFlexCol>
    </>
  );
}
