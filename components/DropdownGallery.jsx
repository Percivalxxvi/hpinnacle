import React, { useState } from "react";

const DropdownGallery = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState({}); // track each dropdown’s slider index

    const data = [
      {
        title: "Photo Splash",
        images: [
          "https://ik.imagekit.io/percival26/laboratory.JPG?updatedAt=1761572865437",
          "https://ik.imagekit.io/percival26/IMG-20251122-WA0076_1_.jpg?updatedAt=1763808855941",
          "https://ik.imagekit.io/percival26/IMG-20251122-WA0075_1_.jpg?updatedAt=1763807164167",
        ],
      },
      {
        title: "1st Term Exams 2025",
        images: [
          "https://ik.imagekit.io/percival26/laboratory.JPG?updatedAt=1761572865437",
          "https://ik.imagekit.io/percival26/IMG-20251122-WA0076_1_.jpg?updatedAt=1763808855941",
          "https://ik.imagekit.io/percival26/IMG-20251122-WA0075_1_.jpg?updatedAt=1763807164167",
        ],
      },
      {
        title: "Christmas Carol 2025",
        images: [
          "https://ik.imagekit.io/percival26/laboratory.JPG?updatedAt=1761572865437",
          "https://ik.imagekit.io/percival26/IMG-20251122-WA0076_1_.jpg?updatedAt=1763808855941",
          "https://ik.imagekit.io/percival26/IMG-20251122-WA0075_1_.jpg?updatedAt=1763807164167",
        ],
      },
      // {
      //   title: "Category Two",
      //   images: [
      //     "https://picsum.photos/id/104/600/400",
      //     "https://picsum.photos/id/105/600/400",
      //     "https://picsum.photos/id/106/600/400",
      //   ],
      // },
      // {
      //   title: "Category Three",
      //   images: [
      //     "https://picsum.photos/id/107/600/400",
      //     "https://picsum.photos/id/108/600/400",
      //     "https://picsum.photos/id/109/600/400",
      //   ],
      // },
    ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    // reset slider to first image when opened
    setSlideIndex((prev) => ({
      ...prev,
      [index]: 0,
    }));
  };

  const nextSlide = (index, length) => {
    setSlideIndex((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % length,
    }));
  };

  const prevSlide = (index, length) => {
    setSlideIndex((prev) => ({
      ...prev,
      [index]: (prev[index] - 1 + length) % length,
    }));
  };

  return (
    <div className="w-full mx-auto mt-6 px space-y-2">
      {data.map((item, index) => {
        const activeSlide = slideIndex[index] ?? 0;

        return (
          <div
            key={index}
            className="border border-gray-700 rounded-xl bg-[#3e7742] text-white shadow-lg lg:w-4/5 lg:mx-auto"
          >
            {/* Header */}
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-4 py-2 
              text-base sm:text-lg font-semibold active:scale-[0.98] transition hover:cursor-pointer"
            >
              {item.title}
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Dropdown Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
              ${
                openIndex === index
                  ? "max-h-[900px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {/* Slider Container */}
              <div className="relative bg-gray-300 text-black rounded-b-xl p-1">
                {/* Slide */}
                <div className="relative w-full lg:h-120 h-72 overflow-hidden rounded-xl items-center justify-center flex">
                  <img
                    src={item.images[activeSlide]}
                    alt="slide"
                    className="w-full lg:w-3/4 h-full object-contain lg:object-cover rounded-xl transition-all duration-500"
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-1">
                  <button
                    onClick={() => prevSlide(index, item.images.length)}
                    className="px-4 py-2 bg-[#3e7742] text-white rounded-md shadow active:scale-95 hover:cursor-pointer"
                  >
                    Prev
                  </button>

                  <p className="text-sm text-gray-700">
                    {activeSlide + 1} / {item.images.length}
                  </p>

                  <button
                    onClick={() => nextSlide(index, item.images.length)}
                    className="px-4 py-2 bg-[#3e7742] text-white rounded-md shadow active:scale-95 hover:cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownGallery;


