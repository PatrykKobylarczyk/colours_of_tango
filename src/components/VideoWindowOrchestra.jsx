import React from "react";

// COMPONENTS
import { SlControlPlay } from "react-icons/sl";
import Button from "../components/Button";
import image from "../assets/images/orchester4.jpg";

const VideoWindowOrchestra = ({ setShowModal }) => {
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleKeypress = (e, id) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleOpenModal();
    }
  };

  return (
    <div className="overflow-hidden">
      <div
        className="group relative grid place-items-center w-full h-full transition duration-200 hover:scale-[1.02] cursor-pointer z-10"
        onClick={() => handleOpenModal()}
        onKeyDown={() => handleKeypress()}
        role="button"
        tabIndex="0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button content={<SlControlPlay className=" ml-1 text-white" />} />
        </div>
        <img
          src={image}
          alt={"Colour of Tango & Orchester"}
          className="w-[120%] h-full"
        />
      </div>
    </div>
  );
};

export default VideoWindowOrchestra;
