import axios from 'axios';
export default function OpenGraphPreviewPage() {
  const onClickOpengraph = async () => {
    const result = await axios.get('https://www.gmarket.co.kr');
    console.log(result.data);
    console.log(result.data.split('<meta'));
    console.log(
      result.data.split('<meta').filter((el) => el.includes('og:title'))
    );
  };

  return (
    <div>
      <h1>사이트 미리보기 연습!!</h1>
      <button onClick={onClickOpengraph}>미리보기 실행!!</button>
    </div>
  );
}
