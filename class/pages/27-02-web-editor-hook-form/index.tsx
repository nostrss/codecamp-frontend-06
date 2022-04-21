import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: 'onChange',
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    // 리액트 훅 폼 : register에 등록하지 않고 강제로 값을 넣어주는 기능
    // 전부 지웠을 때 <p><br></p> 태그가 남아있어서 삭제를 해야함
    setValue('contents', value === '<p><br></p>' ? '' : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능!!????
    trigger('contents');
  };
  return (
    <div>
      작성자 : <input type='text' {...register('writer')} />
      <br />
      비밀번호 : <input type='password' {...register('password')} />
      <br />
      제목 : <input type='text' {...register('title')} />
      <br />
      내용 :<ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}