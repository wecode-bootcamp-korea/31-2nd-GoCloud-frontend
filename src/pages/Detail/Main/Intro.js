import React from 'react';
import styled from 'styled-components';

const Intro = ({ id, detail, info }) => {
  return (
    <MainIntro id={id}>
      <br />
      <Title>{info}</Title>
      <p>
        {detail}
        <br />
        <br />
        ‘양재시민의 숲역 2번출구’에서 도보 2분거리에 위치한 35평형 단독 연습실
        입니다.
        <br />
        <br />
        전신거울, 최고급 강화마루 + 충격흡수 댄스플로어 시공되어있으며, 세스코
        관리로 쾌적한 연습공간을 제공하고,
        <br />
        <br /> 주차공간, 탈의실, 생수, 오디오, 제습기, 발레바, 삼각대 등
        연습에만 집중할 수 있도록 모든 준비가 되어 있습니다.
        <br />
        <br /> 많은 관심 부탁드립니다!!
        <br />
        <br /> 감사합니다.
        <br />
        <br /> “당신의 도약을 응원합니다!”
      </p>
    </MainIntro>
  );
};

export default Intro;

const MainIntro = styled.div`
  margin: 100px 0px;
  p {
    color: #656565;
    font-size: 16px;
    line-height: 28px;
  }
`;

const Title = styled.h4`
  position: relative;
  padding-bottom: 16px;
  margin: 70px 0px 30px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  position: relative;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    height: 4px;
    width: 20px;
    background-color: #ffd014;
  }
`;
