import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const MarketData1 = () => {
  let { cryptoDetails, currency } = useContext(CryptoContext);
  return (
    <div className="flex sm:flex-row flex-col justify-between w-full mt-4">
      <div className="flex flex-col">
        <span className="text-sm capitalize text-gray-100">Market Cap</span>

        <h2 className="text-base font-bold">
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
          }).format(cryptoDetails.market_data.market_cap[currency])}
        </h2>
      </div>
      <div className="flex flex-col sm:mt-0 mt-1">
        <div>
          <span className="text-sm capitalize text-gray-100">
            Fully Diluted Valuation
          </span>
          <h2 className="text-base font-bold">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: currency,
              notation: 'compact',
            }).format(
              cryptoDetails.market_data.fully_diluted_valuation[currency]
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MarketData1;
