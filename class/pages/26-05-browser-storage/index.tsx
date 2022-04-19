export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = 'aaa=철수';
    document.cookie = 'zzz=맹구';
  };
  const onClickSaveLocal = () => {
    localStorage.setItem('bbb', '영희');
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem('ccc', '후니');
  };

  const onClickLoadCookie = () => {
    const myCookie = document.cookie
      .split('; ')
      .filter((el) => el.includes('aaa'))[0]
      .replace('aaa=', '');
    console.log(myCookie);
  };

  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem('bbb');
    console.log(bbb);
  };

  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem('ccc');
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키 저장</button> <br />
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <br />
      <button onClick={onClickSaveSession}>세션 저장</button>
      <br />
      =========================
      <br />
      <button onClick={onClickLoadCookie}>쿠키 조회</button>
      <br />
      <button onClick={onClickLoadLocal}>로컬 조회</button>
      <br />
      <button onClick={onClickLoadSession}>세션 조회</button>
      <br />
    </div>
  );
}
