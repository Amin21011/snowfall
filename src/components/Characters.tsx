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
    <div className="flex flex-col items-center">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Main Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {main.map((character) => (
            <div
              key={character.id}
              className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer"
              onClick={() => openModal(character)}
            >
              <Image
                src={character.image}
                alt={character.name}
                width={imageMain}
                height={imageMain}
                className="rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{character.name}</h2>
            </div>
          ))}
        </div>
      </div>
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default Characters;