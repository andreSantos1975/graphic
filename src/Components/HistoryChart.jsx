import React, { useEffect, useRef } from 'react'
//import Chartjs from 'chart.js'
import { createChart } from 'lightweight-charts';




const HistoryChart = () => {

  const chartRef = useRef()

  useEffect(() => {
   
    if (chartRef && chartRef.current) {
      const candlestickSeries = chartInstance.addCandlestickSeries();
      const chartInstance = createChart(chartRef.current, {

       
      
         
        

      });

      
      //const chart = LightweighCharts.createChart()



    }
  });
  return (
    <div className='bg-white border mt-2 rounded'>
      <div></div>
      <div>
        <canvas ref={chartRef} id='mychart' width={250} height={100}></canvas>
      </div>
    </div>
  )
}

export default HistoryChart


