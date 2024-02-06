var positions = [
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            온평리에펜션' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200128_127%2F1580194422303JWLmO_JPEG%2FRLVBPoRI1NQdDBgUS72wk_qn.jpeg.jpg); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">입실 16:00 / 퇴실 11:00</div>' +
      '                <div class="jibun ellipsis">제주 서귀포시 성산읍 온평포구로 59-5</div>' +
      '                <div class="ellipsis"><br></div>' +
      '                <div><a href="https://naver.me/GIq31l8y" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.403432, 126.901338)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            원앤온리' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231207_84%2F1701948770486hOyle_PNG%2F2.png); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">입실 16:00 / 퇴실 11:00</div>' +
      '                <div class="jibun ellipsis">제주 제주시 애월읍 부룡수길 61-1</div>' +
      '                <div class="ellipsis"><br></div>' +
      '                <div><a href="https://naver.me/5smlBvQi" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.475656, 126.358279)
  },
];

for (let i = 0; i < positions.length; i++) {
  var data = positions[i];
  displayMarker(data);
}

// 지도에 마커 + 커스텀오버레이를 표시하는 함수입니다    
function displayMarker(data) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: data.latlng,
    image: homeMarkerImage
  });

  var overlay = new kakao.maps.CustomOverlay({
    yAnchor: 2,
    position: marker.getPosition()
  });

  var content = document.createElement('div');
  content.innerHTML = data.title;

  overlay.setContent(content);

  // 마커 클릭 시 오버레이 열고 닫기
  var isOverlayOpen = false;

  kakao.maps.event.addListener(marker, 'click', function () {
    if (isOverlayOpen) {
      overlay.setMap(null);
      isOverlayOpen = false;
    } else {
      overlay.setMap(map);
      isOverlayOpen = true;
    }
  });

  // 'div.close' 요소를 클릭하면 커스텀 오버레이를 제거합니다
  var closeButton = content.querySelector('.close');
  closeButton.onclick = function () {
    overlay.setMap(null);
    isOverlayOpen = false;
  };

  // 지도 이동 종료 이벤트 핸들러
    map.addListener('dragend', function () {
      // 오버레이 맵에서 제거
      overlay.setMap(null);
      isOverlayOpen = false;
    });
  
    // 줌인/줌아웃 시 오버레이를 닫기
    map.addListener('zoom_changed', function () {
      // 오버레이 맵에서 제거
      overlay.setMap(null);
      isOverlayOpen = false;
    });
}
