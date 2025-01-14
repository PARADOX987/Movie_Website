import React, { useState, useEffect } from 'react';
import Card from './Card';

const MoviesApp = () => {
  const [search, setSearch] = useState('Avengers'); 
  const [movieData, setMovieData] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );
      const jsonData = await response.json();
      const filteredData = jsonData.results.filter(
        (movie) => movie.poster_path || movie.backdrop_path
      );
      console.log("Filtered Data:", filteredData);
      setMovieData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]); 

  const handleSearchClick = () => {
    getData();
  };

  const handleCategoryClick = (category) => {
    setSearch(category); 
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <nav className="bg-green-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Moviefy</h1>
          <div className="searchbar flex space-x-2">
            <input
              type="text"
              placeholder="Search Movies"
              className="text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      <p className="font-bold text-2xl text-center mt-4">Discover Movies Here!</p>
      <div className="categoryBtn py-4 flex justify-center space-x-6 bg-white shadow-md">
      <button
          onClick={() => handleCategoryClick('Action')}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Action
        </button>
        <button
          onClick={() => handleCategoryClick('Comedy')}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Comedy
        </button>
        <button
          onClick={() => handleCategoryClick('Horror')}
          className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Horror
        </button>
        <button
          onClick={() => handleCategoryClick('Drama')}
          className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Drama
        </button>
        <button
          onClick={() => handleCategoryClick('Romance')}
          className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Romance
        </button>
      </div>
      <div className="mt-8 container mx-auto px-4">
        <Card data={movieData} />
      </div>
    </div>
  );
};

export default MoviesApp;
