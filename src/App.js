import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
