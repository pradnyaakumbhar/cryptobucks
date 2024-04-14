import React, { useContext, useRef } from 'react';
import submitIcon from '../assets/submit-icon.svg';
import { CryptoContext } from '../context/CryptoContext';

const PerPage = () => {
  const { setPerPage, perPage } = useContext(CryptoContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };

  return (
    <form
      className="relative flex items-center font-nunito mr-6"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="perpage"
        className="relative flex justify-center items-center"
      >
        <span className=" mr-2 lowercase font-bold">perpage: </span>
      </label>
      <input
        type="number"
        name="perpage"
        placeholder={perPage}
        className="rounded bg-gray-200 placeholder:text-gray-100 placeholder:text-sm pl-2 required outline-0 border border-transparent focus:border-cyan leading-4 appearance-none w-8 h-6 text-center text-sm"
        ref={inputRef}
        min={1}
        max={100}
      />
      <button type="submit" className="ml-1 cursor-pointer">
        <img src={submitIcon} alt="submit icon" className="w-full h-auto" />
      </button>
    </form>
  );
};

export default PerPage;
