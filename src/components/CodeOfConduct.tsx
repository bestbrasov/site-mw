import React from "react";

const CodeOfConduct: React.FC = () => {
    return (
        <section id="code-of-conduct" className="bg-gray-950 text-white px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-pink-400 mb-12 uppercase tracking-wide">Code of Conduct</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-16">
                    <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-pink-300 mb-4 text-center">Allowed Actions ✅</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
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

                    <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-pink-300 mb-4 text-center">Not Allowed ❌</h3>
                        <h4 className="text-lg font-semibold text-pink-200 mb-2">Light Violations</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                            <li>Do not steal items or alcohol</li>
                            <li>Do not endanger others or yourself</li>
                            <li>Do not use others' belongings without permission</li>
                            <li>Do not spread false information</li>
                            <li>No verbal harassment</li>
                            <li>No harmful or dangerous objects</li>
                        </ul>
                        <h4 className="text-lg font-semibold text-pink-200 mb-2">Severe Violations</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm">
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
                    <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-pink-300 mb-4 text-center">Sanctions ⚖️</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>3 light violations = 1 severe violation</li>
                            <li>Each case is reviewed individually by the current Board and HR VP</li>
                            <li>Sanctions apply to all BEST members, including guests from other LBGs</li>
                            <li>Possible consequences include:</li>
                            <ul className="ml-5 list-[circle]">
                                <li>Warnings</li>
                                <li>Monitoring</li>
                                <li>Removal from the event</li>
                                <li>Ban from future events</li>
                                <li>Evaluation meetings</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-pink-300 mb-4 text-center">Safe Persons 🛡️</h3>
                        <p className="text-sm mb-4">
                            “Safe Persons” are trusted people you can talk to at any time if you feel unsafe or notice a violation.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>VP HR</li>
                            <li>Current Board</li>
                            <li>Main Organiser</li>
                            <li>PAX Responsible</li>
                            <li>Night Responsible</li>
                            <li>Full Members (MDVs)</li>
                        </ul>
                        <p className="text-sm mt-4">
                            Look for the full list of responsible people at each internal event.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeOfConduct;
