import React from "react";
import { concerts } from "../data/concertsData";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ConcertItem = ({ city, place, date }) => {
  return (
    <div className="item-container w-full max-w-[500px] bg-black text-white border border-white shadow-md cursor-default overflow-hidden">
      {/* Zdjęcie z overlayem */}
      <div className="relative h-56 overflow-hidden">
        <StaticImage
          src="../assets/images/ticket.jpg"
          alt={place}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-out origin-left hover:scale-110"
        />
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 px-4 py-2 text-lg font-bold uppercase tracking-wide">
          {city}
        </div>
      </div>

      {/* Treść */}
      <div className="p-6">
        <div className="text-xl font-bold uppercase mb-2">{place}</div>
        <div className="text-md italic mb-1">{city}</div>
      </div>

      {/* Data */}
      <div className="border-t border-white px-6 py-3 text-sm text-gray-300">
        {date}
      </div>
    </div>
  );
};

const ConcertList = () => {
  return (
    <section className="py-10 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {concerts.map((concert) => (
          <motion.div key={concert.id} variants={item}>
            <ConcertItem {...concert} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ConcertList;
