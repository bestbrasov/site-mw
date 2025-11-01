import React, { useEffect, useState } from "react";

type Event = [string, string];

const Schedule: React.FC = () => {
    const [currentEvent, setCurrentEvent] = useState<string>("");

    const scheduleData: { day: string; events: Event[] }[] = [
        {
            day: "Friday",
            events: [
                ["18:30", "Arrival"],
                ["19:00", "Opening"],
                ["19:30", "Karaoke"],
                ["21:00", "Break"],
                ["21:30", "Tradition Sharing"],
                ["22:30", "Break"],
                ["23:00", "Party Time (by babies)"]
            ]
        },
        {
            day: "Saturday",
            events: [
                ["09:00", "Wake-up"],
                ["09:15", "Breakfast"],
                ["10:00", "Generation Teambuilding"],
                ["13:00", "Lunch"],
                ["13:45", "Common Teambuilding"],
                ["15:45", "Break"],
                ["16:30", "Photo Session"],
                ["17:30", "Family Time"],
                ["18:30", "Dinner"],
                ["19:00", "Talent Show"],
                ["21:30", "Break"],
                ["22:30", "Room Crawl"],
                ["23:59", "Party Time"]
            ]
        },
        {
            day: "Sunday",
            events: [
                ["09:00", "Wake-up"],
                ["10:00", "Breakfast"],
                ["11:00", "Departure"]
            ]
        }
    ];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const today = now.toLocaleDateString("en-US", { weekday: "long" });
            const todaySchedule = scheduleData.find(d => d.day === today);
            const allEvents = todaySchedule?.events || [];

            const formattedTime = now.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });

            const nowMinutes = parseInt(formattedTime.split(":")[0]) * 60 + parseInt(formattedTime.split(":")[1]);

            let current = "No ongoing event";
            for (let i = 0; i < allEvents.length; i++) {
                const [time, desc] = allEvents[i];
                const [h, m] = time.split(":").map(Number);
                const eventMinutes = h * 60 + m;

                if (nowMinutes >= eventMinutes) {
                    current = desc;
                } else {
                    break;
                }
            }

            setCurrentEvent(current);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="schedule" className="relative bg-gradient-to-b from-[#1a4d5e] via-[#2d6b7a] to-[#1a4d5e] text-white px-6 py-20 overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a4d5e]/50 via-transparent to-[#2d6b7a]/30"></div>
            
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl font-bold text-[#f4e6d0] mb-6 uppercase tracking-wide" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.7)' }}>
                    Event Schedule
                </h2>
                <div className="bg-[#d97c4a]/90 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg mb-12 shadow-2xl inline-block border-2 border-[#f4e6d0]/40">
                    <span className="text-[#f4e6d0]/80">Current activity:</span> <strong className="text-[#f4e6d0]">{currentEvent}</strong>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    {scheduleData.map(({ day, events }) => (
                        <div key={day} className="bg-[#1a4d5e]/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-[#d97c4a]/40 hover:border-[#f4e6d0]/60 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-[#f4e6d0] mb-6 text-center pb-3 border-b-2 border-[#d97c4a]/30" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                                {day}
                            </h3>
                            <ul className="space-y-3">
                                {events.map(([time, desc], j) => {
                                    const isCurrent = currentEvent === desc;
                                    return (
                                        <li
                                            key={j}
                                            className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                                                j % 2 === 0 ? "bg-[#2d6b7a]/40" : "bg-[#d97c4a]/20"
                                            } ${isCurrent ? "ring-2 ring-[#f4e6d0] shadow-lg scale-105 bg-[#d97c4a]/50" : "hover:bg-[#2d6b7a]/60"} backdrop-blur-sm`}
                                        >
                                            <span className="text-sm text-[#f4e6d0] font-mono font-bold bg-[#1a4d5e]/50 px-3 py-1 rounded-md">{time}</span>
                                            <span className="flex-1 text-left ml-4 text-white/95 font-medium">{desc}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;