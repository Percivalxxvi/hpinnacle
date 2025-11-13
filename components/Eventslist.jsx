import React from "react";

const EventList = () => {
  //Define events here
  const events = [
    { date: new Date(2025, 10, 12), title: "Examinations Begin" },
    { date: new Date(2025, 10, 12), title: "Examinations Ends" },
    { date: new Date(2025, 11, 24), title: "Christmas Eve" },
    { date: new Date(2025, 11, 25), title: "Christmas Day" },
    { date: new Date(2025, 11, 26), title: "Boxing Day" },
  ];

  return (
    <div className="w-full pt-2 pb-2 flex justify-center items-center bg-[#3e7742]">
      <div className="bg-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-xl shadow-xl p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-800 mb-6">
          Upcoming Events
        </h1>

        <ul className="flex flex-col gap-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-green-50 transition"
            >
              <p className="text-sm text-gray-500">
                {event.date.toDateString()}
              </p>
              <h2 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
