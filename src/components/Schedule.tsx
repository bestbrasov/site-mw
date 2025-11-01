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
        <section id="schedule" className="bg-gray-950 text-white px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-pink-400 mb-4 uppercase tracking-wide">Event Schedule</h2>
                <div className="bg-gray-900 text-pink-300 px-6 py-4 rounded-xl text-lg mb-12 shadow-md inline-block">
                    Current activity: <strong>{currentEvent}</strong>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    {scheduleData.map(({ day, events }) => (
                        <div key={day} className="bg-gray-900 p-6 rounded-xl shadow-xl">
                            <h3 className="text-2xl font-bold text-pink-300 mb-4 text-center">{day}</h3>
                            <ul className="space-y-4">
                                {events.map(([time, desc], j) => {
                                    const isCurrent = currentEvent === desc;
                                    return (
                                        <li
                                            key={j}
                                            className={`flex justify-between items-center p-4 rounded-lg ${
                                                j % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                                            } ${isCurrent ? "ring-2 ring-pink-400" : ""}`}
                                        >
                                            <span className="text-sm text-pink-200 font-mono w-24">{time}</span>
                                            <span className="flex-1 text-left ml-4">{desc}</span>
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
