import React from 'react';
import Image from 'next/image';

interface CharacterModalProps {
  character: {
    id: number;
    name: string;
    image: any;
    description: string;
    quote: string;
  };
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center flex items-center max-w-prose">
        <div className="mr-8">
          <Image
            src={character.image}
            alt={character.name}
            width={500}
            height={500}
            className="rounded-md mb-4"
          />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-600 mb-4">{character.description}</p>
          <div className="text-left mt-4">
            <h3 className="text-lg font-semibold mb-2">Quote</h3>
            <p className="text-gray-600 mb-2">{character.quote}</p>
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sluiten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
