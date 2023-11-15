import React from 'react';

const homepageStyles = {
  fontFamily: "-apple-system, BlinkMacSystemFont, -webkit-system-font, 'Malgun Gothic', 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif",
};

const Homepage = () => {
  return (
    <div className="bg-cover bg-center h-screen relative">
      <img
        src="/snowfall.gif"
        alt="Achtergrondafbeelding"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute flex items-end justify-center w-full h-full px-36 pb-20">
        <div className="text-white text-center" style={homepageStyles}>
          Snowfall is an American crime drama television series set in the 1980s in Los Angeles. The series follows the rise of the crack epidemic and its impact on the community, drug trade, and the characters involved. The series combines crime, politics, and social commentary to tell an immersive story. Key characters in the series include Franklin Saint, a young dealer who gets involved in the drug trade; Gustavo "El Oso" Zapata, a wrestler and hitman; and Teddy McDonald, a CIA agent involved in drug trade financing.
        </div>
      </div>
    </div>
  );
};

export default Homepage;
