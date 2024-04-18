import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const Links = () => {
  let { cryptoDetails } = useContext(CryptoContext);
  return (
    <div className="flex justify-between mt-4 w-full">
      <div className="flex flex-col">
        {cryptoDetails?.links?.homepage[0] && (
          <a
            target={'_blank'}
            rel="noreferrer"
            href={cryptoDetails?.links?.homepage[0]}
            className="text-sm text-gray-100 bg-gray-200 px-1.5 py-0.5 my-1 rounded"
          >
            {cryptoDetails?.links?.homepage[0].substring(0, 30)}
          </a>
        )}
        {cryptoDetails?.links?.blockchain_site[0] && (
          <a
            target={'_blank'}
            rel="noreferrer"
            href={cryptoDetails?.links?.blockchain_site[0]}
            className="text-sm text-gray-100 bg-gray-200 px-1.5 py-0.5 my-1 rounded"
          >
            {cryptoDetails?.links?.blockchain_site[0].substring(0, 30)}
          </a>
        )}
        {cryptoDetails?.links?.official_forum_url[0] && (
          <a
            target={'_blank'}
            rel="noreferrer"
            href={cryptoDetails?.links?.official_forum_url[0]}
            className="text-sm text-gray-100 bg-gray-200 px-1.5 py-0.5 my-1 rounded"
          >
            {cryptoDetails?.links?.official_forum_url[0].substring(0, 30)}
          </a>
        )}
      </div>
      <div className="flex flex-col content-start">
        <span className="text-sm capitalize text-gray-100">centiment:</span>
        <div className="flex justify-between w-full">
          <div className="text-sm px-1 ml-2 font-medium flex items-center rounded bg-opacity-25 my-1 bg-green text-green">
            <span>
              {Number(cryptoDetails.sentiment_votes_up_percentage).toFixed(2)}%
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 ml-0.5 fill-green text-green rotate-180"
            >
              <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-sm px-1 ml-2 font-medium flex items-center rounded bg-opacity-25 my-1 bg-red text-red ">
            <span>
              {Number(cryptoDetails.sentiment_votes_down_percentage).toFixed(2)}
              %
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 ml-0.5 fill-red text-red"
            >
              <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
