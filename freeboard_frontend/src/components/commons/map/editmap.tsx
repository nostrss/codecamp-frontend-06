/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import { useEffect } from 'react';

declare const window: typeof globalThis & {
  kakao: any;
};

export default function EditMap(props: any) {
  useEffect(() => {
    const script = document.createElement('script'); // <script></script> 태그 만들기
    const libray = document.createElement('script'); // <script></script> 태그 만들기

    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a&autoload=false';
    libray.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb74cba8d371837386c87f252c714a&libraries=services&autoload=false';
    document.head.appendChild(script); // head의 자식으로 추가해줘
    document.head.appendChild(libray); // head의 자식으로 추가해줘

    console.log(props);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.4847961, 126.8966297),
          level: 2, // 지도의 레벨(확대, 축소 정도)
        };
        const geocoder = new window.kakao.maps.services.Geocoder();

        const map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.address?.lat,
          props.address?.lng
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        let address = '';

        marker.setMap(map);
        map.setCenter(markerPosition);

        function searchDetailAddrFromCoords(coords: any, callback: any) {
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        window.kakao.maps.event.addListener(
          map,
          'click',
          function (mouseEvent: { latLng: any }) {
            const latlng = mouseEvent.latLng;
            console.log(latlng);
            marker.setPosition(latlng);
            marker.setMap(map);
            // @ts-ignore
            searchDetailAddrFromCoords(latlng, getAddress);
            // @ts-ignore
            console.log(address.address_name);
            props.setIsAddress({
              lat: latlng.Ma,
              lng: latlng.La,
              // @ts-ignore
              address: address?.address_name,
              // @ts-ignore
              zipcode: address?.zone_no,
            });
          }
        );
      });
    };
  }, []);

  return (
    <div>
      <div id='map' style={{ width: 380, height: 252 }}></div>
    </div>
  );
}
