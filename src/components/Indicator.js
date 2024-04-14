import React, { useState, useContext, useEffect } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const Indicator = () => {
  let { cryptoDetails, currency } = useContext(CryptoContext);
  const [green, setGreen] = useState();
  useEffect(() => {
    let total =
      cryptoDetails.market_data.high_24h[currency] -
      cryptoDetails.market_data.low_24h[currency];
    let greenPart =
      ((cryptoDetails.market_data.high_24h[currency] -
        cryptoDetails.market_data.current_price[currency]) *
        100) /
      total;
    setGreen(Math.ceil(greenPart));
  }, [
    cryptoDetails.market_data.current_price[currency],
    cryptoDetails.market_data.high_24h[currency],
    cryptoDetails.market_data.low_24h[currency],
  ]);
  return (
    <div className="flex justify-between w-full my-4">
      <span
        className="bg-red h-1.5 rounded-l-lg w-[50%]"
        style={{ width: `${100 - green}%` }}
      >
        &nbsp;
      </span>
      <span
        className="bg-green h-1.5 rounded-r-lg w-[50%]"
        style={{ width: `${green}%` }}
      >
        &nbsp;
      </span>
    </div>
  );
};

export default Indicator;
