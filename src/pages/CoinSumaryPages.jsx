import React from 'react'
import AddCoin from '../Components/AddCoin'
import CoinList from '../Components/CoinList'

const CoinSumaryPages = () => {
  return (
    <div className='coinsumary shadow border p-2 rounded mt-2 bg-light'>
      <AddCoin />
      <CoinList />
    </div>
  )
}

export default CoinSumaryPages
