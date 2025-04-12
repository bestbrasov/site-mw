import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 shadow-md">
                <div className="text-2xl font-bold tracking-wider uppercase">
                    Motivational Weekend
                </div>

                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#schedule" className="hover:text-pink-400 transition-colors">Schedule</a>
                    <a href="#code-of-conduct" className="hover:text-pink-400 transition-colors">Code of Conduct</a>
                    <a href="#bar-prices" className="hover:text-pink-400 transition-colors">Bar Prices</a>
                    <a href="#drive-link" className="hover:text-pink-400 transition-colors">Drive Folder</a>
                    <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
                </nav>

                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between px-40 py-20 md:py-32 gap-10">
                <div className="max-w-xl">
                    <p className="text-sm uppercase tracking-widest text-pink-300">Inspiration • Connection • Music</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight">
                        Motivational <span className="text-pink-400">Weekend</span> 2025
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-md">
                        Join us for an unforgettable weekend of grate party, inspiring talks, and vibrant energy. 11 - 12+1 April 2025.
                    </p>
                </div>

                <div className="relative w-60 sm:w-72 md:w-80 aspect-square rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600 p-1 mx-auto">
                    <img
                        src="https://imgur.com/21e2uA9.jpg"
                        alt="Featured Speaker or DJ"
                        className="w-full h-full object-contain rounded-full p-6 sm:p-8"
                    />
                </div>

            </div>
        </header>
    );
};

export default Header;
