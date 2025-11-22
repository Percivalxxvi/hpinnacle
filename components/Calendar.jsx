// {if i add a backend}

// import React, { useState } from "react";

// const Calendar = () => {
//   const today = new Date();
//   const [currentDate, setCurrentDate] = useState(today);
//   const [events, setEvents] = useState({});
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [newEvent, setNewEvent] = useState("");

//   // Helpers
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const monthName = currentDate.toLocaleString("default", { month: "long" });

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
//   const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
//   const goToToday = () => setCurrentDate(today);

//   const handleAddEvent = () => {
//     if (!newEvent.trim() || !selectedDate) return;
//     const dateKey = selectedDate.toDateString();
//     setEvents({
//       ...events,
//       [dateKey]: [...(events[dateKey] || []), newEvent],
//     });
//     setNewEvent("");
//   };

//   const renderDays = () => {
//     const blanks = Array(firstDay).fill(null);
//     const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//     return [...blanks, ...days].map((day, idx) => {
//       const dateObj = day ? new Date(year, month, day) : null;
//       const isToday = day && dateObj.toDateString() === today.toDateString();
//       const hasEvent = dateObj && events[dateObj.toDateString()]?.length > 0;

//       return (
//         <div
//           key={idx}
//           className={`flex items-center justify-center rounded-lg cursor-pointer font-medium h-14 sm:h-16 md:h-20 transition
//             ${isToday ? "border-2 border-green-700" : ""}
//             ${hasEvent ? "bg-green-100" : "bg-gray-100 hover:bg-green-50"}
//           `}
//           onClick={() => dateObj && setSelectedDate(dateObj)}
//         >
//           {day || ""}
//         </div>
//       );
//     });
//   };

//   const selectedEvents =
//     selectedDate && events[selectedDate.toDateString()]
//       ? events[selectedDate.toDateString()]
//       : [];

//   return (
//     <div
//       className="
//         w-[95%]
//         sm:w-[90%]
//         md:w-[85%]
//         lg:w-[80%]
//         xl:w-[70%]
//         bg-white
//         rounded-xl
//         shadow-xl
//         p-4
//         sm:p-6
//         md:p-8
//         font-sans
//         min-h-[80vh]
//         flex
//         flex-col
//         justify-between
//       "
//     >
//       {/* Header */}
//       <header className="flex flex-wrap justify-between items-center mb-4 gap-2">
//         <div className="flex items-center gap-2">
//           <button
//             onClick={prevMonth}
//             className="bg-green-700 text-white rounded-md px-3 py-1 hover:bg-green-800"
//           >
//             ←
//           </button>
//           <button
//             onClick={nextMonth}
//             className="bg-green-700 text-white rounded-md px-3 py-1 hover:bg-green-800"
//           >
//             →
//           </button>
//         </div>

//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center flex-1">
//           {monthName} {year}
//         </h2>

//         <button
//           onClick={goToToday}
//           className="bg-green-700 text-white rounded-md px-3 py-1 hover:bg-green-800"
//         >
//           Today
//         </button>
//       </header>

//       {/* Weekdays */}
//       <div className="grid grid-cols-7 text-center text-gray-600 font-semibold mb-2 text-sm sm:text-base">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
//           <div key={d}>{d}</div>
//         ))}
//       </div>

//       {/* Calendar days */}
//       <div className="grid grid-cols-7 gap-2 flex-grow">{renderDays()}</div>

//       {/* Event panel */}
//       {selectedDate && (
//         <div className="mt-6 border-t border-gray-200 pt-4">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">
//             Events on {selectedDate.toDateString()}
//           </h3>

//           <ul className="space-y-2 mb-3">
//             {selectedEvents.length ? (
//               selectedEvents.map((evt, i) => (
//                 <li
//                   key={i}
//                   className="bg-gray-100 p-2 rounded-md text-gray-700"
//                 >
//                   {evt}
//                 </li>
//               ))
//             ) : (
//               <li className="text-gray-500 italic">No events</li>
//             )}
//           </ul>

//           <div className="flex flex-col sm:flex-row gap-2">
//             <input
//               type="text"
//               placeholder="Add event..."
//               value={newEvent}
//               onChange={(e) => setNewEvent(e.target.value)}
//               className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 focus:outline-none"
//             />
//             <button
//               onClick={handleAddEvent}
//               className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-800"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Calendar;

import React, { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  // The key must match `new Date(year, monthIndex, day).toDateString()`
  const events = {
    [new Date(2025, 10, 12).toDateString()]: ["Team Meeting", "Client Call"],
    [new Date(2025, 10, 14).toDateString()]: ["Project Deadline"],
    [new Date(2025, 10, 20).toDateString()]: ["Product Launch"],
    [new Date(2025, 11, 24).toDateString()]: ["Christmas Eve"],
    [new Date(2025, 11, 25).toDateString()]: ["Christmas Day"],
    [new Date(2025, 11, 26).toDateString()]: ["Boxing Day"],
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToToday = () => setCurrentDate(today);

  const renderDays = () => {
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...blanks, ...days].map((day, idx) => {
      const dateObj = day ? new Date(year, month, day) : null;
      const isToday = day && dateObj.toDateString() === today.toDateString();
      const hasEvent = dateObj && events[dateObj.toDateString()];

      return (
        <div
          key={idx}
          className={`flex items-center justify-center rounded-lg cursor-pointer font-medium h-12 sm:h-15 md:h-15 transition
            ${isToday ? "border-2 border-green-700" : ""}
            ${hasEvent ? "bg-green-100" : "bg-gray-100 hover:bg-green-50"}
          `}
          onClick={() => dateObj && setSelectedDate(dateObj)}
        >
          {day || ""}
        </div>
      );
    });
  };

  const selectedEvents =
    selectedDate && events[selectedDate.toDateString()]
      ? events[selectedDate.toDateString()]
      : [];

  return (
    <div
      className="
        w-[95%] 
        sm:w-[90%] 
        md:w-[85%] 
        lg:w-[80%] 
        xl:w-[70%]
        bg-white 
        rounded-xl 
        shadow-xl 
        p 
        sm:p-6 
        md:p-4 
        font-sans 
        min-h-[80vh]
        flex 
        flex-col 
        justify-between
      "
    >
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="bg-green-700 text-white rounded-md px-3 py-1 hover:bg-green-800"
          >
            ←
          </button>
          <button
            onClick={nextMonth}
            className="bg-green-700 text-white rounded-md px-3 py-1 hover:bg-green-800"
          >
            →
          </button>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center flex-1">
          {monthName} {year}
        </h2>

        <button
          onClick={goToToday}
          className="bg-green-700 text-white rounded-md px-3 py-1 hover:bg-green-800"
        >
          Today
        </button>
      </header>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-gray-600 font-semibold mb-2 text-sm sm:text-base">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2 flex-grow">{renderDays()}</div>

      {/* Event viewer (no adding) */}
      {selectedDate && (
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Events on {selectedDate.toDateString()}
          </h3>

          <ul className="space-y-2 mb-3">
            {selectedEvents.length ? (
              selectedEvents.map((evt, i) => (
                <li
                  key={i}
                  className="bg-gray-100 p-2 rounded-md text-gray-700"
                >
                  {evt}
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">No events</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calendar;
