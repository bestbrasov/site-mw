import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative text-white overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img 
                    src="https://i.imgur.com/8vyqbom.jpeg" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Semi-transparent gradient overlay - aceeasi paleta ca la Team */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d5e]/85 via-[#2d6b7a]/75 to-[#1a4d5e]/85"></div>
            
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            
            <div className="flex items-center justify-between px-6 py-4 shadow-md relative z-10">
                <div className="text-2xl font-bold tracking-wider uppercase text-[#f4e6d0]" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                    Motivational Weekend
                </div>

                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#schedule" className="hover:text-[#f4e6d0] transition-colors">Schedule</a>
                    <a href="#drive-link" className="hover:text-[#f4e6d0] transition-colors">Drive Folder</a>
                    <a href="#contact" className="hover:text-[#f4e6d0] transition-colors">Contact</a>
                    <a href="#code-of-conduct" className="hover:text-[#f4e6d0] transition-colors">Code of Conduct</a>
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

            <div className="relative flex flex-col md:flex-row items-center justify-between px-40 py-20 md:py-32 gap-10 z-10">
                <div className="absolute left-10 bottom-10 opacity-30">
                    <img src="https://i.imgur.com/aTri1f3.png" alt="" className="w-32 h-32 object-contain" />
                </div>
                <div className="absolute right-10 top-10 opacity-30">
                    <img src="https://i.imgur.com/slyDmcU.png" alt="" className="w-32 h-32 object-contain" />
                </div>

                <div className="max-w-xl">
                    <p className="text-sm uppercase tracking-widest text-[#f4e6d0]" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.5)' }}>Inspiration • Connection • Music</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}>
                        Motivational <span className="text-[#f4e6d0]">Weekend</span> 2025
                    </h1>
                    <p className="mt-4 text-lg text-white/90 max-w-md">
                        Join us for an unforgettable weekend of grate party, inspiring talks, and vibrant energy. 7 - 9 November 2025.
                    </p>
                </div>

                <div className="relative w-80 sm:w-96 md:w-[400px] aspect-square rounded-full bg-gradient-to-tr from-[#d97c4a] to-[#f4e6d0] p-2 mx-auto flex items-center justify-center shadow-2xl">
                    <img
                        src="https://i.imgur.com/21e2uA9.png"
                        alt="Featured Speaker or DJ"
                        className="w-[85%] h-[95%] object-contain rounded-full"
                    />
                </div>

            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a4d5e]/30 to-transparent z-10"></div>
        </header>
    );
};

export default Header;