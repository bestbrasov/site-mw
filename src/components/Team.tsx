const Team: React.FC = () => {
    return (
        <section id="team" className="relative text-white px-6 py-20 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img 
                    src="https://i.imgur.com/f5Jh8cS.jpeg" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Semi-transparent gradient overlay - culori din imaginea cu personajele */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d5e]/85 via-[#2d6b7a]/75 to-[#1a4d5e]/85"></div>
            
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl font-bold text-[#f4e6d0] mb-16 uppercase tracking-wide" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.7)' }}>
                    Meet The Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-[#d97c4a] to-[#f4e6d0] p-1 shadow-2xl">
                            <img 
                                src="https://i.imgur.com/XQ2QueP.jpeg" 
                                alt="Saghin Lucian"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="bg-[#1a4d5e]/80 backdrop-blur-md px-4 py-3 rounded-lg inline-block border-2 border-[#d97c4a]/30">
                            <h3 className="text-xl font-semibold text-[#f4e6d0]" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                                Saghin Lucian
                            </h3>
                            <p className="text-[#f4e6d0]/80 mt-1 text-sm">Social Responsible</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-[#d97c4a] to-[#f4e6d0] p-1 shadow-2xl">
                            <img
                                src="https://i.imgur.com/QMAvyqT.jpeg"
                                alt="Damian Iulian"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="bg-[#1a4d5e]/80 backdrop-blur-md px-4 py-3 rounded-lg inline-block border-2 border-[#d97c4a]/30">
                            <h3 className="text-xl font-semibold text-[#f4e6d0]" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                                Damian Iulian
                            </h3>
                            <p className="text-[#f4e6d0]/80 mt-1 text-sm">Event Coordinator</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-[#d97c4a] to-[#f4e6d0] p-1 shadow-2xl">
                            <img 
                                src="https://i.imgur.com/8R5WNe6.jpeg" 
                                alt="Gavra Sorin"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="bg-[#1a4d5e]/80 backdrop-blur-md px-4 py-3 rounded-lg inline-block border-2 border-[#d97c4a]/30">
                            <h3 className="text-xl font-semibold text-[#f4e6d0]" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                                Gavra Sorin
                            </h3>
                            <p className="text-[#f4e6d0]/80 mt-1 text-sm">Graphic Design Responsible</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-[#d97c4a] to-[#f4e6d0] p-1 shadow-2xl">
                            <img 
                                src="https://i.imgur.com/x4Xg46Y.jpeg" 
                                alt="Pîşnei Ştefania"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="bg-[#1a4d5e]/80 backdrop-blur-md px-4 py-3 rounded-lg inline-block border-2 border-[#d97c4a]/30">
                            <h3 className="text-xl font-semibold text-[#f4e6d0]" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                                Pîşnei Ştefania
                            </h3>
                            <p className="text-[#f4e6d0]/80 mt-1 text-sm">Pax Responsible</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-[#d97c4a] to-[#f4e6d0] p-1 shadow-2xl">
                            <img 
                                src="https://i.imgur.com/oEb8Rgz.jpeg" 
                                alt="Stan Alexandra"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="bg-[#1a4d5e]/80 backdrop-blur-md px-4 py-3 rounded-lg inline-block border-2 border-[#d97c4a]/30">
                            <h3 className="text-xl font-semibold text-[#f4e6d0]" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                                Stan Alexandra
                            </h3>
                            <p className="text-[#f4e6d0]/80 mt-1 text-sm">Logistics Responsible</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-[#d97c4a] to-[#f4e6d0] p-1 shadow-2xl">
                            <img 
                                src="https://i.imgur.com/x9NzaqB.jpeg" 
                                alt="Stănescu Paul"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="bg-[#1a4d5e]/80 backdrop-blur-md px-4 py-3 rounded-lg inline-block border-2 border-[#d97c4a]/30">
                            <h3 className="text-xl font-semibold text-[#f4e6d0]" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                                Stănescu Paul
                            </h3>
                            <p className="text-[#f4e6d0]/80 mt-1 text-sm">Logistics Responsible</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;