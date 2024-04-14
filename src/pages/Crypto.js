import React from 'react';
import Table from '../components/Table';
import Filters from '../components/Filters';
import { Outlet } from 'react-router-dom';

const Crypto = () => {
  return (
    <section className="flex flex-col w-[80%] h-full relative mt-10 mb-20">
      <Filters />
      <Table />
      <Outlet />
    </section>
  );
};

export default Crypto;
