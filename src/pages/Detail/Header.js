import styled from 'styled-components';
import { HASH_LIST } from './FORM_LIST';

const Header = bookingResult => {
  const { title, sub_title } = bookingResult;

  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{sub_title}</SubTitle>
      <HashTagSection>
        {HASH_LIST.map(({ hash }, i) => {
          return <HashTag key={i}>{hash}</HashTag>;
        })}
      </HashTagSection>
    </>
  );
};

export default Header;

const Title = styled.h2`
  padding: 50px 30px 0 0;
  font-size: 42px;
`;

const SubTitle = styled.p`
  margin-top: 17px;
  padding-bottom: 22px;
  color: #656565;
  font-size: 22px;
  font-weight: 200;
`;

const HashTagSection = styled.section`
  margin-bottom: 50px;
`;

const HashTag = styled.span`
  display: inline-block;
  height: 30px;
  margin: 6px 6px 6px 0px;
  padding: 0px 15px;
  color: #656565;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  font-size: 14px;
  line-height: 30px;
`;
