import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { StorageContext } from '../context/StorageContext';
import { CryptoContext } from './../context/CryptoContext';
import { Link } from 'react-router-dom';
import SavedBtn from '../components/SavedBtn';

const Saved = () => {
  const { savedData, resetSavedResult } = useContext(StorageContext);
  let { currency } = useContext(CryptoContext);

  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8  border border-gray-100 rounded">
        {savedData ? (
          <table className="w-full table-auto">
            <thead className="capitalize text-base text-gray-100 font-medium border-b border-gray-100 ">
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
              {savedData &&
                savedData.map((data) => {
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
          <h1 className="min-h-[60vh] text-lg text-cyan flex items-center justify-center">
            There is no data to display!
          </h1>
        )}
      </div>
      <Outlet />
    </section>
  );
};

export default Saved;
