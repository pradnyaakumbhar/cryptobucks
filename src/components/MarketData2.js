import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const MarketData2 = () => {
  let { cryptoDetails, currency } = useContext(CryptoContext);
  return (
    <div className="flex flex-col justify-between w-full mt-4">
      <span className="text-sm capitalize text-gray-100">Total Volume</span>

      <h2 className="text-base font-bold">
        {new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: 0,
        }).format(cryptoDetails.market_data.total_volume[currency])}
      </h2>
    </div>
  );
};

export default MarketData2;
