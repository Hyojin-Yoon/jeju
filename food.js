// 커스텀 오버레이에 표시할 컨텐츠 입니다
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다 
var positions = [
  // 한경면
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            뚱보아저씨/한정식 ★4.0(240)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F92d769d96fd1fe3a00d3eace7cb85c8639cff892%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 20:00 / 목, 설 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:30 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">갈치구이정식 11,000원 갈치구이+고등어조림+성게미역국</div>' +
      '                <div><a href="https://place.map.kakao.com/839698275" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.330662698534155, 126.2553873366258)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            한경가든/해물,생선 ★4.2(68)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fe67e061b597fb7039c06159b3ba5c5fc4998f1f3%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 21:00 / 금 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 16:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">고등어구이정식 12,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/10949265" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.304576152591416, 126.17357972949296)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            풍차와전복/굴,전복 ★4.5(67)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fbd5f0bf2370125684ee30de884ec2e9331906ebe%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 17:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">전복뚝배기 16,000원, 전복돌솥밥 15,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/836908144" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.35639492683571, 126.1820584579808)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            신창해물라면와랑식탁/분식 ★4.6(49)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FFBBBCE1FFC5A4DC5BB0E9378AB62FFB5); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 17:00/ 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">해장하라게라면 13,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1497268361" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.34325864033767, 126.17590266232551)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주돔베막국수/국수 ★4.6(89)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F6fb36b0bac4cbaeffffa7bca31fa3c322f0f8e03%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 16:00 / 월 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">돔베막국수, 온국수 8,000</div>' +
      '                <div><a href="https://place.map.kakao.com/792715062" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.30419983285194,  126.17937594245834)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            만덕본가/해물,생선 ★4.6(66)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fc960295786446aef0730c625d4e58175ce607f08%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 19:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">갈치조림 4인 70,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/8964063" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.308933249075274,  126.16550685025672)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            한라당몰국수/국수 ★4.9(90)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F8bacefb186470e947cf35e0fb559cd0f3bdf89ff%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 07:30 ~ 15:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고기국수 8,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/249432149" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.330211165218024, 126.25488906568614)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            퐁당라면/한식 ★4.3(28)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNDAyMDhfMjg4%2FMDAxNzA3NDA0MTU2NTIz.UA1Oargfm9cDK_2itMaUeVjvjMANVy8nM8ISiwG2GC8g.5yoIbTSEwUTrkNwpRhtsNe1Zd6wjk5yLflNWcAtdw18g.JPEG.ase-1018%2Foutput_2954601644.jpg%3Ftype%3Dw773); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:30 ~ 17:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">문어가퐁당 15,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1177758484" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.36494264137942, 126.19979835025897)
  },

  // 한림읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            한림칼국수/칼국수 ★4.0(241)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F1c98bc9082b0406801954373f89fe4113e5e71fa%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 07:00 ~ 15:00 / 일 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">보말칼국수 10,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/249432149" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.415586487088035, 126.26150897080377)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            바당길/칼국수 ★4.2(195)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F25F1F88C1F504F48B3F8F6148B90D4F4); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 15:30</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">보말칼국수 10,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/500457527" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.40978256856354, 126.25849429666158)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            대문집/해물,생선 ★4.4(173)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F452CD4A5BC024443BCEB057563E9D74A); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:30 ~ 21:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">갈치조림 2인 40,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/17929669" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.40271924416166, 126.25183869099344)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제갈양/해물,생선 ★4.5(397)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F56D5896A06A7420BA02521215E51F0A6); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 14:30 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">순살갈치구이 + 조림 4인 140,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/25851685" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.38600924154565, 126.22445557025988)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            더꽃돈 협재점/고기 ★4.3(138)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fb4c86c92b6a0d668fbccdc01e66c705a0fc55324%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 22:00 / 월 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑오겹, 흑목살(200g) 20,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/26305070" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.39533055016654, 126.24252137451327)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            채훈이네해장국/해장국 ★4.5(79)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F763494982D51405CBC543D941FC9AD54); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 06:00 ~ 16:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">내장탕 11,000원, 해장국 10,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/749140776" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.40541103664773, 126.25868999543017)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            고향흑돼지/고기 ★4.8(159)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F28a8b42e0889cc09e1e28d1784db2bd61001d391%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">흑돼지 오겹, 목살 200g 22,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/22300921" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.40773607396801, 126.25362585541055)
  },


  //애월읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주광해/한식 ★4.7(486)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F4dffb692ba83e25c8daf2fe37bd94884c9b956905cb61d90c6664bee7a1e6aa2); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">광해모둠 소 105,000원 갈치조림+해물뚝배기+갈치구이</div>' +
      '                <div><a href="https://place.map.kakao.com/41973236" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.48781239594088, 126.39042088447658)
  },
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            이춘옥의원조고등어쌈밥/쌈밥 ★4.1(461)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F43b8db808e0f42af50ae2e28c6ce1301e66f5b23%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 20:30</div>' +
      '                <div class="jibun ellipsis">브레이크 16:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">고등어묵은지찜 2인 36,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/24780480" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.489012288498834, 126.41873027282219)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            고이정 본점/고기 ★4.3(351)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F645a5cc87aa975bf9cadb4e408212b3fc58541cf%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 24:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 근고기 500g 60,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/2030021121" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.45932085985317, 126.31138102000423)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            애월그때그집/고기 ★4.7(418)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F4E759AB8C0954A35A4F072A4FAADD365); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 세트 500g 59,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/932479755" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.46633638215206, 126.32429602478946)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            문개항아리 애월점/국수 ★4.4(282)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FD66CE5CEF4884057A0D2C8A758F890D3); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:30 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">통철판 해물라면 1인 26,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/879542502" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.48583202704781, 126.39243336512158)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            은혜전복/전복 ★4.1(236)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F564415250465441B971284D606EE69CD); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 20:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">전복해물라면 12,000원, 전복뚝배기 17,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/380750588" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.46298594221671, 126.31019031025507)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            정직한돈 본점/고기 ★4.3(184)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F065657f355640f90242fb295338641667c870fd1%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 23:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 근고기 600g 57,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1580336980" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.467370458006755, 126.33883459668037)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            꽃밥/한식 ★4.7(122)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC2684609D6A6453E82AF8ED5E836AA30); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 16:30 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">꽃밥정식 15,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/18311320" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.45153303211549, 126.30847679037306)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            임순이네밥집/국수 ★4.9(90)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F357cc18e233d6cb917faaa308c113d14a55f6d8c%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 17:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">몸국,고사리육개장,고기국수 8,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/27575902" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.44899152075513, 126.30421645696298)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            해성도뚜리가든/고기 ★4.9(90)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F4490BAFBBDA34D45B489F304245FA792); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:30 ~ 22:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 오겹 / 목살 200g 22,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/11093386" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.48192978421543, 126.3750818592647)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            작산/고기 ★4.8(133)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNDAxMjNfMTMz%2FMDAxNzA1OTgxMTYxMDA3.p7qjHyhcurSjX0C9InwXIO4AaJPtBneDq-5zHORGn4Yg.LcCGl67-Nx0AojJxN0r4PyaoEGz1nAEg8T0iM9jUMiwg.JPEG.nurse2003%2F13.jpg%3Ftype%3Dw966); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">작산 프리미엄 흑삼겹 + 목살 600g 65,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1268752602" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.483937369378076, 126.39492664165552)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            하귀가마솥순대국/순대 ★4.0(24)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F7806ee05d3bd482a5bd16dca348e3323915db8f8%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 21:00 / 토 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">막창국밥 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/424361916" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.480657486835014, 126.40368846419528)
  },

  
  // 제주시
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주본참숯불갈비/고기 ★4.1(104)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA230C2D44A4945EABEB87EEDCBEABB97); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 16:00 ~ 23:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">돼지 생갈비 200g 20,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/8505828" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.4841205890317, 126.48375566244441)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            도갈비/고기 ★4.6(123)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F82C15C647E23480B95C1315C95A7BD08); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 17:00 ~ 22:30</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 목살 / 삼겹살 180g 22,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/599236130" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.47649699729905, 126.47929572904525)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            대춘해장국 노형점/해장국 ★4.7(116)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FDC8D489ED52F4FCBB380D561F3825A0E); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 06:00 ~ 16:00 / 월 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">해장국 / 내장탕 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/2097782769" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.48762158006786, 126.48443159778967)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            국수만찬/국수 ★4.5(324)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F3075e4ff44de83ecbf720f622dec61c64efae9b5%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:30 ~ 20:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 14:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">고기국수 8,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/8827972" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.48715770453082, 126.49549282792832)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            장수물식당/국수 ★4.2(121)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F81fd8c7a3557f056d2abab6b0d7cd34132bf6231%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 19:30 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고기국수 9,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/11170411" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.49188346257674, 126.49861824532066)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            착한집/해물 ★4.5(462)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F5FB529500636434187BADC7BEFE7AF28); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 21:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">갈치조림 + 고등어구이 1인 22,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1762863151" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.500017917486005, 126.50700567482653)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            신제주보말칼국수 제주본점/칼국수 ★4.5(116)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fccadfa602dbfe3c81aee93ad9f7fbbe8af3d1a0a%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 15:00 / 일 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">보말 칼국수 / 보말국 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1527491418" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.48793543060649, 126.49996716660218)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주고집/고기 ★4.9(90)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F81c6a7c1198c7b36e43a58277f3a5d2d44a8f18a%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 24:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">근고기 600g 66,000원 / 런치 4인 800g 93,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1266175207" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.51101071372086, 126.48488488202013)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            고집돌우럭 제주공항점/해물 ★4.8(1229)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F41e1ebf90e679ba1c1c87a487d53f9ff5672ba8b%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:30</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">우럭조림+옥돔구이 24,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/232056222" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.51627242203265, 126.52812031204486)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주올래국수/국수 ★4.5(79)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fc1c462ac2436020228303dfcc5a38d5001260d61%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 19:30 / 토 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고기국수 9,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/559359242" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.500922349747675, 126.5060212414334)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            은희네해장국 본점/해장국 ★3.8(217)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fe1bbb7f6d47bfd94369d699957b99238eada10fd%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 06:00 ~ 15:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">해장국 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/21499653" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.50854590534413, 126.54074638695405)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            살아있는해물뚝배기 어마장장/전복 ★4.3(200)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F0BB6A755AD1340AB9399B0EAF556C94C); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">해물뚝배기 15,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1697090646" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.51113532857051, 126.52982451858611)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            신설오름/한식 ★4.1(222)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F798496a81ee78ac8fa5f98f95881c29d452b1b6b%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 04:00/ 월 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">몸국 / 몸국수 / 고기국수  9,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/7972099" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.50546095267477, 126.54155639331412)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            산지해장국/해장국 ★4.3(226)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2FE55AB20C0DD1403792FBEBE403D0657E); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 06:00 ~ 15:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">해장국 10,000원 / 내장탕 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/25430346" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.516382055305776, 126.52849913144607)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            돌다메/고기 ★4.9(90)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F55855f01fcb0f7b8abcc574dab6b94436f024540%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 15:00 ~ 22:30</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">오겹살 / 목살 200g 21,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/574242415" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.49147304792524, 126.42878554876641)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            해녀촌/해물 ★3.8(20)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F68cdd3bcdb4c99fd48765294f79785d481f37e15%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 19:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">회국수 12,000원 회추가 10,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/16525337" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.55369541971542, 126.70988352533313)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            함덕골목 오라점/해장국 ★4.5(50)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F977d292d27806070a17686ac8c2c4f01e1130655%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 07:00 ~ 14:30 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">해장국, 내장탕 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/726518959" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.49425989974769, 126.515808351809)
  },


  // 조천읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            고집돌우럭 함덕점/한식 ★4.8(1287)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F5AE1D58147ED41DAB47F6BE87E18FA38); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:30</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">런치 A 24,000원 우럭조림 + 옥돔구이</div>' +
      '                <div><a href="https://place.map.kakao.com/28082185" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.543896188052564, 126.66312547235522)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            문개항아리 조천본점/고기 ★4.6(782)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F8422cebf639103935aa231af9c39914a22ef1f8f%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">문어라면 15,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/26792593" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.5535100417507, 126.64402036481283)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            낭뜰에쉼팡/한식 ★4.0(197)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0ac33db043660145ff49e4e026d165d0366f6218%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">브레이크 16:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">낭뜰정식 1인 14,000원 쌈채 + 고등어 + 흑돼지제육 소 + 두부한모 소</div>' +
      '                <div><a href="https://place.map.kakao.com/8874256" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.47359121972974, 126.65712030442054)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            램앤블랙/고기 ★4.8(691)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalad_thumb%2Ft%2Fbc7db770be29529837b184ab9d7cd84a7dc3c044); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:30 ~ 22:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">A세트 프렌치렉 200g + 양갈비 250g 61,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/471417273" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.436936872348696, 126.673123687478)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            백리향/한식 ★4.0(123)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fb2eb4c2978fe080d8dd2e8db22f849db236386de%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:30 ~ 20:00 / 일 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고등어정식 9,000원 / 갈치구이정식 16,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/23470769" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.53701498621366, 126.63841961246467)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            두툼한고기돈돼지/고기 ★4.6(104)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F319F2EE259064BB49F2DF1EC54419D7F); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 23:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 목살, 오겹살 200g 20,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1975243507" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.54113287825182, 126.66984652303839)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            선흘곶/쌈밥 ★4.0(131)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F1E23EB0DF5F241899F189D03CB384B3F); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:30 ~ 18:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">쌈밥정식 17,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/19934545" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.508230976573806, 126.71802118847592)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            선흘방주할머니식당/한식 ★4.4(104)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Ff8b6bdf3a4b56d976346d61f0315ac7b2a7e784e%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 19:00</div>' +
      '                <div class="jibun ellipsis">브레이크 14:20 ~ 15:00</div>' +
      '                <div class="jibun ellipsis">두부전골 10,000원, 고사리비빔밥 10,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/21509975" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.48460326655321, 126.70019633760671)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            오가네 전복설렁탕 함덕점/설렁탕 ★4.4(230)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0b8b20a907e35cd7d709ba96a71e8fb215b35354%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 20:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">전복물회냉면, 전복죽, 전복설렁탕 16,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/2145368679" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.5424562526031, 126.66575278403528)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            함덕마당/한식 ★4.3(155)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F00E9428F272144F0B57E7EEF3A225DF1); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:30 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">한라산세트 159,000원 통갈치조림 + 구이 + 고등어구이 + 전복뚝배기</div>' +
      '                <div><a href="https://place.map.kakao.com/1946524083" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.54402721235933, 126.67418539999207)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            고사리식당/해물 ★4.3(97)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Ff2c140a75509f7fefe566fe82bb9673896555693%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 17:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고사리갈치조림 16,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/180600985" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.45283904286723, 126.70744751442615)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            함덕골목 본점/해장국 ★4.5(50)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F977d292d27806070a17686ac8c2c4f01e1130655%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 07:00 ~ 13:30 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">해장국, 내장탕 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1163513107" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.53936483629345, 126.6411579631129)
  },
  
  // 구좌읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            소금바치순이네/해물 ★4.2(333)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F733ed38695b0205ad46dac3166c10f271b67389b%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 19:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 16:30</div>' +
      '                <div class="jibun ellipsis">돌문어볶음 소 30,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/26915572" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.50373132040303, 126.9126627765238)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주오누이/한식 ★4.3(109)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F7f3b21b7462432ef2319cd1e2a46512021895a70%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 20:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">전복돌솥밥 15,000원, 회국수 12,000원, 물회 14,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/81111860" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.542884633438824,126.82785789208685)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            청파식당횟집/회 ★4.6(197)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F54a05a9917223f934ecf6549f401e030cf0ee784%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 21:00 / 일 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">고등어회 /활어회 소 55,000</div>' +
      '                <div><a href="https://place.map.kakao.com/17357777" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.524525172643294, 126.85362991230335)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            도민상회 월정점/고기 ★4.5(384)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fedfe818ae8ce385b3629ded2c310fc16b640b8ec%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 24:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">근고기 600g 72,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/865493189" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.55504403476045, 126.80026385579558)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            갈치공장/생선 ★4.8(188)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F3595fa067cd41887a03eaaed084e9f313b1ff237%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 16:20 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">갈치조림 1인 18,000원 구이 30,000원</div>' +
      '                <div><a href=https://place.map.kakao.com/1942763932" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.531969240587024, 126.85099594731939)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            연미정/전복 ★4.2(141)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F26bc0a749feb5339fb07b8285d89a30e513c56b6%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">전복가마솥밥 15,000원, 전복구이 25,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/18352760" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.52467867310613, 126.85382341819395)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            비자향/한식 ★4.7(143)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F57ae0cce789d07b24c0296b1f140eb8763e9f436%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:00 ~ 15:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 불고기 쌈정식 1인 14,500원</div>' +
      '                <div><a href="https://place.map.kakao.com/26575848" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.49598199867391, 126.81140821973337)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            월정국수/국수 ★4.6(87)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalad_thumb%2Ft%2F7b5fbf1722f27a3dfe4f899497029ec25563ceb0); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 18:00 / 월 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고기국수 9,000원 돔베고기 22,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/336053148" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.55231403980526, 126.7918010228061)
  },


  // 성산읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            복자씨연탄구이/고기 ★4.4(976)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FBCBBE0CE30184D5080B76BBBF432FA65); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 근고기 600g 63,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/18678487" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.46932190297041, 126.91989162113339)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            해왓/해물 ★4.2(153)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F1b96e4c9031a5246dafe8984860c2ce6fb15da8a%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:30 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고등어회 55,000</div>' +
      '                <div><a href="https://place.map.kakao.com/382375401" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.438532351795985, 126.91715613532612)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            부촌/해물 ★4.3(267)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fc23a6c6ff799d1fecd2844bb3409b03034c677c0%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:30 ~ 21:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:30 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">보말국 정식 12,000</div>' +
      '                <div><a href="https://place.map.kakao.com/10471937" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.44887815674848, 126.9168639734868)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            일출봉도식후경/한식 ★4.8(193)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fcb20407caaba0aff6a7a214b4be03038e1e20227%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 20:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">정식 2인 이상 15,000원 흑돼지제육 + 해물된장찌개</div>' +
      '                <div><a href="https://place.map.kakao.com/994541543" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.43843017356933, 126.9194441543978)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            그리운바다 성산포/한식 ★4.0(132)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fb0a52c5c9c90545167246ad5cd8e6164980a9246%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">그리운 코스 2인 80,000원 고등어회 + 은갈치회 + 회국수 + 고등어구이 + 전복성게미역국</div>' +
      '                <div><a href="https://place.map.kakao.com/18277817" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.469857738431614, 126.93003584717297)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            한라전복 성산본점/전복 ★4.4(110)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F55459344670245a419e34e7c69461d2f5d5732b8%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 20:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:30 ~ 17:30</div>' +
      '                <div class="jibun ellipsis">전복돌솥밥 / 전복뚝배기 15,000</div>' +
      '                <div><a href="https://place.map.kakao.com/10112205" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.47094966963275, 126.91701772286036)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주일도 성산점/고기 ★4.8(106)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNDAxMzFfOTQg%2FMDAxNzA2NjY2MDkyNTIx.uLclQYN8jtaj65L7Hry6zakdAdI0P0prHHyfyUGeXO8g.EJPeT0ByHqifGP-hHR7oN80d-R3wt3G1zsgQoxTUhoQg.JPEG.saessak_22%2FSE-ff37e23f-21ce-4f18-a5e4-e3c2f6d7b7c0.jpg%3Ftype%3Dw466); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis"흑오겹 + 흑목살 900g 96,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1454037117" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.436794924031474, 126.921279194869)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            성산일출봉해송/해물 ★4.7(213)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FE8585A4028F2456EB8BFEFA776D96716); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:00 / 목 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">스페샬조림세트(4인) 195,000원 통갈치조림+통갈치구이</div>' +
      '                <div><a href="https://place.map.kakao.com/2143392674" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.46170268836647, 126.93415960750492)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            청호식당/한식 ★4.8(129)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FACFDECF3AF1C4216A7B248A78D9D7B4F); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 20:00 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">문어라면 2인 40,000원 문어볶음 2인 30,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/27268966" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.410512604731494, 126.90784316326084)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주 오션스토리/회 ★4.1(13)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMzEyMjVfMTU4%2FMDAxNzAzNDgwMzYyODAz.ik2zfjYh40hA_Nv7F-pUQ1nGfNJ6mXl-a6mk9TgyqWQg.bPrpg9R5gqJXgZ4DJWDul9jvOQk7ci25C18xl8h-DNAg.JPEG.psj_0502%2Foutput_2081549306.jpg%3Ftype%3Dw966); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 16:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">참돔 + 고등어 / 광어 + 고등어 45,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/126137610" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.411501860676196, 126.89881957819385)
  },
  
  
  // 남원읍
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            동선제면가/국수 ★4.2(94)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F082aa511699ce6aa67c8134eaaf1f1a8796ac93c%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:30 ~ 16:00/ 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">고기국수 9,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1101068317" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.27197007473125, 126.64845422787258)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            또와국밥/국밥 ★4.6(13)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPzvor%2FbtrP0fHm8f3%2FNnKeUqKnwndAWXFKVnGWL1%2Fimg.jpg); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 07:30 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">돼지국밥, 순대국밥 8,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1064657786" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.28203321963648, 126.72079569283535)
  },


  // 서귀포
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            정이가네/한식 ★4.4(127)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F40b2e92cb8951cd7fcaaac94dd3cb89f1bbf2ea0%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:30 ~ 20:30 / 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">소한마리국밥 10,000</div>' +
      '                <div><a href="https://place.map.kakao.com/889033877" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25196091398683, 126.51112353457606)
  },


  // 중문
  {
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            연돈/돈까스 ★4.0(637)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F63342315ebe83e8c10ed1da331729ebfab5287ce%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 20:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">등심까스 11,000원</div>' +
      '                <div><a href="https://place.map.kakao.com/1890778114" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25885875294982, 126.40611472956228)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            고집돌우럭 중문점/고기 ★4.9(3849)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FEB9638B844C64A058FA4E5461BA042C6); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:30</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">런치세트 24,000원 우럭조림+옥돔구이</div>' +
      '                <div><a href="https://place.map.kakao.com/1580890176" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25798471848435, 126.41670473881315)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            색달식당 중문갈치조림구이 본점/해물 ★4.4(928)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F22EB20B329D44E89AEEA0E8AFFBAC924); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 16:00</div>' +
      '                <div class="jibun ellipsis">통갈치조림 (4인) 120,000</div>' +
      '                <div><a href="https://place.map.kakao.com/17809788" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.241825116622444, 126.38620032893799)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주오성식당/해물 ★4.1(241)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FBEC40BBAE6664693A8EEE2BA1E58C7EE); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:10 ~ 16:30</div>' +
      '                <div class="jibun ellipsis">코시롱 세트(4인) 95,000 제주 갈치조림+고등어구이(대)</div>' +
      '                <div><a href="https://place.map.kakao.com/10627937" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25570758167093, 126.41467017705789)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            갈치왕 중문점/해물 ★4.6(413)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FAC7BEAF05C304830AC4C548532A5C3DC); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:10 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">통갈치 구이 세트 (3~4인) 110,000</div>' +
      '                <div><a href="https://place.map.kakao.com/967549394" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.26464943573326,  126.39074690509698)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            돈이랑/고기 ★4.9(90)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F98CE5B1BA2284C39A03BB331DF1978F2); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 24:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">제주 화산암반 청정흑돼지200g 21,400</div>' +
      '                <div><a href="https://place.map.kakao.com/26586223" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25770534083669, 126.40909250920629)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            큰돈가 중문점/고기 ★4.4(205)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F1c027be1601dc1ceef9d0aa8e389b812c502c65c%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 22:00/ 수 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">흑돼지 (300g) 32,000</div>' +
      '                <div><a href="https://place.map.kakao.com/2060352745" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.255139419577134, 126.41511931495971)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            신우성흑돼지/고기 ★4.4(351)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fce4f42eff001f645dda65b31adfc41ea679e5c3e%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 10:30 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 오겹살 (180g) 18,000</div>' +
      '                <div><a href="https://place.map.kakao.com/2028723819" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.24969041441394, 126.41157158124815)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            중문수두리보말칼국수/칼국수 ★4.5(558)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Ff5a35e1bcbdf02b52dd8ef245bf1aa69bd3a6611%3Foriginal); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 08:00 ~ 17:00 / 화 휴무</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">수두리보말칼국수 11,000</div>' +
      '                <div><a href="https://place.map.kakao.com/1148098112" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25157223338481, 126.4249967094537)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            갈치요리전문점 만족한상회/한식 ★4.5(155)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FBB12E96F3238466C9859761D21B98A6A); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 09:00 ~ 21:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">통갈치한상(4인) 96,000</div>' +
      '                <div><a href="https://place.map.kakao.com/489037210" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25351419264885, 126.42672511431468)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            문치비/고기 ★4.9(90)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F8B0D8CA23E0C4489B0A8C3CA43D47BBD); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 24:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 근고기 (600g) 64,000</div>' +
      '                <div><a href="https://place.map.kakao.com/26397051" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25285813610937, 126.50601590135842)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            제주곰집/고기 ★4.3(137)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FAF3EC937B5B24B88A55C696CD348DB67); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 23:00</div>' +
      '                <div class="jibun ellipsis">브레이크 x</div>' +
      '                <div class="jibun ellipsis">흑돼지 한마리 모둠 95,000 목살 (300g)+오겹살 (300g)+가브리살 (200g)+항정살 (200g)</div>' +
      '                <div><a href="https://place.map.kakao.com/20631993" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.23578528298969, 126.49355362558312)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            다다익고/고기 ★4.0(57)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMzExMTJfNjgg%2FMDAxNjk5NzQ3NzIxMTMw.lZPtYkLk2hGDf9Z-TzxHh5zGtGKhy-HuqGtsiUdTb9gg.r-TsbSUu2EmFpehPc24m4aa0WqMVLWLcs884KrR21nMg.JPEG.000mgmg%2F1699746512311.jpg%3Ftype%3Dw966); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 12:00 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:30 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">흑돼지목살, 오겹살 (100g) 7840원</div>' +
      '                <div><a href="https://place.map.kakao.com/1227447555" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.260352934659174, 126.40606169117929)
  },{
    title: '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            다다익고 신서귀포점/고기 ★4.0(57)' +
      '            <div class="close" onclick="closeOverlay()"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMzExMTJfNjgg%2FMDAxNjk5NzQ3NzIxMTMw.lZPtYkLk2hGDf9Z-TzxHh5zGtGKhy-HuqGtsiUdTb9gg.r-TsbSUu2EmFpehPc24m4aa0WqMVLWLcs884KrR21nMg.JPEG.000mgmg%2F1699746512311.jpg%3Ftype%3Dw966); background-position: center; background-size: cover;">' +
      // '                <img src="">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">영업시간: 11:30 ~ 22:00</div>' +
      '                <div class="jibun ellipsis">브레이크 15:30 ~ 17:00</div>' +
      '                <div class="jibun ellipsis">흑돼지목살, 오겹살 (100g) 7840원</div>' +
      '                <div><a href="https://place.map.kakao.com/1480843059" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>',
    latlng: new kakao.maps.LatLng(33.25469079369935, 126.50774674560006)
  },


  // 안덕면
  {
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            순천미향/해물 ★4.5(44)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F977ebe9e6141cea66dc8e5216d45784ddffcedbf%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 10:00 ~ 21:00 / 목 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">은갈치조림 2인 50,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/11996067" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span>/div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.23567358402323, 126.31247154898033)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            제주선채향/국수 ★4.8(355)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2F8F212FD4CDD24C76B3B4F410E96FA962); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 11:00 ~ 16:00 / 월 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">전복칼국수 11,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/1612962916" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.2263792493088, 126.29897909174589)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            올레마당/해물 ★4.4(138)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Ff4add7b01a4d44eeb87b1d73c75d3c881d2a5c4c%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 08:30 ~ 20:30</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">모둠생선구이 1인 9,900원</div>' +
    '                <div><a href="https://place.map.kakao.com/27575771" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.23315786680808, 126.30877379897197)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            춘미향식당/한식 ★4.2(171)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F64dce825b1d019d00d009642a015507966819995%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 11:30 ~ 20:30 / 수 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 14:00 ~ 17:30</div>' +
    '                <div class="jibun ellipsis">정식 1인 23,000원 목살100g 성게미역국 옥돔튀김 딱새우장</div>' +
    '                <div><a href="https://place.map.kakao.com/20125337" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.231473066702065, 126.29652726208872)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            한라산아래첫마을 제주메밀식당/한식 ★4.4(143)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fa686a03addc7120cc026d21bd968c45f2c6f98ea%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 10:30 ~ 18:00 / 월 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 15:00 ~ 16:00</div>' +
    '                <div class="jibun ellipsis">제주메밀 비비작작면 14,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/1710030150" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.32822307940987, 126.37953772507007)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            산방산초가집/한식 ★4.4(81)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Ff13d3e98d1a18d431b1bc2fe98c62de5b88b28f0%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 10:00 ~ 21:00 / 목 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">초가집 밥상 1인 27,000원 전복해물전골, 전복구이, 전복회, 전복내장죽, 딱새우장, 고등어구이</div>' +
    '                <div><a href="https://place.map.kakao.com/12974776" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.24549010374978, 126.3386913882403)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            사계바다 제주산방산점/한식 ★4.4(181)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC4094475076E4DCBBBD6C46868BADB23); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 10:30 ~ 22:00</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">한라산세트 3~4인 19만원 해물통갈치조림+구이+갈치회+갈치회무침 / 갈치튀김/ 전복버터구이 / 옥돔구이 / 콘치즈 / 딱새우장 / 성게미역국</div>' +
    '                <div><a href="https://place.map.kakao.com/10447497" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.22787591270407, 126.30379201757313)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            사계소희네국수/국수 ★4.4(93)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F8e5bdff175c61bd9fb3ff08899f05dfe50517693%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 09:30 ~ 19:00 / 수 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">고기국수, 몸국 9,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/1519784712" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.235963584792636, 126.30948396844235)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            알동네집 화순점/고기 ★4.85(90)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F652260bbee87c488c07ae65ab2c833d5626f169b%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 11:00 ~ 21:30 / 월 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">흑돼지삼겹살 200g 20,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/256756454" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.253559247568276, 126.34075267510612)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            만복흑돼지/고기 ★4.2(70)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0efbe9d10866c7f347f8ce56aa93098e70d1e0a1%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 10:00 ~ 21:30</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">흑돼지 오겹살 / 목살 200g 20,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/18494916" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.243261792146676, 126.32668275515213)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            산방산해물라면오빠네/라면 ★4.4(116)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F16e33637b61e33035ebdd5104e57d46a28724837%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 09:00 ~ 17:30</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">해물라면 12,000원 / 전복치즈밥 15,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/2085143112" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.23525185803472, 126.31283962859483)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            제주해조네보말성게전문점/한식 ★4.5(582)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FEA7D1B99DDDF4AF4A612151F4A014D0A); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 08:00 ~ 15:00 / 수 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">제주보말칼국수 13,000원 / 제주보말손수제비 14,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/1206019377" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.23577510407414, 126.36683668257419)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            혜원/고기 ★4.4(83)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F0D8D23E45D1D4A14A004740AC65A7468); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 11:00 ~ 22:00 / 수 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">흑돼지오겹살 / 목살 180g 22,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/26947583" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.27835604356264, 126.308015261172)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            제주할망밥상 서귀포점/한식 ★4.2(93)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F7969A672A73A4147A8F66210DB8B314A); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 09:00 ~ 20:00</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">정식 1인 15,000원 모듬생선구이 + 제육볶음 + 전</div>' +
    '                <div><a href="https://place.map.kakao.com/1212473779" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.24001682974233, 126.33564521649006)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            화순한가네식당/한식 ★4.8(192)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fb7fe707ea8f6514531d15bf497374dbd89772fc3%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 10:00 ~ 20:00 / 목 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 16:00 ~ 17:00</div>' +
    '                <div class="jibun ellipsis">튀김돔베정식 10,000원 / 돔베 한 접시 21,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/623072470" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.23922836277874, 126.33657390017439)
},


