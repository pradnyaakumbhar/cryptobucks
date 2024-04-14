import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Saved from './pages/Saved';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Crypto />}>
            <Route path=":coinId" element={<CryptoDetails />} />
          </Route>
          <Route path="/trending" element={<Trending />}>
            <Route path=":coinId" element={<CryptoDetails />} />
          </Route>
          <Route path="/saved" element={<Saved />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
