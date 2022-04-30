# Go-Cloud Project

- 시연영상:
- 공간대여 플랫폼인 스페이스 클라우드 클론 코딩
- 사이트 UI만 참고하여 코드는 직접 작성
- API Documentation:
- 백엔드 깃헙 주소: https://github.com/wecode-bootcamp-korea/31-2nd-GoCloud-backend
- 프론트엔드 깃헙 주소: https://github.com/wecode-bootcamp-korea/31-2nd-GoCloud-frontend

## 개발 기간 및 인원

- 개발 기간: 2020-04-11 ~ 2020-04-21 (11일)
- 개발 인원: 프론트엔드 4명(김경현, 노영완, 이근휘, 최희동), 백엔드 2명(고현영, 이원빈)

## 사용 기술

- 프론트엔드: HTML, CSS, JavaScript, React, React Router, Styled-Component
- 백엔드: Python, Django, AWS(EC2, RDS, S3, IAM), Boto3, JWT, Bcrypt, MySQL
- 협업 툴: Git, Slack, Notion, Trello

## 구현 기능

- 회원가입, 로그인
  <br>- env파일을 통해 카카오 인가코드를 관리, jwt 토큰을 이용해 인증 및 인가 구현
- 호스트 등록 페이지
  <br>- 호스트가 스페이스를 등록할때 필요한 정보를 formData에 담아 POST method로 저장
- 메인 페이지
  <br>- 카테고리 별 아이콘 클릭 시 리스트 페이지로 이동하도록 구현
  <br>- swiper 라이브러리를 사용해 이미지 슬라이더 기능 구현
  <br>- 각 스페이스와 리뷰 컴포넌트 클릭 시 path parameter를 이용해 상세 페이지로 이동하도록 구현
  <br>- 더보기 버튼 클릭 시 query parameter의 limit을 업데이트해 데이터가 추가 되도록 구현
- 카테고리별 공간 리스트 페이지
  <br>- 카테고리 이름과 필터링 및 정렬 기준에 따라 쿼리스트링을 업데이트해 API 호출
  <br>- react-intersection-observer 라이브러리를 이용해 무한스크롤 기능 구현
- 공간 상세 페이지
  <br>- path parameter를 이용해 스페이스 컴포넌트 클릭 시 상세 페이지로 이동하도록 구현
  <br>- react-datepicker를 이용해 날짜 및 시간 선택과 예약 기능 구현
  <br>- react-scroll를 이용해 scroll spy 기능 구현
- 예약 기능
  <br>- path parameter를 이용해 예약한 상세페이지로 이동
- 검색
  <br>- url을 쿼리스트링 형식으로 바꿔서 리스트 페이지에 넘겨주고 리스트 페이지에서 쿼리 파라미터를 이용해 데이터를 가져옴

## 시연

<br/>
👇: 카카오로그인
<img src="https://user-images.githubusercontent.com/80018243/165203707-a637c7da-e2e5-4e24-9498-4b09726e4977.gif" width="400" height="300" />

<br/>
👇: 메인페이지
<img src="https://user-images.githubusercontent.com/80018243/165204155-53c38e7b-e65e-4a31-a4a8-1ad394b83ceb.gif" width="400" height="300" />

<br/>
👇: 검색기능
<img src="https://user-images.githubusercontent.com/80018243/165204407-e4fd990b-67c5-4a2f-99db-69c34177a4bf.gif" width="400" height="300" />

<br/>
👇: 리스트페이지 필터링
<img src="https://user-images.githubusercontent.com/80018243/165206201-65a2b5a8-6461-45be-a326-09e79088d516.gif" width="400" height="300" />

<br/>
👇: 상세페이지 예약
<img src="https://user-images.githubusercontent.com/80018243/165205667-1476b2f3-8dcb-4d3f-af88-944dce48f7cd.gif" width="400" height="300" />

<br/>
👇: 예약리스트 페이지
<img src="https://user-images.githubusercontent.com/80018243/165205894-a91cdc38-d2b9-457c-b165-c3adb0ca411e.gif" width="400" height="300" />