//대정읍
{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            미영이네/회 ★4.3(414)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F0000b01ac69949b89b141bac3ee35e9e08e3ffea%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 11:30 ~ 22:00 / 수 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">고등어회 & 탕 (대) 85,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/9006988" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.217739051979635, 126.24981549550074)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            부두식당/회 ★4.3(335)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalad_thumb%2Ft%2Fe3c9deeb57c8e8e33d9f3331236094bc49efd5a3); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 10:00 ~ 21:30 / 목 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">갈치조림 + 방어회 소 60,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/9025009" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.218949818143216, 126.25099583125089)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            홍성방/중식 ★4.3(177)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F8286a9e7dd666379ed963aa5bfc73a5579a52f44%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 09:00 ~ 21:00</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">짜장면 7,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/16841033" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.22018455693227, 126.25166646773688)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            큰돈가 본점/고기 ★4.5(208)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2FC5DB3E0DBBAB4DD883DC8A82F9EADBC5); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 12:00 ~ 22:00 / 목 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
    '                <div class="jibun ellipsis">흑돼지 600g 64,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/780607372" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.20846817209866, 126.29094639070199)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            봉순이네흑돼지/고기 ★4.0(188)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2Fb6e15a666e233c99c027b3c2437668f3d45aa780%3Foriginal); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 11:30 ~ 22:00</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">흑돼지 660g 66,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/26922347" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.277761624176954, 126.27956149944087)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            항구식당/해물 ★4.4(104)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkIYQo%2FbtrEHVTJgxU%2FXKn28cmmd8geBtrzKgDIX0%2Fimg.jpg); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 09:00 ~ 21:00 / 월 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 x</div>' +
    '                <div class="jibun ellipsis">고등어구이 10,000원 갈치조림 30,000원</div>' +
    '                <div><a href="https://place.map.kakao.com/11892463" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.219178061307154, 126.25109310904949)
},{
  title: '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            강셰프의키친/한식 ★4.8(101)' +
    '            <div class="close" onclick="closeOverlay()"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img" style="background-image: url(https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F4243637ADC424133969C3F03612F944A); background-position: center; background-size: cover;">' +
    // '                <img src="">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">영업시간: 11:00 ~ 19:00 / 일 휴무</div>' +
    '                <div class="jibun ellipsis">브레이크 15:00 ~ 17:00</div>' +
    '                <div class="jibun ellipsis">돌문어돌솥비빔밥과몸된장국 / 전복돌솥비빔밥과몸된장국 15,000</div>' +
    '                <div><a href="https://place.map.kakao.com/150574706" target="_blank" class="link">상세보기</a><span class="saveBtn" onClick="savePlace()">저장</span></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>',
  latlng: new kakao.maps.LatLng(33.276321147146625, 126.24422971496885)
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
    image: foodMarkerImage
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

//저장 리스트
function savePlace() {
  // 1. 모든 제목 요소를 가져옵니다.
  const titles = document.querySelectorAll('.title');
  // 2. 각 제목 요소에 대해 다음을 수행합니다.
  for (const title of titles) {
    // 2.1. 제목 키를 생성합니다.
    const titleKey = Date.now();
    // 2.2. 제목 텍스트를 가져옵니다.
    const titleText = title.textContent;
    // 2.3. 저장할 데이터를 객체로 변환합니다.
    const data = {
      // key: titleKey,
      text: titleText
    };
    // 2.4. JSON 문자열로 변환합니다.
    const jsonData = JSON.stringify(data);
    // 2.5. setItem() 메서드를 사용하여 객체를 저장합니다.
    localStorage.setItem(titleKey, jsonData);
    // 2.6. blockquote 요소의 텍스트 콘텐츠를 설정합니다.
    const newQuote = document.createElement('blockquote');
    newQuote.textContent = titleText;
    document.getElementById('quote').appendChild(newQuote);
  }
  // 3. (선택 사항) 저장 성공 메시지를 표시합니다.
  // alert('저장되었습니다!');
}

// 저장리스트 삭제
function deleteDiv() {
  var deletebtn = document.getElementById('quote');
  deletebtn.innerHTML = ' ';
  localStorage.clear();
}
