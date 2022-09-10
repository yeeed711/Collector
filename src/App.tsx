import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/HomePage/Homepage';
import JoinPage from './components/pages/JoinPage/JoinPage';
import LoginPage from './components/pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/join' element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
