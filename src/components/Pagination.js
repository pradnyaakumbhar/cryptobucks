import React, { useContext } from 'react';
import paginationArrow from '../assets/pagination-arrow.svg';

import { CryptoContext } from '../context/CryptoContext';
import PerPage from './PerPage';

const Pagination = () => {
  let { currentPage, setCurrentPage, totalCrypto, perPage, crypto } =
    useContext(CryptoContext);
  // const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalCrypto / perPage);

  const next = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextThree = () => {
    if (currentPage + 3 >= totalPages) {
      setCurrentPage(totalPages - 1);
    } else {
      setCurrentPage(currentPage + 3);
    }
  };

  const prevThree = () => {
    if (currentPage - 3 <= 1) {
      setCurrentPage(totalPages + 1);
    } else {
      setCurrentPage(currentPage - 2);
    }
  };

  if (crypto && crypto.length >= perPage) {
    return (
      <div className="flex md:flex-row flex-col items-center md:mt-0 mt-4">
        <PerPage />
        <ul className="flex items-center justify-end text-sm sm:mt-0 mt-4">
          <li className="flex items-center">
            <button className="outline-0 hover:text-cyan w-8">
              <img
                src={paginationArrow}
                alt="left"
                className="w-full h-auto rotate-180"
                onClick={prev}
              />
            </button>
          </li>
          {currentPage === 1 || currentPage === 2 ? null : (
            <li>
              <button
                className="flex items-center justify-center text-lg outline-0  rounded-full w-8 h-8 hover:text-cyan"
                onClick={prevThree}
              >
                ...
              </button>
            </li>
          )}
          {currentPage === 1 ? null : (
            <li>
              <button
                className="flex items-center justify-center outline-0  rounded-full w-8 h-8  hover:text-cyan bg-gray-200 mx-1.5"
                onClick={prev}
              >
                {currentPage === 1 ? totalPages : currentPage - 1}
              </button>
            </li>
          )}

          <li>
            <button
              className="flex items-center justify-center outline-0  rounded-full w-8 h-8  bg-cyan text-gray-300 mx-1.5"
              disabled
            >
              {currentPage}
            </button>
          </li>
          {currentPage === totalPages ? null : (
            <li>
              <button
                className="flex items-center justify-center outline-0  rounded-full w-8 h-8 hover:text-cyan bg-gray-200 mx-1.5"
                onClick={next}
              >
                {currentPage === totalPages ? 1 : currentPage + 1}
              </button>
            </li>
          )}

          {currentPage === totalPages ||
          currentPage === totalPages - 1 ? null : (
            <li>
              <button
                className="flex items-center justify-center text-lg outline-0  rounded-full w-8 h-8 hover:text-cyan"
                onClick={nextThree}
              >
                ...
              </button>
            </li>
          )}
          {currentPage === totalPages ||
          currentPage === totalPages - 1 ? null : (
            <li>
              <button
                className="flex items-center justify-center outline-0  rounded-full w-8 h-8 hover:text-cyan bg-gray-200 mx-1.5"
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          )}

          <button className="outline-0 hover:text-cyan w-8">
            <img
              src={paginationArrow}
              alt="right"
              className="w-full h-auto"
              onClick={next}
            />
          </button>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
