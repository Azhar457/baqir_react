import React from "react";

const GroupMember = ({ image, name, nim }) => {
  return (
    <div className="flex flex-col md:flex-wrap items-center w-[200px] h-[200px] justify-center max-w-[300px] md:max-w-[200px]
    ">
      <div className="overflow-hidden rounded-full w-28 h-28 md:w-28 md:h-28 bg-url">
        <img src={image} alt={name} />
      </div>
      <h1 className="text-sm md:text-sm text-red-800 font-bold font-poppins tracking-wide drop-shadow-md text-center">
        {name}
      </h1>
      <p className="text-center">{nim}</p>
    </div>
  );
};

export default GroupMember;
