import { useEffect } from 'react';

declare const window: typeof globalThis & {
  kakao: any;
};

export default function NewMap(props) {
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

        // 마커를 생성
        const marker = new window.kakao.maps.Marker();
        let address = '';

        // 좌표로 주소를 검색하는 함수
        function searchDetailAddrFromCoords(coords, callback) {
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 콜백함수
        function getAddress(result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            address = result[0].road_address;
          }
        }

        window.kakao.maps.event.addListener(
          map,
          'click',
          function (mouseEvent: { latLng: any }) {
            const latlng = mouseEvent.latLng;
            console.log(latlng);
            marker.setPosition(latlng);
            marker.setMap(map);

            searchDetailAddrFromCoords(latlng, getAddress);
            console.log(address.address_name);
            props.setIsAddress({
              lat: latlng.Ma,
              lng: latlng.La,
              address: address?.address_name,
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
