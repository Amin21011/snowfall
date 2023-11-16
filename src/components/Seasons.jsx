// Seasons.js
"use client";
import React, { useState } from 'react';
import episodes from '../data/seasonsData'; // Import episodes from the separate file

const Seasons = () => {
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const seasons = [1, 2, 3, 4, 5, 6];
  const itemsPerPage = 5;

  const nextEpisode = () => {
    setCurrentEpisodeIndex((prevIndex) => (prevIndex + itemsPerPage) % episodes[currentSeason].length);
  };

  const previousEpisode = () => {
    setCurrentEpisodeIndex((prevIndex) => (prevIndex - itemsPerPage + episodes[currentSeason].length) % episodes[currentSeason].length);
  };

  const currentEpisodes = episodes[currentSeason].slice(currentEpisodeIndex, currentEpisodeIndex + itemsPerPage);

  return (
    <div className="bg-cover bg-center h-screen relative">
      <img
        src={`/backgrounds/season${currentSeason}background.jpg`}
        alt="Achtergrondafbeelding"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="font-bold text-6xl text-white mb-4">Season {currentSeason}</h1>
        <div className="flex justify-center">
          {currentEpisodes.map((episode, index) => (
            <div key={index} className="card bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r shadow-md hover:shadow-lg w-64 m-5 rounded-lg">
              <h2 className="text-xl font-bold text-center text-white">{episode.title}</h2>
              <img src={episode.image} alt="Avatar" className="w-full" />
              <div className="container p-2">
                <h4 className="text-lg font-bold text-center text-white">Episode</h4>
                <p className="font-bold text-center text-white">{episode.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={previousEpisode}
            className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r rounded-lg ${currentEpisodeIndex === 0 ? 'hidden' : 'block'}`}
          >
            Previous
          </button>
        </div>
        <div>
          <button
            onClick={nextEpisode}
            className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r rounded-lg ${currentEpisodeIndex + itemsPerPage >= episodes[currentSeason].length ? 'hidden' : 'block'}`}
          >
            Next
          </button>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <label className="text-white font-bold">Select Season:</label>
        <select
          value={currentSeason}
          onChange={(e) => setCurrentSeason(Number(e.target.value))}
          className="bg-white text-black rounded-md p-2 ml-2"
        >
          {seasons.map((season) => (
            <option key={season} value={season}>
              Season {season}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Seasons;
