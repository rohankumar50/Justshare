import './App.css';
import Profile from './components/Profile';
import Home from './components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
