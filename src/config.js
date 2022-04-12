export const BASE_URL = 'http://13.125.124.146:8000';

export const API = {
  kakaologin: `${BASE_URL}/users/signin/kakao`, // 카카오 로그인
  hostconvert: `${BASE_URL}/users/host`, // 호스트 등록
  list: `${BASE_URL}/spaces`, // 리스트
  reviews: `${BASE_URL}/spaces/reviews`, // 리뷰
  detail: `${BASE_URL}/spaces/detail`, // 디테일
  booking_list: `${BASE_URL}/spaces/bookinglist`, // 예약페이지ㄴ
  host: `${BASE_URL}/spaces/register`, // 공간등록
};
