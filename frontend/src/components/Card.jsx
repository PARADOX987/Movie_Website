import React from 'react';

const Card = ({ data }) => {
  if (!data) {
    return <p className="text-center text-gray-600">Loading movies...</p>;
  }

  if (data.length === 0) {
    return <p className="text-center text-gray-600">No movies found for the search term.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data.map((movie, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title || "No Title"}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h2
              className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition cursor-pointer"
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${movie.id}`,
                  "_blank"
                )
              }
            >
              {movie.title || "No Title"}
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              <strong>Release Date:</strong> {movie.release_date || "N/A"}
            </p>

            <p className="text-sm text-gray-600 mt-2">
              <strong>Rating:</strong> {movie.vote_average || "N/A"} / 10
            </p>

            <p className="text-sm text-gray-600 mt-2">
              {movie.overview || "No description available."}
            </p>

            <button
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${movie.id}`,
                  "_blank"
                )
              }
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              More Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
