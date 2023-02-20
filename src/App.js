import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Sign } from './components/sign';
import { Login } from './components/login';
import { Posts } from './components/posts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Sign/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
