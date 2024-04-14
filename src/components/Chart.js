import React, { useContext, useEffect, useState } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import ChartComponent from './ChartComponent';

const Chart = () => {
  let { cryptoDetails, currency } = useContext(CryptoContext);
  const [chartData, setChartData] = useState();
  const [type, setType] = useState('prices');
  const [days, setDays] = useState(7);
  useEffect(() => {
    const getChartData = async (id) => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        ).then((res) => res.json());
        // console.log(data);
        let chartDataArray = data[type].map((item) => {
          return {
            date: new Date(item[0]).toLocaleDateString(),
            [type]: item[1],
          };
        });
        setChartData(chartDataArray);
      } catch (err) {
        console.log(err);
      }
    };
    getChartData(cryptoDetails.id);
  }, [cryptoDetails.id, type, days]);
  return (
    <div className="w-full h-[80%]">
      <ChartComponent data={chartData} currency={currency} type={type} />
      <div className="flex">
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === 'prices'
              ? 'bg-cyan text-cyan'
              : 'bg-gray-200 text-gray-100'
          }`}
          onClick={() => setType('prices')}
        >
          Price
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === 'market_caps'
              ? 'bg-cyan text-cyan'
              : 'bg-gray-200 text-gray-100'
          }`}
          onClick={() => setType('market_caps')}
        >
          Market Caps
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === 'total_volumes'
              ? 'bg-cyan text-cyan'
              : 'bg-gray-200 text-gray-100'
          }`}
          onClick={() => setType('total_volumes')}
        >
          Total Volumes
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 7 ? 'bg-cyan text-cyan' : 'bg-gray-200 text-gray-100'
          }`}
          onClick={() => setDays(7)}
        >
          7d
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 14 ? 'bg-cyan text-cyan' : 'bg-gray-200 text-gray-100'
          }`}
          onClick={() => setDays(14)}
        >
          14d
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 30 ? 'bg-cyan text-cyan' : 'bg-gray-200 text-gray-100'
          }`}
          onClick={() => setDays(30)}
        >
          30d
        </button>
      </div>
    </div>
  );
};

export default Chart;
