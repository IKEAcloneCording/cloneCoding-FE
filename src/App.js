import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/list/:category" element={<List />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;