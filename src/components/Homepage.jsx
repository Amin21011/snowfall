import React from 'react';
import Image from 'next/image';

const Homepage = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto py-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Information about the Series "Snowfall"</h2>
                <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
                    <p className="text-lg leading-relaxed">
                        "Snowfall" is an American crime drama television series set in the 1980s in Los Angeles. The series follows the rise of the crack epidemic and its impact on the community, drug trade, and the characters involved. The series combines crime, politics, and social commentary to tell an immersive story.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        Key characters in the series include Franklin Saint, a young dealer who gets involved in the drug trade; Gustavo "El Oso" Zapata, a wrestler and hitman; and Teddy McDonald, a CIA agent involved in drug trade financing. The series also explores themes such as race, class, corruption, and the societal impact of drugs.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        "Snowfall" offers a compelling look at a tumultuous period in American history and has built a loyal fanbase since its premiere. The series is a must-see for fans of crime dramas and historical fiction.
                    </p>
                </div>
            </div>

            <div className="py-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 py-4">Quotes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-16">
                    <div className="bg-white p-8 rounded-lg shadow-md text-gray-800 text-center">
                        <div className="text-lg font-semibold leading-relaxed">
                            "The streets of Los Angeles have their own laws."
                        </div>
                        <p className="text-lg mt-4">- Franklin Saint</p>
                        <div className="py-4">
                            <Image
                                src="/franklin.jpg"
                                alt="Franklin Saint"
                                width={275}
                                height={275}
                                className="mx-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md text-gray-800 text-center">
                        <div className="text-lg font-semibold leading-relaxed">
                            "There's no turning back once you've stepped into this world."
                        </div>
                        <p className="text-lg mt-4">- Gustavo "El Oso" Zapata</p>
                        <div className="py-4">
                            <Image
                                src="/el_oso.jpg"
                                alt="Gustavo El Oso Zapata"
                                width={275}
                                height={275}
                                className="mx-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md text-gray-800 text-center">
                        <div className="text-lg font-semibold leading-relaxed">
                            "Power is a double-edged sword, and it cuts both ways."
                        </div>
                        <p className="text-lg mt-4">- Teddy McDonald</p>
                        <div className="py-4">
                            <Image
                                src="/teddy.jpg"
                                alt="Teddy McDonald"
                                width={275}
                                height={275}
                                className="mx-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md text-gray-800 text-center">
                        <div className="text-lg font-semibold leading-relaxed">
                            "I've been in this game a long time, Franklin. You gotta be careful."
                        </div>
                        <p className="text-lg mt-4">- Jerome Saint</p>
                        <div className="py-4">
                            <Image
                                src="/jerome.jpg"
                                alt="Jerome Saint"
                                width={275}
                                height={275}
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
