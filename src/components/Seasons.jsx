import React from 'react';
import Image from 'next/image';

const Seasons = () => {
    return (
        <div className="py-8">
            <div className="container flex justify-center mx-auto text-center gap-8">
                <div className="grid md:grid-cols-3 gap-52">
                    {/* Season 1 */}
                    <div>
                        <a href="/">
                        <Image
                            src="/season1.jpg"
                            alt="Season 1"
                            width={200}
                            height={200}
                        />
                        <h2 className="text-lg font-semibold">Season 1</h2>
                        </a>
                    </div>

                    {/* Season 2 */}
                    <div>
                        <a href="/">
                        <Image
                            src="/season2.jpg"
                            alt="Season 2"
                            width={200}
                            height={200}
                        />
                        <h2 className="text-lg font-semibold">Season 2</h2>
                        </a>
                    </div>

                    {/* Season 3 */}
                    <div>
                        <a href="/">
                        <Image
                            src="/season3.jpg"
                            alt="Season 3"
                            width={200}
                            height={200}
                        />
                        <h2 className="text-lg font-semibold">Season 3</h2>
                        </a>
                    </div>

                    {/* Season 4 */}
                    <div>
                        <a href="/">
                        <Image
                            src="/season4.jpg"
                            alt="Season 4"
                            width={200}
                            height={200}
                        />
                        <h2 className="text-lg font-semibold">Season 4</h2>
                        </a>
                    </div>

                    {/* Season 5 */}
                    <div>
                        <a href="/">
                        <Image
                            src="/season5.jpg"
                            alt="Season 5"
                            width={200}
                            height={200}
                        />
                        <h2 className="text-lg font-semibold">Season 5</h2>
                        </a>
                    </div>

                    {/* Season 6 */}
                    <div>
                        <a href="/">
                        <Image
                            src="/season6.jpg"
                            alt="Season 6"
                            width={200}
                            height={200}
                        />
                        <h2 className="text-lg font-semibold">Season 6</h2>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Seasons;
