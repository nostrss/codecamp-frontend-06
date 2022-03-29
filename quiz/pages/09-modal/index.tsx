import { useState } from 'react'
import { Modal, Button } from 'antd'
import DaumPostcode from 'react-daum-postcode'
import styled from '@emotion/styled'

const Wraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const CustumModal = styled.div`
  width: 200px;
  height: 160px;
  border: 1px solid #bdbdbd;
  z-index: 100;
  position: absolute;
  top: 45%;
  left: 45%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalCustomPage = () => {
  // 과제 2-1
  const [isOpen, setIsOpen] = useState(false)
  const onToggleModal = () => {
    setIsOpen((prev) => !prev)
  }
  const handleComplete = (data: any) => {
    console.log(data)
    onToggleModal()
  }

  // 과제 2-2
  const [isOpen2, setIsOpen2] = useState(false)
  const showModal = () => {
    setIsOpen2(true)
  }

  const handleOk = () => {
    setIsOpen2(false)
  }

  const handleCancel = () => {
    setIsOpen2(false)
  }

  // 과제 2-3
  const [isOpen3, setIsOpen3] = useState(false)
  const [isAddress, setIsAddress] = useState('')
  const showModal3 = () => {
    setIsOpen3(true)
  }

  const handleOk3 = () => {
    setIsOpen3(false)
  }

  const handleCancel3 = () => {
    setIsOpen3(false)
  }

  const handleComplete3 = (data: any) => {
    setIsOpen3(false)
    setIsAddress(data.address)
  }

  //과제 20-4
  const [state, setState] = useState(0)

  function sumAll() {
    setState((prev) => prev + 1)
    setState((prev) => prev + 2)
    setState((prev) => prev + 3)
    setState((prev) => prev + 4)
  }

  // 과제 20-5

  const [isCustom, setIsCustom] = useState(true)
  const modalOpen = () => {
    setIsCustom(false)
  }
  const modalClose = () => {
    setIsCustom(true)
  }

  return (
    <Wraper>
      <h2>2-1</h2>
      <DaumPostcode onComplete={handleComplete} />
      <div></div>
      <h2>2-2</h2>
      <Button onClick={showModal}>모달 열기</Button>
      <Modal
        title="게시글 등록"
        visible={isOpen2}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        게시글이 등록되었습니다.
      </Modal>
      <h2>2-3</h2>
      <Button onClick={showModal3}>모달 열기</Button>
      {isOpen3 && (
        <Modal
          title="주소검색"
          visible={isOpen3}
          onOk={handleOk3}
          onCancel={handleCancel3}
        >
          <DaumPostcode onComplete={handleComplete3} />
        </Modal>
      )}
      {isAddress}
      <h2>2-4</h2>
      <>
        <div>결과는: {state}</div>
        <button onClick={sumAll}>실행!</button>
      </>
      <h2>2-5</h2>
      <button onClick={modalOpen}>과제 2-5</button>
      <CustumModal hidden={isCustom}>
        안녕하세요
        <button onClick={modalClose}>확인</button>
      </CustumModal>
    </Wraper>
  )
}

export default ModalCustomPage
