import React from "react";

const CodeOfConduct: React.FC = () => {
    return (
        <section id="code-of-conduct" className="relative text-white px-6 py-20 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img 
                    src="https://i.imgur.com/kr2gWLn.jpeg" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Semi-transparent gradient overlay - culori din imaginea cu mâna și lumina */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/95 via-[#16213e]/92 to-[#1a1a2e]/95"></div>
            
            {/* Extra gradient pentru mai mult contrast */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0f1e]/80 via-transparent to-[#16213e]/60"></div>
            
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl font-bold text-[#4ecdc4] mb-12 uppercase tracking-wide" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 20px rgba(78, 205, 196, 0.5)' }}>
                    Code of Conduct
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-16">
                    <div className="bg-[#16213e]/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border-2 border-[#4ecdc4]/30">
                        <h3 className="text-2xl font-bold text-[#4ecdc4] mb-4 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.6), 0 0 15px rgba(78, 205, 196, 0.4)' }}>
                            Allowed Actions ✅
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-white/95">
                            <li>Apply the Code of Conduct throughout the event</li>
                            <li>Respect people around you and their boundaries</li>
                            <li>Have fun within common sense</li>
                            <li>Always ask for consent</li>
                            <li>Take care of items provided to you</li>
                            <li>Respect other people's belongings and the accommodation space</li>
                            <li>Stick to the activity schedule</li>
                            <li>Keep the accommodation space clean</li>
                            <li>Take responsibility for damages</li>
                            <li>Follow house rules</li>
                            <li>Respect the structure and flow of the parties</li>
                            <li>Report any kind of problem you notice</li>
                            <li>Report if you find a lost item</li>
                            <li>Put things back in their place after using them</li>
                        </ul>
                    </div>

                    <div className="bg-[#16213e]/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border-2 border-[#4ecdc4]/30">
                        <h3 className="text-2xl font-bold text-[#4ecdc4] mb-4 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.6), 0 0 15px rgba(78, 205, 196, 0.4)' }}>
                            Not Allowed ❌
                        </h3>
                        <h4 className="text-lg font-semibold text-[#4ecdc4]/90 mb-2">Light Violations</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm mb-4 text-white/95">
                            <li>Do not steal items or alcohol</li>
                            <li>Do not endanger others or yourself</li>
                            <li>Do not use others' belongings without permission</li>
                            <li>Do not spread false information</li>
                            <li>No verbal harassment</li>
                            <li>No harmful or dangerous objects</li>
                        </ul>
                        <h4 className="text-lg font-semibold text-[#4ecdc4]/90 mb-2">Severe Violations</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm text-white/95">
                            <li>No illegal substance use</li>
                            <li>Do not make others uncomfortable (offensive behavior, inappropriate jokes, pressure, etc.)</li>
                            <li>No physical harassment</li>
                            <li>Do not bring unauthorized people (unless allowed)</li>
                            <li>No stalking</li>
                            <li>Do not violate privacy or personal space</li>
                            <li>No destruction of property</li>
                            <li>No entry into restricted areas</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                    <div className="bg-[#16213e]/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border-2 border-[#4ecdc4]/30">
                        <h3 className="text-2xl font-bold text-[#4ecdc4] mb-4 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.6), 0 0 15px rgba(78, 205, 196, 0.4)' }}>
                            Sanctions ⚖️
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-white/95">
                            <li>3 light violations = 1 severe violation</li>
                            <li>Each case is reviewed individually by the current Board and HR VP</li>
                            <li>Sanctions apply to all BEST members, including guests from other LBGs</li>
                            <li>Possible consequences include:</li>
                            <ul className="ml-5 list-[circle] space-y-1">
                                <li>Warnings</li>
                                <li>Monitoring</li>
                                <li>Removal from the event</li>
                                <li>Ban from future events</li>
                                <li>Evaluation meetings</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="bg-[#16213e]/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border-2 border-[#4ecdc4]/30">
                        <h3 className="text-2xl font-bold text-[#4ecdc4] mb-4 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.6), 0 0 15px rgba(78, 205, 196, 0.4)' }}>
                            Safe Persons 🛡️
                        </h3>
                        <p className="text-sm mb-4 text-white/95">
                            "Safe Persons" are trusted people you can talk to at any time if you feel unsafe or notice a violation.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-white/95">
                            <li>VP HR</li>
                            <li>Current Board</li>
                            <li>Main Organiser</li>
                            <li>PAX Responsible</li>
                            <li>Night Responsible</li>
                            <li>Full Members (MDVs)</li>
                        </ul>
                        <p className="text-sm mt-4 text-white/95">
                            Look for the full list of responsible people at each internal event.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a2e] to-transparent z-10"></div>
        </section>
    );
};

export default CodeOfConduct;