import React, { useState } from "react";
import { concerts } from "../data/concertsData";
import { concertLinks } from "../data/concertLinks";
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

const ConcertItem = ({ city, place, date, onBuyClick }) => {
  return (
    <div className="item-container w-full max-w-[500px] h-auto md:h-[450px] bg-black text-white border border-gray-300 shadow-md cursor-default overflow-hidden uppercase flex flex-col">
      {/* Zdjęcie z overlayem */}
      <div className="relative h-56 overflow-hidden shrink-0">
        <StaticImage
          src="../assets/images/ticket.jpg"
          alt={place}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-out origin-left hover:scale-110"
        />
      </div>

      {/* Treść */}
      <div className="p-6 flex-grow">
        <div className="text-xl font-bold uppercase mb-2 leading-tight break-words">
          {place}
        </div>
        <div className="text-base italic mb-1">{city}</div>
      </div>

      {/* Data + Button */}
      <div className="border-t border-gray-300 px-6 py-6 text-sm text-gray-100 flex justify-between items-center shrink-0">
        <span>{date}</span>
        <button
          onClick={onBuyClick}
          className="border border-gray-300 bg-black bg-opacity-60 text-white px-4 py-2 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-[#d50006] hover:text-white rounded-none"
        >
          Kup bilety
        </button>
      </div>
    </div>
  );
};

const TicketModal = ({ city, place, onClose }) => {
  const links = concertLinks[city] || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black text-white border border-gray-300 shadow-lg max-w-[600px] w-full p-14 uppercase relative">
        {/* Zamknij */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-xl font-bold hover:text-gray-300"
        >
          ×
        </button>

        {/* Dane miejsca */}
        <div className="mb-10 text-center">
          <div className="text-2xl font-bold mb-2">{place}</div>
          <div className="text-base italic">{city}</div>
        </div>

        {/* Linki do bileterii */}
        <ul className="space-y-4">
          {Object.entries(links).length > 0 ? (
            Object.entries(links).map(([provider, url], i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-300 bg-black bg-opacity-60 text-white px-4 py-2 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-[#d50006] hover:text-white rounded-none text-center"
                >
                  {provider}
                </a>
              </li>
            ))
          ) : (
            <div className="text-center text-gray-400 text-sm italic">
              Brak dostępnych biletów dla tego miasta.
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

const ConcertList = () => {
  const [selectedConcert, setSelectedConcert] = useState(null);

  const handleBuyClick = (concert) => {
    setSelectedConcert(concert);
  };

  const handleCloseModal = () => {
    setSelectedConcert(null);
  };

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
            <ConcertItem
              {...concert}
              onBuyClick={() => handleBuyClick(concert)}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedConcert && (
        <TicketModal
          city={selectedConcert.city}
          place={selectedConcert.place}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default ConcertList;
