import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Host from './pages/Host/Host';
import Registration from './pages/Host/Registration';
import Join from './pages/Join/Join';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import BookingList from './pages/BookingList/BookingList.js';
import KaKaoLogin from './pages/Login/KaKaoLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/host" element={<Host />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/join" element={<Join />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookinglist" element={<BookingList />} />
        <Route path="/kakaologin" element={<KaKaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
