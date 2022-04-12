import WriteComponenet from '../../../../src/components/units/example/write/index';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isEditState } from '../../../../src/components/commons/store';

export default function NewComponenet() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(false);
  }, []);

  return (
    <>
      <WriteComponenet />
    </>
  );
}
