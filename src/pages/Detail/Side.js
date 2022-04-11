import React from 'react';
import Intro from './Main/Intro';

const Side = detail => {
  return (
    <>
      {INFO.map((item, i) => {
        return <Intro {...detail} key={i} id={item.id} info={item.info} />;
      })}
    </>
  );
};

export default Side;

export const INFO = [
  {
    id: 1,
    info: '공간소개',
  },
  {
    id: 2,
    info: '유의사항',
  },
  {
    id: 3,
    info: '이용후기',
  },
];
