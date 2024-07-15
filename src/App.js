import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Accepted from './pages/accepted';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accepted' element={<Accepted />} />
    </Routes>
  );
}

export default App;
