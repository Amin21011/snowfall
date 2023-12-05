"use client";
import React, { useState } from 'react';
import episodes from '../data/seasonsData';

const Seasons = () => {
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState(null); // New state for selected episode
  const seasons = [1, 2, 3, 4, 5, 6];
  const itemsPerPage = 5;

  const nextEpisode = () => {
    setCurrentEpisodeIndex((prevIndex) => (prevIndex + itemsPerPage) % episodes[currentSeason].length);
  };

  const previousEpisode = () => {
    setCurrentEpisodeIndex((prevIndex) => (prevIndex - itemsPerPage + episodes[currentSeason].length) % episodes[currentSeason].length);
  };

  const snowfall = {
    fontFamily: "'Bebas Neue', sans-serif",
  };

  const getGradientClasses = () => {
    switch (currentSeason) {
      case 1:
        return 'bg-gradient-to-r from-green-500 to-green-700';
      case 2:
        return 'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900';
      case 3:
        return 'from-blue-700 via-blue-800 to-gray-900';
      case 4:
        return 'from-fuchsia-600 to-pink-600';
      case 5:
        return 'from-slate-900 via-purple-900 to-slate-900';
      case 6:
        return 'from-red-500 to-red-800';
      default:
        return 'bg-gradient-to-r from-green-500 to-green-700';
    }
  };

  const getButtonGradientClasses = () => {
    switch (currentSeason) {
      case 1:
        return 'bg-gradient-to-r from-green-500 to-green-700';
      case 2:
        return 'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900';
      case 3:
        return 'from-blue-700 via-blue-800 to-gray-900';
      case 4:
        return 'from-fuchsia-600 to-pink-600';
      case 5:
        return 'from-slate-900 via-purple-900 to-slate-900';
      case 6:
        return 'from-red-500 to-red-800';
      default:
        return 'bg-gradient-to-r from-green-500 to-green-700';
    }
  };

  return (
    <div className="bg-cover bg-center h-screen relative">
      <img
        src={`/backgrounds/season${currentSeason}background.jpg`}
        alt="Achtergrondafbeelding"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="font-bold text-6xl text-white mb-4" style={snowfall}>
          Season {currentSeason}
        </h1>
        <div className="flex justify-center mb-4">
          {episodes[currentSeason].slice(currentEpisodeIndex, currentEpisodeIndex + itemsPerPage).map((episode, index) => (
            <div
              key={index}
              className={`card bg-gradient-to-r shadow-md hover:shadow-lg w-64 m-5 rounded-lg ${getGradientClasses()}`}
              onClick={() => setSelectedEpisode(episode)} // Set selected episode on click
            >
              <h2 className="text-xl text-center text-white my-2">{episode.title}</h2>
              <img src={episode.image} alt="Avatar" className="w-full h-40 object-cover" />
              <div className="container p-2">
                <h4 className="text-lg text-center text-white">Episode</h4>
                <p className="text-center text-white">{episode.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add a section to display details of the selected episode */}
      {selectedEpisode && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 max-w-md mx-auto rounded-md shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{selectedEpisode.title}</h1>
            <h3 className="text-2xl font-bold mb-4">{selectedEpisode.number}</h3>
            <p className="text-lg mb-2"><span className="font-semibold">Directed by:</span> {selectedEpisode.directed_by}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Written by:</span> {selectedEpisode.written_by}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Original Air Date:</span> {selectedEpisode.original_air_date}</p>
            <p className="text-lg mb-4"><span className="font-semibold">Summary:</span> {selectedEpisode.summary}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => setSelectedEpisode(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}



<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {selectedEpisode === null && (
          <div
            className={`inline-flex mt-2 xs:mt-0 transition-opacity duration-300 ${
              currentEpisodeIndex + itemsPerPage >= episodes[currentSeason].length
                ? 'opacity-0 pointer-events-none'
                : 'opacity-100 pointer-events-auto'
            }`}
          >
            <button
              onClick={nextEpisode}
              className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white rounded-lg bg-gradient-to-r ${getButtonGradientClasses()}`}
            >
              Next
            </button>
          </div>
        )}

        {selectedEpisode === null && (
          <div
            className={`inline-flex mt-2 xs:mt-0 transition-opacity duration-300 ${
              currentEpisodeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
          >
            <button
              onClick={previousEpisode}
              className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white rounded-lg bg-gradient-to-r ${getButtonGradientClasses()}`}
            >
              Previous
            </button>
          </div>
        )}
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