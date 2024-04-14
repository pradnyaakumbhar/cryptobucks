import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="lg:w-[40%] sm:w-[80%] w-[90%] lg:mt-16 sm:mt-24 mt-20 border border-solid border-cyan flex justify-around align-middle sm:rounded-lg rounded-md font-nunito">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `
          ${
            isActive
              ? 'bg-cyan text-gray-300'
              : 'bg-gray-200 text-grey-200 hover:text-cyan'
          }
           sm:m-2.5 m-1.5 p-0.25 rounded md:text-base text-sm text-center w-full cursor-pointer border-0 capitalize font-semibold font-nunito`;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `
          ${
            isActive
              ? 'bg-cyan text-gray-300'
              : 'bg-gray-200 text-grey-200 hover:text-cyan'
          }
           m-2 p-0.25 rounded text-base text-center w-full cursor-pointer border-0 capitalize font-semibold`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `
          ${
            isActive
              ? 'bg-cyan text-gray-300'
              : 'bg-gray-200 text-grey-200 hover:text-cyan'
          }
           m-2 p-0.25 rounded text-base text-center w-full cursor-pointer border-0 capitalize font-semibold`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
