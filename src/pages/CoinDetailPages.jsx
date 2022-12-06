import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CoinData from '../Components/CoinData'
import HistoryChart from '../Components/HistoryChart'
import coinGenko from '../apis/coinGenko'

const CoinDetailPages = () => {

  const {id} = useParams()

  useEffect(() => {

    const fetchData = async () => {
    
      const results = await coinGenko.get(`/coins/${id}/market_chart/`, {

        params: {
          vs_currency: "brl",
          days: "1",
        }
      })
      console.log(results.data)
    }

    fetchData()
  }, [])

  const renderData = () => {
    return (
      <div className='coinlist'>
        <HistoryChart />
        <CoinData />
      </div>
    )
  }

  return renderData()

}

export default CoinDetailPages
