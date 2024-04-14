import { createContext, useEffect } from 'react';
import { useState } from 'react';
//create context object
export const CryptoContext = createContext({});

//create the provider component
export const CryptoProvider = ({ children }) => {
  const [crypto, setCrypto] = useState();
  const [searchData, setSearchData] = useState();
  const [coinSearch, setCoinSearch] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [sort, setSort] = useState('market_cap_desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCrypto, setTotalCrypto] = useState(250);
  const [perPage, setPerPage] = useState(10);
  const [cryptoDetails, setCryptoDetails] = useState();

  const getCrypto = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/list`
      ).then((res) => res.json());
      // console.log(data);
      setTotalCrypto(data.length);
    } catch (err) {
      console.log(err);
    }

    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sort}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2&ids=${coinSearch}`
      ).then((res) => res.json());
      // console.log(data);
      setCrypto(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCryptoDetails = async (coinId) => {
    setCryptoDetails();
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      ).then((res) => res.json());
      // console.log(data);
      setCryptoDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSearchData = async (value) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${value}`
      )
        .then((res) => res.json())
        .then((json) => json);
      // console.log(data);
      setSearchData(data.coins);
    } catch (err) {
      console.log(err);
    }
  };

  const resetFunc = () => {
    setCurrentPage(1);
    setCoinSearch('');
  };

  useEffect(() => {
    getCrypto();
  }, [coinSearch, currency, sort, currentPage, perPage]);
  return (
    <CryptoContext.Provider
      value={{
        crypto,
        searchData,
        getSearchData,
        setSearchData,
        setCoinSearch,
        currency,
        setCurrency,
        sort,
        setSort,
        currentPage,
        setCurrentPage,
        totalCrypto,
        resetFunc,
        perPage,
        setPerPage,
        getCryptoDetails,
        cryptoDetails,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
