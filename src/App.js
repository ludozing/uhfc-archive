import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path={"/"} element={<MainPage />}/>
          <Route path={"/"} />
          <Route path={"/"} />
          <Route path={"/"} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
