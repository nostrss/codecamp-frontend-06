import { ChangeEvent, useState } from 'react';
import { Modal, Button } from 'antd';

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title='Basic Modal'
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀 번호 입력 : <input type='password' onChange={onChangePassword} />
      </Modal>

      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title='Basic Modal'
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀 번호 확인 : <input type='password' onChange={onChangePassword} />
      </Modal>
    </>
  );
};

export default ModalCustomPage;
