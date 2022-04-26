// # 3-2. LazyLoad 와 PreLoad적용하기

// 1. 사이즈(가로: 500px, 세로: 500px)인 이미지 10개를 세로로 렌더링 하고, LazyLoad를 적용해 주세요.
// ⇒ 스크롤을 내릴 때 마다 이미지를 조금씩 다운로드 받아와야 합니다.(네트워크 탭을 켜고 확인해 주세요.)

// 2. 아래처럼 [ 이미지 보여주기 ] 버튼을 만들고, 이 버튼을 눌렀을 때 PreLoad 된 이미지를 보여주세요
// ⇒ 이미지가 나타날 때, 네트워크 탭에서 새롭게 이미지를 다운로드 받지 않아야 합니다.

import { useEffect, useRef, useState } from 'react';
import LazyLoad from 'react-lazy-load';

export default function ImagePreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      'https://images.unsplash.com/photo-1650796700128-c025b62cad47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80';
    img.onload = () => {
      setImgTag(img);
    };
    console.log('프리로드');
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <div>
      <div>
        1
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650750194827-380e4a463946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        2
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650532596364-37b8a537f3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        3
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650578509622-a103ac9a21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        4
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650750194827-380e4a463946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        5
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650353247557-92f875927f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        6
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650750194827-380e4a463946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        7
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650532596364-37b8a537f3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        8
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650578509622-a103ac9a21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        9
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650750194827-380e4a463946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        10
        <LazyLoad height={600} offsetVertical={300}>
          <img
            style={{ width: '500px', marginTop: '40px' }}
            src='https://images.unsplash.com/photo-1650353247557-92f875927f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          />
        </LazyLoad>
      </div>
      <div>
        <h2>이미지 프리로드</h2>
        <div ref={divRef}></div>
        <button onClick={onClickPreload}>프리로드 이미지 보여주기</button>
        ==============================================
      </div>
    </div>
  );
}
