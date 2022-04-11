import React from 'react';
import MainNav from './MainNav';
import Side from './Side';

const Scroll = detail => {
  return (
    <>
      <MainNav />
      <Side {...detail} />
    </>
  );
};

export default Scroll;
