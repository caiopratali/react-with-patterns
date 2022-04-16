import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '.';

import '@/presentation/styles/global.scss';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
