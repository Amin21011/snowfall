"use client";
import React, { useState } from 'react';

const Seasons = () => {
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  const seasons = [1, 2, 3, 4, 5, 6];
  const itemsPerPage = 5;

  const episodes = {
    1: [
    {
        title: "Pilot",
        image: "/season1/Pilot.jpg",
        number: "1.1",
      },
      {
        title: "Make them birds fly",
        image: "/season1/Make_Them_Birds_Fly.jpg",
        number: "1.2",
      },
      {
        title: "Slow hand",
        image: "/season1/Slow_Hand.jpg",
        number: "1.3",
      },
      {
        title: "Trauma",
        image: "/season1/Trauma.jpg",
        number: "1.4",
      },
      {
        title: "Seven-Four",
        image: "/season1/Seven-Four.jpg",
        number: "1.5",
      },
      {
        title: "A Long Time Coming",
        image: "/season1/A_Long_Time_Coming.jpg",
        number: "1.6",
      },
      {
        title: "Cracking",
        image: "/season1/Cracking.jpg",
        number: "1.7",
      },
      {
        title: "Baby Teeth",
        image: "/season1/Baby_Teeth.jpg",
        number: "1.8",
      },
      {
        title: "Story of a Scar",
        image: "/season1/Story_of_a_Scar.jpg",
        number: "1.9",
      },
      {
        title: "The Rubicon",
        image: "/season1/The_Rubicon.jpg",
        number: "1.10",
      },
    ],
    2: [
    {
        title: "Sightlines",
        image: "/season2/Sightlines.jpg",
        number: "2.1",
      },
      {
        title: "The Day",
        image: "/season2/The_Day.jpg",
        number: "2.2",
      },
      {
        title: "Prometheus Rising",
        image: "/season2/Prometheus_Rising.jpg",
        number: "2.3",
      },
      {
        title: "Jingle Bell Rock",
        image: "/season2/Jingle_Bell_Rock.jpg",
        number: "2.4",
      },
      {
        title: "Serpiente",
        image: "/season2/Serpiente.jpg",
        number: "2.5",
      },
      {
        title: "The Offer",
        image: "/season2/The_Offer.jpg",
        number: "2.6",
      },
      {
        title: "The World Is Yours",
        image: "/season2/The_World_is_Yours.jpg",
        number: "2.7",
      },
      {
        title: "Surrender",
        image: "/season2/Surrender.jpg",
        number: "2.8",
      },
      {
        title: "Aftermath",
        image: "/season2/Aftermath.jpg",
        number: "2.9",
      },
      {
        title: "Education",
        image: "/season2/Education.jpg",
        number: "2.10",
      },
    ],
    3: [
    {
        title: "Protect and Swerve",
        image: "/season3/Protect_and_Swerve.jpg",
        number: "3.1",
      },
      {
        title: "The More You Make",
        image: "/season3/The_More_You_Make.jpg",
        number: "3.2",
      },
      {
        title: "Cash and Carry",
        image: "/season3/Cash_and_Carry.jpg",
        number: "3.3",
      },
      {
        title: "The Game That Moves as You Play",
        image: "/season3/The_Game_That_Moves_as_You_Play.jpg",
        number: "3.4",
      },
      {
        title: "The Bottoms",
        image: "/season3/The_Bottoms.jpg",
        number: "3.5",
      },
      {
        title: "Confessions",
        image: "/season3/Confessions.jpg",
        number: "3.6",
      },
      {
        title: "Pocket Full of Rocks",
        image: "/season3/Pocket_Full_of_Rocks.jpg",
        number: "3.7",
      },
      {
        title: "Hedgehogs",
        image: "/season3/Hedgehogs.jpg",
        number: "3.8",
      },
      {
        title: "Blackout",
        image: "/season3/Blackout.jpg",
        number: "3.9",
      },
      {
        title: "Other Lives",
        image: "/season3/Other_Lives.jpg",
        number: "3.10",
      },
    ],
    4: [
    {
        title: "Re-Entry",
        image: "/season4/Re-Entry.jpg",
        number: "4.1",
      },
      {
        title: "Weight",
        image: "/season4/Weight.jpg",
        number: "4.2",
      },
      {
        title: "All the Way Down",
        image: "/season4/All_the_Way_Down.jpg",
        number: "4.3",
      },
      {
        title: "Expansion",
        image: "/season4/Expansion.jpg",
        number: "4.4",
      },
      {
        title: "The Get Back",
        image: "/season4/The_Get_Back.jpg",
        number: "4.5",
      },
      {
        title: "Say a Little Prayer",
        image: "/season4/Say_a_Little_Prayer.jpg",
        number: "4.6",
      },
      {
        title: "Through a Glass, Darkly",
        image: "/season4/Through_a_Glass2C_Darkly.jpg",
        number: "4.7",
      },
      {
        title: "Betrayal",
        image: "/season4/Betrayal.jpg",
        number: "4.8",
      },
      {
        title: "Sleeping Dogs",
        image: "/season4/Sleeping_Dogs.jpg",
        number: "4.9",
      },
      {
        title: "Fight or Flight",
        image: "/season4/Fight_or_Flight.jpg",
        number: "4.10",
      },
    ],
    5: [
    {
        title: "Comets",
        image: "/season5/Comets.jpg",
        number: "5.1",
      },
      {
        title: "Commitment",
        image: "/season5/Commitment.jpg",
        number: "5.2",
      },
      {
        title: "Lions",
        image: "/season5/Lions.jpg",
        number: "5.3",
      },
      {
        title: "Revolutions",
        image: "/season5/Revolutions.jpg",
        number: "5.4",
      },
      {
        title: "The Iliad: Part 1",
        image: "/season5/The_Iliad_Part_1.jpg",
        number: "5.5",
      },
      {
        title: "The Iliad: Part 2",
        image: "/season5/The_Iliad_Part_2.jpg",
        number: "5.6",
      },
      {
        title: "Lying in a Hammock",
        image: "/season5/Lying_in_a_Hammock.jpg",
        number: "5.7",
      },
      {
        title: "Celebration",
        image: "/season5/Celebration.jpg",
        number: "5.8",
      },
      {
        title: "Departures",
        image: "/season5/Departures.jpg",
        number: "5.9",
      },
      {
        title: "Fault Lines",
        image: "/season5/Fault_Lines.jpg",
        number: "5.10",
      },
    ],
    6: [
    {
        title: "Fallout",
        image: "/season6/Fallout.jpg",
        number: "6.1",
      },
      {
        title: "The Sit Down",
        image: "/season6/The_Sit_Down.jpg",
        number: "6.2",
      },
      {
        title: "Door of No Return",
        image: "/season6/Door_of_No_Return.jpg",
        number: "6.3",
      },
      {
        title: "Projects Boy",
        image: "/season6/Projects_Boy.jpg",
        number: "6.4",
      },
      {
        title: "Ebony and Ivory",
        image: "/season6/Ebony_and_Ivory.jpg",
        number: "6.5",
      },
      {
        title: "Concrete Jungle",
        image: "/season6/Concrete_Jungle.jpg",
        number: "6.6",
      },
      {
        title: "Charnel House",
        image: "/season6/Charnel_House.jpg",
        number: "6.7",
      },
      {
        title: "Ballad of the Bear",
        image: "/season6/Ballad_of_the_Bear.jpg",
        number: "6.8",
      },
      {
        title: "Sacrifice",
        image: "/season6/Sacrifice.jpg",
        number: "6.9",
      },
      {
        title: "The Struggle",
        image: "/season6/The_Struggle.jpg",
        number: "6.10",
      },
    ],
    };

    // const totalPages = Math.ceil(episodes[currentSeason].length / itemsPerPage);

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