// 1. 카카오개발자 사이트에 회원가입하고 앱을 만들어 주세요.(이미 앱이 있다면, 새로 만들어 주세요.)
// 2. 사이트를 등록(http://localhost:3000)하고, 발급 받은 javascript 키를 복사해 주세요.
// 3. /pages/quiz06/map1/index.tsx 페이지를 만들고, 카카오 지도를 그려주세요.
// 5. 카카오 지도에 마커를 표시해 주세요.
// ⇒ 마커의 위치는 자신이 좋아하는 장소를 표시하면 됩니다.
// 6. 클릭한 위치에따라 마커가 이동되도록 만들어 주세요.
// 7. 마커의 이미지를 자신이 좋아하는 이미지로 변경해 주세요.

import { useEffect } from 'react';

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement('script'); // <script></script> 태그 만들기
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a&autoload=false';
    document.head.appendChild(script); // head의 자식으로 추가해줘

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(36.3172026, 127.4285703), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const imageSrc = '/image/soori.png', // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          36.3172026,
          127.4285703
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          'click',
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <div>
      <div id='map' style={{ width: 800, height: 600 }}></div>
    </div>
  );
}
