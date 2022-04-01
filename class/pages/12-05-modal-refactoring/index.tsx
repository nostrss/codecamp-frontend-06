import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>주소입력</Button>
      {isOpen && (
        <Modal visible={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustomPage;
