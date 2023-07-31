import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import BookingPage from '../../pages/BookingPage';
import ConfirmationPage from '../../pages/ConfirmationPage';

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bookings' element={<BookingPage />} />
        <Route path='/confirmation' element={<ConfirmationPage/>} />
      </Routes>
    </>
  );
};

export default Main;