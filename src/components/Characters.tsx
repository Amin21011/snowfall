import React from 'react';
import { season1 } from '../data/charactersData';
import Image from 'next/image';

const Characters = () => {
  const imageSize = 125;

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-bold">Season 1</h1>
        <div className="flex gap-4">
          {season1.map((character) => (
            <div key={character.id} className="text-center">
              <Image
                src={character.image}
                alt={character.name}
                width={imageSize}
                height={imageSize}
                style={{ objectFit: 'cover', width: imageSize, height: imageSize }}
              />
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;





// <div>
// <h1 className="text-3xl font-bold">Season 2</h1>
// <div className="flex gap-4">
//   {charactersData1.map((character) => (
//     <div key={character.id} className="text-center">
//       <Image src={character.image} alt={character.name} width={100} height={100} />
//       <h2>{character.name}</h2>
//     </div>
//   ))}
// </div>
// </div>