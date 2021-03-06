/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage(props: any) {
  useEffect(() => {
    const script = document.createElement('script'); // <script></script> 태그 만들기
    const libray = document.createElement('script'); // <script></script> 태그 만들기

    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a&autoload=false';
    libray.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a&libraries=services&autoload=false';
    document.head.appendChild(script); // head의 자식으로 추가해줘
    document.head.appendChild(libray); // head의 자식으로 추가해줘

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.4847961, 126.8966297),
          level: 2, // 지도의 레벨(확대, 축소 정도)
        };
        const geocoder = new window.kakao.maps.services.Geocoder();
        const map = new window.kakao.maps.Map(container, options);

        function searchDetailAddrFromCoords(coords: any, callback: any) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        let address1 = '';

        function getAddress(result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            address1 = result[0].road_address;
          }
        }
        console.log(props.mapfixed);

        // props가 있을때, 상품 상세일 경우, props값으로 마커를 보여주고 움직이지 못한다.
        if (props.mapfixed === true) {
          // 마커가 표시될 위치입니다
          console.log(props.address?.lat);
          const markerPosition = new window.kakao.maps.LatLng(
            props.address?.lat,
            props.address?.lng
          );

          console.log(markerPosition);

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
          // @ts-ignore
          function setCenter() {
            // 이동할 위도 경도 위치를 생성합니다
            const moveLatLon = new window.kakao.maps.LatLng(
              props.address?.lat,
              props.address?.lng
            );
            // 지도 중심을 이동 시킵니다
            map.setCenter(moveLatLon);
          }

          // 상품 등록, 수정인 경우
        } else {
          // 마커가 지도 위에 표시되도록 설정합니다
          const marker = new window.kakao.maps.Marker();

          window.kakao.maps.event.addListener(
            map,
            'click',
            function (mouseEvent: { latLng: any }) {
              const latlng = mouseEvent.latLng;
              console.log(latlng);
              marker.setPosition(latlng);
              marker.setMap(map);

              searchDetailAddrFromCoords(latlng, getAddress);
              // @ts-ignore
              props.setIsAddress({
                lat: latlng.Ma,
                lng: latlng.La,
                // @ts-ignore
                address: address1?.address_name,
                // @ts-ignore
                zipcode: address1?.zone_no,
              });
            }
          );
        }
      });
    };
  }, []);

  return (
    <div>
      <div id='map' style={{ width: 380, height: 252 }}></div>
    </div>
  );
}
