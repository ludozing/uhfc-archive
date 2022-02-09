import Header from './components/Header';
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
      <Header />
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
