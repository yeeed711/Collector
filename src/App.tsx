import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/HomePage/Homepage';
import JoinPage from './components/pages/JoinPage/JoinPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import ProductPage from './components/pages/ProductPage/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
