import React from 'react';
import styled from 'styled-components';
import { FaInternetExplorer } from 'react-icons/fa';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiBlogger } from 'react-icons/si';

const Footer = () => {
  return (
    <FooterBox>
      <FooterWidth>
        <FooterTopArea>
          <GoCloud>
            Go-Cloud
            <FooterLogo>
              <FaInternetExplorer />
            </FooterLogo>
          </GoCloud>
          <BlogBox>
            블로그 | 이용약관 | 개인정보처리방침 | 운영정책 | 고객문의
          </BlogBox>
        </FooterTopArea>
        <FooterBottomArea>
          <BottomList>
            <BottomListLi>Go-Cloud | 대표: 고현영</BottomListLi>
            <BottomListLi>통신판매업: 고현영 이원빈</BottomListLi>
            <BottomListLi>UI판매업: 이근휘 최희동 김경현 노영완</BottomListLi>
            <BottomListLi>대표 TEL. 010-1234-1234</BottomListLi>
            <BottomListLi>이용시간 24시간 연중무휴</BottomListLi>
          </BottomList>
          <br />
          <BottomList>
            <BottomListLi>
              Go-Cloud는 통신판매중개자이며 통신판매의 당사자가 아닙니다 따라서
            </BottomListLi>
            <BottomListLi>
              스페이스 클라우드는 공간 거래정보 및 거래애에 대해 책임지지
              않습니다.
            </BottomListLi>
          </BottomList>
          <BottomLogo>
            <Instagram />
            <FaceBook />
            <Twitter />
            <KaKao />
            <Blog />
          </BottomLogo>
        </FooterBottomArea>
      </FooterWidth>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  background-color: #ebebeb;
`;
const FooterWidth = styled.div`
  display: block;
  position: relative;
  padding: 20px;
  text-align: left;
  margin: 30px;
`;
const FooterTopArea = styled.div`
  text-align: left;
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  border-bottom: solid 1px gray;
  padding-top: 10px;
  padding-bottom: 20px;
`;
const GoCloud = styled.div`
  display: flex;
  font-size: 35px;
`;
const BlogBox = styled.div`
  font-size: 12px;
`;
const FooterLogo = styled.div`
  color: purple;
`;
const FooterBottomArea = styled.div`
  display: block;
  padding: 15px 0 0;
  margin: 0;
  border-bottom: 0;
  border-top: 1px solid #e0e0e0;
`;
const BottomList = styled.ul`
  padding-right: 80px;
  border-bottom: 0;
`;
const BottomListLi = styled.li`
  font-size: 13px;
  padding-left: 11px;
  margin: 5px 0 0 6px;
  font-size: 13px;
`;
const BottomLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
`;
const Instagram = styled(BsInstagram)`
  color: blue;
`;
const FaceBook = styled(BsFacebook)`
  color: purple;
`;
const Twitter = styled(AiFillTwitterSquare)`
  color: #50bcdf;
`;
const KaKao = styled(RiKakaoTalkFill)`
  color: #ffff00;
`;
const Blog = styled(SiBlogger)`
  color: #008000;
`;
