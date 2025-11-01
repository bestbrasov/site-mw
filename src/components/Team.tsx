const Team: React.FC = () => {
    return (<section id="team" className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pink-400 mb-16 uppercase tracking-wide">Meet The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://i.imgur.com/XQ2QueP.jpeg" alt="Team Member 1"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Saghin Lucian</h3>
                    <p className="text-white/80 mt-2">Social Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img
                            src="https://i.imgur.com/QMAvyqT.jpeg"
                            alt="Team Member 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Damian Iulian</h3>
                    <p className="text-white/80 mt-2">Event Coordinator</p>
                </div>


                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://i.imgur.com/8R5WNe6.jpeg" alt="Team Member 3"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Gavra Sorin</h3>
                    <p className="text-white/80 mt-2">Graphic Design Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://i.imgur.com/x4Xg46Y.jpeg" alt="Team Member 4"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Pîşnei Ştefania</h3>
                    <p className="text-white/80 mt-2">Pax Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://i.imgur.com/oEb8Rgz.jpeg" alt="Team Member 5"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Stan Alexandra</h3>
                    <p className="text-white/80 mt-2">Logistics Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://i.imgur.com/x9NzaqB.jpeg" alt="Team Member 6"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Stănescu Paul</h3>
                    <p className="text-white/80 mt-2">Logistics Responsible</p>
                </div>
            </div>
        </div>
    </section>)
}

export default Team