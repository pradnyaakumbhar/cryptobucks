import { createContext, useEffect } from 'react';
import { useState } from 'react';
//create context object
export const TrendingContext = createContext({});

//create the provider component
export const TrendingProvider = ({ children }) => {
  const [trending, setTrending] = useState();

  const getTrending = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      ).then((res) => res.json());
      // console.log(data);
      setTrending(data.coins);
    } catch (err) {
      console.log(err);
    }
  };

  const resetTrending = () => {
    getTrending();
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <TrendingContext.Provider value={{ trending, resetTrending }}>
      {children}
    </TrendingContext.Provider>
  );
};
