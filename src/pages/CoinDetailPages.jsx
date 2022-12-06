import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinData from '../Components/CoinData'
import HistoryChart from '../Components/HistoryChart'
import coinGenko from '../apis/coinGenko'

const CoinDetailPages = () => {

  const { id } = useParams()
  const [coinData, setCoinData] = useState([])
  const [isLoading, setIsLoading] = useState([false])

  useEffect(() => {
    
    const fetchData = async () => {

    setIsLoading(true)
    const [days, week, year, detail] = await Promise.all([
        coinGenko.get(`/coins/${id}/market_chart/`, {

          params: {
            vs_currency: "brl",
            days: "1",
          }
        }),
        coinGenko.get(`/coins/${id}/market_chart/`, {

          params: {
            vs_currency: "brl",
            days: "7",
          }
        }),

        coinGenko.get(`/coins/${id}/market_chart/`, {

          params: {
            vs_currency: "brl",
            days: "365",
          }
        }),

        coinGenko.get("/coins/markets", {
          params: {
              vs_currency: "brl",
              ids: id
          }
        })

      ]);

   
      setCoinData({
        days: days.data.prices,
         week: week.data.prices,
         year: year.data.prices,
         detail: detail.data
      })
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const renderData = () => {
    if(isLoading) {
      return <div>Loading...</div>
    }
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
