import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();
  const getCoinDetails = (id) => {
    navigate(id);
  };

  return (
    <div
      className="lg:w-[40%] sm:w-[60%] w-[80%] bg-gray-200 mb-12 rounded-lg p-4 relative cursor-pointer last:mb-0 hover:bg-gray-100 hover:bg-opacity-40"
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="flex items-center text-base my-0.5">
            <span className="capitalize text-gray-100">Name:&nbsp;</span>
            <span className="text-cyan">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-6 h-6 mx-1.5 rounded-full"
            />
          </h3>

          <h3 className="flex items-center text-base my-0.5">
            <span className="capitalize text-gray-100">
              Market Cap Rank:&nbsp;
            </span>
            <span className="text-cyan">{data.market_cap_rank}</span>
          </h3>

          <h3 className="flex items-center text-base my-0.5">
            <span className="capitalize text-gray-100">
              Price (In Btc):&nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'btc',
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="flex items-center text-base my-0.5">
            <span className="capitalize text-gray-100">Score:&nbsp;</span>
            <span className="text-cyan">{data.score}</span>
          </h3>

          <img
            src={data.large}
            alt={data.name}
            className="lg:w-[35%] w-20 h-auto absolute rounded-full lg:top-[50%] top-4 lg:-right-12 -right-6 -translate-y-[50%]"
          />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center ">
          <div
            className="w-8 h-8 border-4 border-cyan border-b-gray-200 rounded-full animate-spin"
            role="status"
          />
          <span className="ml-2">please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
