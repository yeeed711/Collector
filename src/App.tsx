import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import LoginPages from './pages/LoginPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPages />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/join' element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
