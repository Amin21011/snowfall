import React from 'react';
import { main, side } from '../data/charactersData';
import Image from 'next/image';

const Characters = () => {
  const imageMain = 125;
  const imageSide = 125;

  return (
    <div className="flex flex-col items-center">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Main Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {main.map((character) => (
          <div key={character.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src={character.image}
              alt={character.name}
              width={imageMain}
              height={imageMain}
              className="rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{character.name}</h2>
            <p className="text-gray-600">{character.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Side Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {side.map((character) => (
          <div key={character.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src={character.image}
              alt={character.name}
              width={imageSide}
              height={imageSide}
              className="rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{character.name}</h2>
            <p className="text-gray-600">{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Characters;