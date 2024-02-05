// 커스텀 오버레이에 표시할 컨텐츠 입니다
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다 
var positions = [
  // 한경면
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            울트라마린 ★4.4(311)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2Fsearchregister_1387599549); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 19:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 6.5, 호지현미라떼 7.5</div>' +
      '                <div><a href="https://place.map.kakao.com/1915903142" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.369490, 126.206064)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            클랭블루 ★4.5(367)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2FF8961B5EE45A4A8B9BF1135D09BB4F70); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 19:00</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페 #갤러리카페</div>' +
      '                <div class="ellipsis">아메리카노 6,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/1313144249" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.3449180436373, 126.17733452719526)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            하소로커피 ★4.5(59)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F1892d608a1a71ff1ff58ea3e4aec528f23e8408f%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 18:00</div>' +
      '                <div class="jibun ellipsis">#로스팅전문 #핸드드립전문</div>' +
      '                <div class="ellipsis">아메리카노 4,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/2036344906" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.29560998809252, 126.21784318723671)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            귤당리 ★4.2(47)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F4C83B267AD5B4247A0CDC329E1E8E54E); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 18:30</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페 #브런치카페</div>' +
      '                <div class="ellipsis">아메리카노 5,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/165124400" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.363089, 126.196273)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            산노루 ★4.2(119)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F95F952C3402A4658888FC9A9C1A27EFA); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 19:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">#녹차카페</div>' +
      '                <div class="ellipsis">아메리카노 5.5, 말차라떼 6.5</div>' +
      '                <div><a href="https://place.map.kakao.com/1990235814" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.33005656760521, 126.21336559124859)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주돌창고 ★4.5(43)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FC5F9470280A5474B980BD0B5F9E61980); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 18:00 / 일 휴무</div>' +
      '                <div class="jibun ellipsis">#방앗간카페</div>' +
      '                <div class="ellipsis">아메리카노 5.0, 보리개역 5.5</div>' +
      '                <div><a href="https://place.map.kakao.com/688685012" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.33713175477625, 126.23354107261963)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            안녕구움 ★4.7(49)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F369DBDD9943342AC90CFADEA8F3C612D); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 17:00 / 일 휴무</div>' +
      '                <div class="jibun ellipsis">#타르트</div>' +
      '                <div class="ellipsis">타르트 3.8</div>' +
      '                <div><a href="https://place.map.kakao.com/582294685" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.30543088039682, 126.17909061194014)
  },

  // 한림읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            슬랩 ★4.8(210)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F7562d75f04f212ff42332e46ccf22a248e2548de%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">핸드드립 7.0</div>' +
      '                <div><a href="https://place.map.kakao.com/555396252" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.394790446250724, 126.24155333964394)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            웨이뷰 ★4.7(106)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FEEABBD5756B4402582698810ADB841D2); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 19:00</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 5.5</div>' +
      '                <div><a href="https://place.map.kakao.com/334047840" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.4072997320937, 126.25265672622373)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            카페유주 ★4.2(105)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F937ec9b6e91ad0c25b7eb92201afbd4084fd8fd6%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 18:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">#애견동반카페</div>' +
      '                <div class="ellipsis">아메리카노 5.0</div>' +
      '                <div><a href="https://place.map.kakao.com/986232032" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.40549252833066, 126.25724079113495)
  },
  
  // 애월읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제레미 ★4.6(130)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F6722e2b13dde7083b8dad12ed51c764847c17f6e%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 17:30 / 일,월 휴무</div>' +
      '                <div class="jibun ellipsis">#핸드드립전문점</div>' +
      '                <div class="ellipsis">재레미 블랜드 6,000</div>' +
      '                <div><a href="https://place.map.kakao.com/1170785054" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.46463019981487, 126.31854352244126)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            본카페 애월 ★4.4(105)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fd06a6016ff377371e38d581029fabf06e69437ce%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 아침부터 자정까지</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 5.0</div>' +
      '                <div><a href="https://place.map.kakao.com/823443118" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.46778975677705, 126.33211880596546)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            노을리카페 ★4.0(157)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FFA4F3B942D3047E28EE53F5683F4BCAE); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페 #식물카페</div>' +
      '                <div class="ellipsis">아메리카노 7.0</div>' +
      '                <div><a href="https://place.map.kakao.com/1525547515" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.47992749887798, 126.37269968818184)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            1158족욕카페 ★4.8(33)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0af39c769cff063183f73acadb0a7ee39c8b5082%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 19:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페 #족욕카페</div>' +
      '                <div class="ellipsis">족욕 + 아메리카노 1.0</div>' +
      '                <div><a href="https://place.map.kakao.com/1787101427" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.47992749887798, 126.37269968818184)
  },


  // 제주시
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            카페나모나모 ★4.4(200)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F592F692B0A7C4BC3862372BE39873E59); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">#대형카페 #베이커리카페</div>' +
      '                <div class="ellipsis">아메리카노 5,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/373077516" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.50897275925356, 126.4719495662872)
  },


  // 조천읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            오드랑베이커리 ★4.3(520)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F79F442282AE545208ED2357EEF99EFE7); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 07:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">#베이커리카페</div>' +
      '                <div class="ellipsis">아메리카노 4,000원</div>' +
      '                <div><a href="" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.54215856668363, 126.67158953697896)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            덕인당보리빵 ★4.0(91)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fddb736c3313a76ddc602156881494bf7027e3381%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">#베이커리</div>' +
      '                <div class="ellipsis">팥보리빵 1,200원, 쑥빵 1,000원, 보리빵 900원</div>' +
      '                <div><a href="https://place.map.kakao.com/15751877" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.53225152261274, 126.61861467073703)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            카페더콘테나 ★4.6(139)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F16D55B60E3B249A4AA8F9CF750464CA2); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:30 ~ 18:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">#감귤체험</div>' +
      '                <div class="ellipsis">아메리카노 6,000원 / 귤라떼 8,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/665658434" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.49810559956496, 126.67894724493644)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            다니쉬 ★4.4(169)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F05d1e5adb411a0e5dbec5c6fb3a4c67f414e4725%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:30 ~ 19:00 / 화,수 휴무</div>' +
      '                <div class="jibun ellipsis">#베이커리카페</div>' +
      '                <div class="ellipsis">드립커피 6,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1116114114" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng()
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            5L2F ★4.5(73)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0dfd5e95336bc3c978cc37ae719979e0aa8bb923%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 18:00 / 일,월 휴무</div>' +
      '                <div class="jibun ellipsis">#로스팅전문</div>' +
      '                <div class="ellipsis">블랙커피 5,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/615740956" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.49400985318948, 126.63337409065952)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            알마커피제작소 ★4.8(105)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F88EFDFFB3077493A87715162D247DC1A); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 18:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페 #로스팅, 핸드드립</div>' +
      '                <div class="ellipsis">아메리카노 6,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1491888881" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.550242053284315, 126.69477166627713)
  },


  //구좌읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            카페라라라 ★4.8(874)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalad_thumb%2Ft%2F568f7eb098915363f7158fe83dd257dade6df8fa); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#로스팅전문 #빈티지</div>' +
      '                <div class="ellipsis">아메리카노 5,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/734323672" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.524902166279105, 126.85799706278767)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            카페한라산 ★4.0(174)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2F264B4C49F2834435B943BCD48831B3BF); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페 #빈티지</div>' +
      '                <div class="ellipsis">아메리카노 5,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/898585862" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.52479284116675, 126.86299475731121)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            모래비 ★4.4(175)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F5483c72c37fa04724e82416cff02be28a0f8dbc1%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#로스팅전문</div>' +
      '                <div class="ellipsis">드립커피 13,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/18325298" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.55547259571349, 126.79630006200873)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            그초록 ★4.2(115)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F40BC30B2DEBE41BDB140D734BF3B66C0); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 22:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 6,000원, 아보카도커피 7,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/1782977249" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.55639488915458, 126.8063907804958)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            모뉴에트 ★4.4(94)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F75CE226274AC482383A8B3B07C913C1C); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 19:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">#까눌레</div>' +
      '                <div class="ellipsis">아메리카노 5,500, 까눌레 3,500</div>' +
      '                <div><a href="https://place.map.kakao.com/1307726606" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.49150227456712, 126.9022211378243)
  },


  //서귀포시 성산읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            아줄레주 ★4.1(210)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F841e47c6ba9936e0f8d27d6740e761ae889c3125%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 19:00/ 화 휴무</div>' +
      '                <div class="jibun ellipsis">#타르트</div>' +
      '                <div class="ellipsis">아메리카노 5,000원 에그타르트 3,100원</div>' +
      '                <div><a href="https://place.map.kakao.com/2003360746" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.3668472120023, 126.83929712381097)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            보룡제과 ★4.8(413)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F632c13dbb994b47318db0173e7ad3a5454a8d136%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#베이커리</div>' +
      '                <div class="ellipsis">아메리카노 5,000원 </div>' +
      '                <div><a href="https://place.map.kakao.com/10375136" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.44801374641419, 126.91521387157363)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            서귀피안베이커리 ★4.4(274)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F4B1F16630A3546DFAADEDA2799E82D88); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 7,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/231488419" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.43528065776659, 126.92198223793068)
  },
  
  
  // 남원읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            와랑와랑 ★4.4(75)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F23116D3D5704CCE51C); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 18:00</div>' +
      '                <div class="jibun ellipsis">#로스팅전문 #해드드립전문</div>' +
      '                <div class="ellipsis">아인슈페너 6,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/18815393" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.27229427341253, 126.67654265126951)
  },


  // 서귀포
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            비브레이브커피로스터즈 ★4.4(109)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0fa6bc74f8290519f746a2f4e945b9e46046ba0d%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#로스팅 #핸드드립</div>' +
      '                <div class="ellipsis">아메리카노 4,500</div>' +
      '                <div><a href="https://place.map.kakao.com/767876049" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25494126849924, 126.5181762182919)
  },
  
  
  //안덕면
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            휴일로 ★4.2(157)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FE51ECD1949174D09A78B94E929EAA0BE); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 2/29까지 휴무</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 7,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/979505096" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.23221432454188, 126.36651635182614)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            원앤온리 ★4.0(594)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fa3dacf70927cfeae30aa0d55a565ba8b9bc45d30%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간 : 09:00 ~ 19:00</div>' +
      '                <div class="jibun ellipsis">#산방산카페 #마운틴뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 7,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/217787831" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.239267, 126.319221)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            커피스케치 ★4.5(87)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fb77a6d21463f008e2b57185977470a1e645a3b1e%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간 : 10:00 ~ 18:30</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 6,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1688963481" target="_blank" class="link">상세보기</a></div>' +
      // '                <div><button class="modalBtn" onclick="showModal()">저장</button></div>' + 
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.233410, 126.313344)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            카페루시아 본점 ★4.2(71)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Ff9a3706e3d68a1aeb6fe2075ddfd5b69f21572f8%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 20:30</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">아메리카노 6000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1666998566" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.23521709855557, 126.36305878981105)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            니나수족욕카페 ★4.6(11)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F1713B7EDE8434126871B319F0EBA944F); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">#족욕카페</div>' +
      '                <div class="ellipsis">힐링코스 15,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/27445744" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.2365873536315, 126.36389912789366)
  },


  //대정읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            와토커피 ★4.4(111)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F11566fd3da6c8e227e431c289dfecea3e370a6b8%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 18:30 / 일 휴무</div>' +
      '                <div class="jibun ellipsis">#로스팅전문</div>' +
      '                <div class="ellipsis">아메리카노 3,500원 와토알프스 5,500 / 우드라떼 5,500</div>' +
      '                <div><a href="https://place.map.kakao.com/1028238972" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.225463375057295, 126.2565320527299)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            어린왕자감귤밭 ★4.9(905)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC4A84E36739945E5A8AF456CB114468D); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 20:00 </div>' +
      '                <div class="jibun ellipsis">#감귤체험</div>' +
      '                <div class="ellipsis">한라봉스무디 9,500</div>' +
      '                <div><a href="https://place.map.kakao.com/363468370" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.2533275338264, 126.28181975242802)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            사일리커피 ★4.7(132)' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalad_thumb%2Ft%2F3342da2a45084a271f80e2284e4b2d94a4144b83); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">#오션뷰카페</div>' +
      '                <div class="ellipsis">사일리커피 7,000</div>' +
      '                <div><a href="https://place.map.kakao.com/1148912647" target="_blank" class="link">상세보기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.19995341106235, 126.27585868974039)
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
    image: markerImage
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


