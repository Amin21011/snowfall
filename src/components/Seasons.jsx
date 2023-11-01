import React from 'react';
import Image from 'next/image';

const Seasons = () => {
  return (
    <div className="bg-cover bg-center h-screen relative">
      <img
        src="/season1background.jpg"
        alt="Achtergrondafbeelding"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute flex items-start justify-center w-full h-full pb-20">
        <h1 className="font-bold text-6xl text-white">Episode Guide</h1>
      </div>

      <div className="absolute flex flex-col items-start w-full h-full">
        <div className="mb-2">
          <p className="font-bold text-xl text-white">Season 1</p>
        </div>
        <div className="flex flex-wrap">
          <div className="card bg-white shadow-md hover:shadow-lg w-1/4 m-2">
            <img src="season1.jpg" alt="Avatar" className="w-full" />
            <div className="container p-2">
              <h4 className="text-lg font-bold">John Doe</h4> /* Verklein de tekstgrootte */
              <p>Architect & Engineer</p>
            </div>
            </div>
          <div className="card bg-white shadow-md hover:shadow-lg w-1/4 m-2"> 
            <img src="season2.jpg" alt="Avatar" className="w-full" />
            <div className="container p-2">
              <h4 className="text-lg font-bold">John Doe</h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Seasons;
