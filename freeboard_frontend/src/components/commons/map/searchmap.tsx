/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

declare const window: typeof globalThis & {
  kakao: any;
};

export default function SearchMap(props: any) {
  const address = String(props.isAddress);

  useEffect(() => {
    console.log('searchmap useEffect');
    const script = document.createElement('script'); // <script></script> 태그 만들기
    const libray = document.createElement('script'); // <script></script> 태그 만들기

    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a&autoload=false&libraries=services';
    // libray.src =
    //   '//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a&libraries=services&autoload=false';
    document.head.appendChild(script); // head의 자식으로 추가해줘
    // document.head.appendChild(libray); // head의 자식으로 추가해줘

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.4847961, 126.8966297),
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();
        // const marker = new window.kakao.maps.Marker();

        geocoder.addressSearch(address, function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            console.log(coords);

            if (props.setIsGps) {
              props.setIsGps(coords);
              // props.setIsGps.La(coords.La);
              // props.setIsGps.Ma(coords.Ma);
            }
            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const info = new window.kakao.maps.InfoWindow({
              content: `<div style="width:210px;text-align:center;padding:5px 0;">거래위치</div>`,
            });
            info.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          } else {
            console.log('카카오맵 통신이 실패하였습니다.');
          }
        });
      });
    };
  }, [address]);

  return (
    <div>
      <div id='map' style={{ width: 384, height: 252 }}></div>
    </div>
  );
}
