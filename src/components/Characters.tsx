"use client";
import React, { useState, useEffect } from 'react';

interface Character {
  id: number;
  name: string;
  character: string;
}

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '6cd39892082c429f54189fa0095e77f6';
        const tvSeriesId = '71694';

        const apiUrl = `https://api.themoviedb.org/3/tv/${tvSeriesId}/credits?api_key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setCharacters(data.cast);
      } catch (error) {
        console.error('Fout bij het ophalen van gegevens:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center relative text-white">
      <div className="p-8 bg-black bg-opacity-50">
        <h1 className="text-4xl font-extrabold mb-6">Snowfall Characters</h1>
        <ul className="space-y-4">
          {characters.map((character) => (
            <li key={character.id} className="border-b border-white pb-4">
              <p className="text-lg font-semibold text-gray-300">Naam: {character.name}</p>
              <p className="text-gray-400">Rol: {character.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Characters;
