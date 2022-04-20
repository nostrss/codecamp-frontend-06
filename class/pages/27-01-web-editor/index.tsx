// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// ReactQuill이 pre render가 되는 것을 막기 위해
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    // 바로 value가 들어온다
    console.log(value);
  };
  return (
    <div>
      작성자 : <input type='text' />
      <br />
      비밀번호 : <input type='text' />
      <br />
      제목 : <input type='text' />
      <br />
      {/* html onChange가 아니다 */}
      {/* 이방식도 작동 안됨
      {typeof window !== 'undefined' && (
      < ReactQuill onChange={onChangeContents} />
  )} */}
      내용 :<ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
