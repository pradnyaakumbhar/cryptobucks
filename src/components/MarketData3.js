import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const MarketData3 = () => {
  let { cryptoDetails, currency } = useContext(CryptoContext);
  return (
    <div className="flex justify-between w-full mt-4">
      <div className="flex flex-col">
        <span className="text-sm capitalize text-gray-100">Low 24H</span>

        <h2 className="text-base font-bold">
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 5,
          }).format(cryptoDetails.market_data.low_24h[currency])}
        </h2>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="text-sm capitalize text-gray-100">High 24H</span>
          <h2 className="text-base font-bold">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: currency,
              minimumFractionDigits: 5,
            }).format(cryptoDetails.market_data.high_24h[currency])}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MarketData3;
