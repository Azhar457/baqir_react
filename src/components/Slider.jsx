import React from "react";
const reviews = [
  {
    name: "Zaman Rasulullah SAW",
    img: "/vite.svg",
  },
  {
    name: "Zaman Khulafaur Rasyidin",
    img: "/vite.svg",
  },
  {
    name: "Zaman Khilafah Ummayah",
    img: "/vite.svg",
  },
  {
    name: "Zaman Khilafah Abassiyah",
    img: "/vite.svg",
  },
  {
    name: "Zaman Khilafah Utsmaniyyah",
    img: "/vite.svg",
  },
  {
    name: "Zaman Sekarang",
    img: "/vite.svg",
  },
];

const ReviewCard = ({ img, name }) => {
  return (
    <figure
      className="relative h-full w-64 h-[4.5rem] cursor-pointer overflow-hidden rounded-xl border p-4
        border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]
        dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] object-center justify-center"
    >
      <div className="flex flex-row items-center gap-2">
        <img className="" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white text-left">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

const Slider = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] space-x-4 p-4">
        {reviews.concat(reviews).map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
