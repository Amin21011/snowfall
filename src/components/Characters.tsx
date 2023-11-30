"use client";

import React, { useState } from 'react';
import { main } from '../data/charactersData';
import Image from 'next/image';
import CharacterModal from './CharacterModal';

interface Character {
  id: number;
  name: string;
  image: any;
  description: string;
  quote: string;
}

const snowfall = {
  fontFamily: "'Bebas Neue', sans-serif",
};

const Characters: React.FC = () => {
  const imageMain = 125;
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const openModal = (character: Character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="bg-cover bg-center h-screen relative">
      <img
        src={`./backgrounds/la.jpg`}
        alt="Achtergrondafbeelding"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="flex flex-col items-center relative z-10">
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-12 text-white">Main Cast</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {main.map((character) => (
              <div
                key={character.id}
                className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer relative z-20"
                onClick={() => openModal(character)}
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  width={imageMain}
                  height={imageMain}
                  className="rounded-md mb-4"
                />
                <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg">
                <h2 className="text-lg mb-2 text-white" style={snowfall}>{character.name}</h2>
              </div>
              </div>
            ))}
          </div>
        </div>
        {selectedCharacter && (
          <CharacterModal character={selectedCharacter} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Characters;
