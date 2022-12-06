import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinDetailPages from './pages/CoinDetailPages';
import CoinSumaryPages from './pages/CoinSumaryPages';
import './App.css';
import Header from './Components/Header';
import { WatchListContextProvider } from './context/watchListContext';



function App() {
  return (
    <div className='container'>
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<CoinSumaryPages />} />
            <Route path='/coins/:id' element={<CoinDetailPages />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
