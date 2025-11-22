import React from 'react'
import Navpc from '../components/Navpc';
import Navmob from '../components/Navmob';

const Gallery = () => {
  return (
    <div className="border-2 border-[gold]">
      <Navpc page="gallery" />
      <Navmob />
      <div className="flex lg:hidden h-20"></div>
      <div className="flex flex-col gap-1 border-2 border-[gold] bg-amber-300">
        <h1 className="text-4xl text-center mt-2 mb-2 font-bold text-[#3e7742]">
          Photo Splash
        </h1>
        <div className="lg:h-100 bg-amber-300 flex gap-1 lg:flex-row flex-col">
          <img
            className="lg:h-full h-55 lg:w-2/4 object-cover"
            src="https://ik.imagekit.io/percival26/IMG-20251122-WA0069_1_.jpg?updatedAt=1763802510423"
            alt="heroes pinnacle schools"
          />
          <img
            className="lg:h-full h-55 lg:w-2/4 object-cover"
            src="https://ik.imagekit.io/percival26/IMG-20251122-WA0071_1_.jpg?updatedAt=1763807089413"
            alt="heroes pinnacle schools"
          />
        </div>
        <div className="lg:h-100 bg-amber-300 flex gap-1 lg:flex-row flex-col">
          <img
            className="lg:h-full h-55 lg:w-2/4 object-cover"
            src="https://ik.imagekit.io/percival26/laboratory.JPG?updatedAt=1761572865437"
            alt="heroes pinnacle schools"
          />
          <img
            className="lg:h-full h-55 lg:w-2/4 object-cover"
            src="https://ik.imagekit.io/percival26/IMG-20251122-WA0075_1_.jpg?updatedAt=1763807164167"
            alt="heroes pinnacle schools"
          />
        </div>
        <div className="lg:h-100 bg-amber-300 flex gap-1 lg:flex-row flex-col">
          <img
            className="lg:h-full h-55 lg:w-2/4 object-cover"
            src="https://ik.imagekit.io/percival26/IMG-20251122-WA0074_1_.jpg?updatedAt=1763803417978"
            alt="heroes pinnacle schools"
          />
          <img
            className="lg:h-full h-55 lg:w-2/4 object-cover"
            src="https://ik.imagekit.io/percival26/IMG-20251122-WA0076_1_.jpg?updatedAt=1763808855941"
            alt="errors pinnacle schools"
          />
        </div>
        <div className="h-fit bg-amber-300">
          <h1 className="text-4xl text-center mt-2 mb-2 font-bold text-[#3e7742]">
            More Coming Soon...
          </h1>
        </div>
        {/* <div className="h-100 bg-amber-600"></div> */}
      </div>
    </div>
  );
}

export default Gallery