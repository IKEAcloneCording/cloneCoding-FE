import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
