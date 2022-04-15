import React from 'react';
import styled from 'styled-components';
import { KAKAO } from './KaKaoAuth';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { RiAppleLine } from 'react-icons/ri';

const Login = () => {
  return (
    <LoginBox>
      <LoginHeader>로그인</LoginHeader>
      <LoginMain>
        <LoginMainBox>
          <LoginSocialButton>
            <LoginSocialNaver>
              <NaverLogo />
              <NaverLogin>네이버로 로그인</NaverLogin>
            </LoginSocialNaver>
            <LoginSocialKaKao>
              <KaKaoLogo />
              <KaKaoLogin href={KAKAO}>카카오로 로그인</KaKaoLogin>
            </LoginSocialKaKao>
            <LoginSocialApple>
              <AppleLogo />
              <AppleLogin>Apple로 로그인</AppleLogin>
            </LoginSocialApple>
          </LoginSocialButton>
          <EmailInput type="text" placeholder="이메일을 입력하세요." />
          <PassWordInput type="number" placeholder="비밀번호를 입력하세요" />
          <EmailLgoinButton>이메일로 로그인</EmailLgoinButton>
        </LoginMainBox>
      </LoginMain>
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  position: relative;
  width: 100%;
  background-color: #ebebeb;
`;

const LoginHeader = styled.div`
  width: 100%;
  padding-top: 20px;
  text-align: center;
  font-size: 50px;
  line-height: 1.2;
  font-weight: bolder;
  color: #000;
  letter-spacing: -0.5px;
`;

const LoginMain = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-top: 20px;
`;

const LoginMainBox = styled.div`
  width: 648px;
  padding: 32px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
`;

const LoginSocialButton = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
`;

const LoginSocialKaKao = styled.a`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  flex-direction: row;
  height: 56px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 56px;
  text-align: center;
  border: solid 1px black;
  border-radius: 5px;
`;
const LoginSocialNaver = styled(LoginSocialKaKao)``;

const LoginSocialApple = styled(LoginSocialKaKao)``;

const NaverLogo = styled(SiNaver)`
  font-size: 25px;
  color: green;
`;

const KaKaoLogo = styled(SiKakaotalk)`
  font-size: 25px;
  color: rgba(255, 208, 20, 0.85);
`;

const AppleLogo = styled(RiAppleLine)`
  font-size: 25px;
`;

const NaverLogin = styled.div`
  margin-left: 10px;
`;

const KaKaoLogin = styled.a`
  margin-left: 10px;
  text-decoration: none;
  color: #000000;
`;

const AppleLogin = styled.div`
  margin-left: 10px;
`;

const EmailInput = styled.input`
  width: 590px;
  height: 40px;
  margin-top: 40px;
`;

const PassWordInput = styled.input`
  width: 590px;
  height: 40px;
  margin-top: 25px;
`;

const EmailLgoinButton = styled.button`
  width: 590px;
  height: 40px;
  margin-top: 30px;
  font-size: 14px;
  background-color: #ffd014;
  border: 3px solid white;
`;
