import React from "react";

const ConcertTable = ({ concert }) => {
  return (
    <button className="w-full md:w-[25vw] border border-white aspect-square transition duration-200 ease-out md:hover:scale-[1.02] cursor-pointer z-[1000]">
      {concert.place}
    </button>
  );
};

export default ConcertTable;
