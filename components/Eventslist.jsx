import React, { useState } from "react";
import Footer from "./Footer";
import { events } from "../data/eventsdata"; // ✅ import data

const EventList = () => {
  // Convert string dates to Date objects
  const parsedEvents = events.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = parsedEvents.filter((event) => event.date >= today);
  const pastEvents = parsedEvents.filter((event) => event.date < today);

  const [activePage, setActivePage] = useState("upcoming");

  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="bg-white w-full sm:w-4/5 md:w-3/4 lg:w-3/3 xl:w-2/2 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b">
          <div className="px-6 py-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-800">
              School Events
            </h1>
            <p className="text-center text-sm text-gray-500">
              School Calendar & Activities
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 px-4 pb-3 justify-center">
            <button
              onClick={() => setActivePage("upcoming")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition 
                ${
                  activePage === "upcoming"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
                }
              `}
            >
              Upcoming Events
            </button>

            <button
              onClick={() => setActivePage("past")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition 
                ${
                  activePage === "past"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
                }
              `}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Event List */}
        <div className="max-h-[550px] overflow-y-auto px-6 py-4 space-y-2">
          {(activePage === "upcoming" ? upcomingEvents : pastEvents).map(
            (event, index) => {
              const isPast = event.date < today;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition
                    ${
                      isPast
                        ? "bg-gray-100 text-gray-400 opacity-70"
                        : "bg-gray-50 hover:bg-green-50"
                    }
                  `}
                >
                  {/* Date Badge */}
                  <div
                    className={`flex flex-col items-center justify-center min-w-[60px] h-[60px] rounded-lg
                      ${
                        isPast
                          ? "bg-gray-300 text-gray-600"
                          : "bg-green-700 text-white"
                      }
                    `}
                  >
                    <span className="text-lg font-bold">
                      {event.date.getDate()}
                    </span>
                    <span className="text-xs uppercase">
                      {event.date.toLocaleString("default", {
                        month: "short",
                      })}
                    </span>
                  </div>

                  {/* Event Info */}
                  <div className="flex-1">
                    <h2
                      className={`text-lg font-semibold ${
                        isPast ? "line-through" : "text-gray-800"
                      }`}
                    >
                      {event.title}
                    </h2>
                    <p className="text-sm">{event.date.toDateString()}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default EventList;
