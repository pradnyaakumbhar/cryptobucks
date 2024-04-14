import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const Heading = () => {
  let { cryptoDetails } = useContext(CryptoContext);
  return (
    <div className="flex w-full items-center">
      <img
        src={cryptoDetails.image.large}
        alt={cryptoDetails.id}
        className="w-12 h-12 mx-1.5"
      />
      <h1 className="text-xl capitalize font-medium">{cryptoDetails.name}</h1>
      <span className="text-sm py-0.5 px-2.5 ml-2 bg-cyan text-cyan bg-opacity-25 rounded uppercase">
        {cryptoDetails.symbol}
      </span>
    </div>
  );
};

export default Heading;
