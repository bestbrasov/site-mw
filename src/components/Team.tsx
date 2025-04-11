const Team: React.FC = () => {
    return (<section id="team" className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pink-400 mb-16 uppercase tracking-wide">Meet The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://imgur.com/IxzUWF9.jpg" alt="Team Member 1"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Ștafania Știrbu</h3>
                    <p className="text-white/80 mt-2">Social Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img
                            src="https://i.imgur.com/smxJUwi.jpg"
                            alt="Team Member 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Georgiana Pușcașu</h3>
                    <p className="text-white/80 mt-2">Event Coordinator</p>
                </div>


                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://imgur.com/STuHqhz.jpg" alt="Team Member 3"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Dimitrie Tăbăcaru</h3>
                    <p className="text-white/80 mt-2">Graphic Design Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://imgur.com/lBpMEEa.jpg" alt="Team Member 4"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Vespan Laura</h3>
                    <p className="text-white/80 mt-2">Pax Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://imgur.com/8jTAUJD.jpg" alt="Team Member 5"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Miron Răzvan</h3>
                    <p className="text-white/80 mt-2">Logistics Responsible</p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div
                        className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-pink-500 to-purple-600">
                        <img src="https://imgur.com/cyYItJL.jpg" alt="Team Member 6"
                             className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-300">Vasiloancă Victor</h3>
                    <p className="text-white/80 mt-2">Logistics Responsible</p>
                </div>
            </div>
        </div>
    </section>)
}

export default Team