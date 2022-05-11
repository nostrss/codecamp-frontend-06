import { useForm } from 'react-hook-form';

interface IFormvalues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm();
  // register에 이름등의 정보가 다 저장되어 있어서 스프레드로 뿌려주면 된다.
  // handleSubmit input값들을 onclickSubmit에 전달해준다

  const onClickSubmit = (data: IFormvalues) => {
    console.log(data);
  };

  console.log('rerender check');

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type='text' {...register('writer')} />
      제목: <input type='text' {...register('title')} />
      내용: <input type='text' {...register('contents')} />
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
