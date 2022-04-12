import { useRecoilState } from 'recoil';
import { isEditState } from '../../../commons/store/index';

export default function WriteComponenet() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      <h1>{isEdit === true ? '수정하기' : '등록하기'} </h1>
    </>
  );
}
