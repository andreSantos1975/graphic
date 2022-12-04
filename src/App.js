import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinDetailPages from './pages/CoinDetailPages';
import CoinSumaryPages from './pages/CoinSumaryPages';
import './App.css';
import Header from './Components/Header';
import { WatchListContext, WatchListContextProvider } from './context/watchListContext';


function App() {
  return (
    <div className='container'>
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<CoinSumaryPages />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
