import { Modal } from 'antd';

export default function MadalAlertPage() {
  const OnClickSuccessButton = () => {
    Modal.success({ content: '게시물 등록에 성공했습니다' });
  };

  const OnClickfailButton = () => {
    Modal.error({ content: '비밀번호가 틀렸습니다' });
  };

  return (
    <div>
      <button onClick={OnClickSuccessButton}>성공했을때</button>
      <button onClick={OnClickfailButton}>실패했을때</button>
    </div>
  );
}
