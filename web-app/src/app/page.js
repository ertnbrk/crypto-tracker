"use client";

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchCryptoPrices from './utils/api';

export default function Home() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 60000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
  
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState('name_asc');
  const itemsPerPage = 30;

  if (isLoading) return <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
  </div>;

  if (error || data?.error) return <div className="flex justify-center items-center h-screen text-red-500 font-semibold">
    {data?.error || 'Error fetching data. Please try again later.'}
  </div>;

  let filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  switch (sortOption) {
    case 'name_asc':
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name_desc':
      filteredData.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'price_low_high':
      filteredData.sort((a, b) => a.current_price - b.current_price);
      break;
    case 'price_high_low':
      filteredData.sort((a, b) => b.current_price - a.current_price);
      break;
    default:
      break;
  }

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <header className="text-5xl font-extrabold text-white bg-blue-600 w-full text-center py-6 shadow-lg border-b-4 border-blue-800">
        Crypto Price Tracker
      </header>
      
      <div className="flex flex-col items-center space-y-4 mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/3 md:w-1/3 p-3 border-2 border-gray-500 rounded-lg text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />

        <select
          className="w-2/3 md:w-1/3 p-3 border border-gray-500 rounded-md text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name_asc">Sort by Name (A-Z)</option>
          <option value="name_desc">Sort by Name (Z-A)</option>
          <option value="price_low_high">Sort by Price (Low to High)</option>
          <option value="price_high_low">Sort by Price (High to Low)</option>
        </select>
        
        <button
          className="bg-blue-600 text-white px-6 py-3 border-2 border-blue-500 rounded-lg hover:bg-blue-500 transition transform hover:scale-105 shadow-md font-semibold"
          onClick={() => refetch()}
        >
          🔄 Refresh Prices
        </button>
      </div>
      
      <div className="w-full max-w-3xl space-y-4 mt-6">
        {paginatedData.map((coin) => (
          <div key={coin.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md border border-gray-600">
            <span className="capitalize text-lg font-medium">{coin.name} ({coin.symbol.toUpperCase()})</span>
            <span className="font-bold text-green-400 text-xl">${coin.current_price.toFixed(6)}</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center w-full max-w-3xl mt-6 space-x-4">
        {page > 1 && (
          <button className="bg-gray-700 text-white px-6 py-3 border-2 border-gray-500 rounded-lg hover:bg-gray-600 transition transform hover:scale-105 shadow-md font-semibold" 
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>◀ Previous</button>
        )}
        <span className="text-lg font-semibold">Page {page}</span>
        {startIndex + itemsPerPage < filteredData.length && (
          <button className="bg-gray-700 text-white px-6 py-3 border-2 border-gray-500 rounded-lg hover:bg-gray-600 transition transform hover:scale-105 shadow-md font-semibold" 
            onClick={() => setPage((prev) => prev + 1)}>Next ▶</button>
        )}
      </div>
    </div>
  );
}
