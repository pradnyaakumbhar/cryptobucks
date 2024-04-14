import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
const Price = () => {
  let { cryptoDetails, currency } = useContext(CryptoContext);
  return (
    <div className="flex flex-col w-full mt-6">
      <div className="flex justify-between w-full">
        <div>
          <span className="text-sm capitalize text-gray-100">Price</span>
        </div>
        <div
          className={`text-sm px-1 ml-2 font-medium flex items-center rounded bg-opacity-25 ${
            cryptoDetails.market_data.price_change_percentage_24h > 0
              ? 'bg-green text-green'
              : 'bg-red text-red'
          }`}
        >
          <span>
            {Number(
              cryptoDetails.market_data.price_change_percentage_24h
            ).toFixed(2)}
            %
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 ml-0.5 ${
              cryptoDetails.market_data.price_change_percentage_24h > 0
                ? 'fill-green text-green rotate-180'
                : 'fill-red text-red'
            }`}
          >
            <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
          </svg>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold">
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency,
            maximumSignificantDigits: 5,
          }).format(cryptoDetails.market_data.current_price[currency])}
        </h2>
      </div>
    </div>
  );
};

export default Price;
