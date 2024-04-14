import React, { useContext, useState } from 'react';
// import SearchInput from './SearchInput';
import { CryptoContext } from '../context/CryptoContext';
import debounce from 'lodash.debounce';
import searchIcon from '../assets/search-icon.svg';

const SearchInput = ({ handleSearch }) => {
  const [search, setSearch] = useState('');
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);
  // console.log(searchData);
  let handleIn = (e) => {
    e.preventDefault();
    let input = e.target.value;
    // console.log(input);
    setSearch(input);
    handleSearch(input);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearch('');
    setSearchData();
  };

  return (
    <>
      <form
        className="xl:w-96 lg:w-60 w-full relative flex items-center lg:ml-7 font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 border outline-0 focus:border-cyan"
          placeholder="search here..."
          onChange={handleIn}
          value={search}
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} alt="search icon" className="w-full h-auto" />
        </button>
      </form>

      {search.length > 0 ? (
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md scrollbar-thin">
          {searchData ? (
            searchData.map((data) => {
              return (
                <li
                  key={data.id}
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  onClick={() => selectCoin(data.id)}
                >
                  <img
                    className="w-4 h-4 mx-2"
                    src={data.thumb}
                    alt={data.name}
                  />
                  <span>{data.name}</span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-8 h-8 border-4 border-cyan border-b-gray-200 rounded-full animate-spin"
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchData } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchData(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
