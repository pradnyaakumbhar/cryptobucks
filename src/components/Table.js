import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import SavedBtn from './SavedBtn';
const Table = () => {
  let { crypto, currency } = useContext(CryptoContext);

  return (
    <>
      <div className="flex flex-col mt-9 border border-gray-100 rounded">
        {crypto ? (
          <table className="w-full table-auto">
            <thead className="text-gray-100 border-b border-b-gray-100 capitalize text-base font-medium">
              <tr>
                <th className="py-1">Asset</th>
                <th className="py-1 sm:table-cell hidden">Name</th>
                <th className="py-1">Price</th>
                <th className="py-1 md:table-cell hidden">Total Volume</th>
                <th className="py-1 sm:table-cell hidden">Market Cap Change</th>
                <th className="py-1 lg:table-cell hidden">1H</th>
                <th className="py-1 lg:table-cell hidden">24H</th>
                <th className="py-1 lg:table-cell hidden">7D</th>
              </tr>
            </thead>
            <tbody>
              {crypto.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="text-center text-base hover:bg-gray-200 border-b border-b-gray-100 last:border-b-0"
                  >
                    <td className="py-4 flex items-center uppercase">
                      <SavedBtn data={data} />
                      <img
                        className="w-5 h-5 mx-2"
                        src={data.image}
                        alt={data.name}
                      />
                      <span>
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.symbol}
                        </Link>
                      </span>
                    </td>
                    <td className="py-4 cursor-pointer sm:table-cell hidden">
                      <Link to={`/${data.id}`} className="cursor-pointer">
                        {data.name}
                      </Link>
                    </td>
                    <td className="py-4">
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: currency,
                      }).format(data.current_price)}
                    </td>
                    <td className="py-4 md:table-cell hidden">
                      {data.total_volume}
                    </td>
                    <td
                      className={`py-4 sm:table-cell hidden ${
                        data.market_cap_change_percentage_24h > 0
                          ? 'text-green'
                          : 'text-red'
                      }`}
                    >
                      {data.market_cap_change_percentage_24h}
                    </td>
                    <td
                      className={`py-4 lg:table-cell hidden ${
                        data.price_change_percentage_1h_in_currency > 0
                          ? 'text-green'
                          : 'text-red'
                      }`}
                    >
                      {Number(
                        data.price_change_percentage_1h_in_currency
                      ).toFixed(2)}
                      %
                    </td>
                    <td
                      className={`py-4 lg:table-cell hidden ${
                        data.price_change_percentage_24h_in_currency > 0
                          ? 'text-green'
                          : 'text-red'
                      }`}
                    >
                      {Number(
                        data.price_change_percentage_24h_in_currency
                      ).toFixed(2)}
                      %
                    </td>
                    <td
                      className={`py-4 lg:table-cell hidden ${
                        data.price_change_percentage_7d_in_currency > 0
                          ? 'text-green'
                          : 'text-red'
                      }`}
                    >
                      {Number(
                        data.price_change_percentage_7d_in_currency
                      ).toFixed(2)}
                      %
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="w-full h-full flex justify-center items-center min-h-[60vh]">
            <div
              className="w-8 h-8 border-4 border-cyan border-b-gray-200 rounded-full animate-spin"
              role="status"
            />
            <span className="ml-2">please wait...</span>
          </div>
        )}
      </div>
      <div className="mt-4 h-8 capitalize flex md:flex-row flex-col items-center justify-between">
        <span>
          Data provided by{' '}
          <a
            href="http://www.coingecko.com"
            rel="noreferror"
            target="blank"
            className="text-cyan"
          >
            CoinGecko
          </a>
        </span>
        <Pagination />
      </div>
    </>
  );
};

export default Table;
