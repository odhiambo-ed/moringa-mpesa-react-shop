import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/" element={<><Header /><Home /></>} />
      </Routes>
    </div>
  );
}

export default App;
