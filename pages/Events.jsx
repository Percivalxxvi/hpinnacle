import React from "react";
import Navmob from "../components/Navmob";
import Navpc from "../components/Navpc";
import Footer from "../components/Footer";
import EventList from "../components/Eventslist";

const Events = () => {
  return (
    <div className="border-2 border-[gold]">
      <Navmob />

      {/* Mobile navbar spacing */}
      <div className="flex lg:hidden h-20"></div>

      <Navpc page="events" />

      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#3e7742] lg:h-fit">
        <EventList />
      </div>

      <Footer />
    </div>
  );
};

export default Events;
