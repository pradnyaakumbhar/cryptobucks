import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const MarketData4 = () => {
  let { cryptoDetails, currency } = useContext(CryptoContext);
  return (
    <div className="flex justify-between w-full mt-4">
      <div className="flex flex-col">
        <span className="text-sm capitalize text-gray-100">Max Supply</span>

        <h2 className="text-base font-bold">
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
          }).format(cryptoDetails.market_data.max_supply)}
        </h2>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="text-sm capitalize text-gray-100">
            Circulating Supply
          </span>
          <h2 className="text-base font-bold">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: currency,
              minimumFractionDigits: 0,
            }).format(cryptoDetails.market_data.circulating_supply)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MarketData4;
