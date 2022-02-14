import Header from './components/Header';
import Header2 from './components/Header2';
import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './main';
import AdminLogin from './admin';
import Timeline from './timeline';
import MatchesPage from './matches';
import PlayersPage from './players';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Header/>}/>
        <Route path={"/*"} element={<Header2/>}/>
      </Routes>
      <div className='content'>
        <Routes>
          <Route path={"/"} element={<MainPage/>}/>
          <Route path={"/timeline/*"} element={<Timeline/>} />
          <Route path={"/players/*"} element={<PlayersPage/>} />
          <Route path={"/matches/*"} element={<MatchesPage/>} />
          <Route path={"/admin"} element={<AdminLogin/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
