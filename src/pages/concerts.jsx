import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";

//COMPONENTS
import Head from "../components/Head";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

// DATA
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";
import Loader from "../components/Loader";
import GalleryRow from "../components/GalleryRow";
import ImageCarousel from "../components/ImageCarousel";

const Concerts = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language] = useRecoilState(languageState);

  //Title Animation
  const lang_EN = ["C", "o", "n", "c", "e", "r", "t", "s"];
  const lang_PL = ["K", "o", "n", "c", "e", "r", "t", "y"];

  const lang = language === "PL" ? lang_EN : lang_PL;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.3,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="w-full relative page">
      <Loader />

      {/* BACKGROUND  */}
      <div className="fixed overflow-hidden top-0 right-0 w-full">
        <StaticImage
          src="../assets/pictures/6292.jpg"
          alt="main room"
          className="fixed w-full h-screen -z-[2]"
        />

        <motion.div
          className="fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.8, duration: 1.2 }}
        ></motion.div>
      </div>

      {/* CONTENT */}
      <section className="w-full sm:max-w-[70vw] flex flex-col mx-auto px-5 lg:px-10 py-20 z-[19]">
        <motion.div
          className="flex justify-end text-4xl md:text-6xl font-bold z-[7] mt-[35vh] sm:mt-[40vh] mb-10"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {lang.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          variants={item}
          transition={{ delay: 2, staggerChildren: 0.1, delayChildren: 0.5 }}
        >
          <GalleryRow
            data={data}
            handleImageModal={handleImageModal}
            setShowModal={setShowModal}
          />
        </motion.div> */}
      </section>

      {/* BLENDS */}
      <div className=" fixed left-0 top-0 w-full h-[20vh] bg-gradient-to-b from-black z-10"></div>
      <div className=" fixed left-0 bottom-0 w-full h-[10vh] z-10"></div>
      <Head title="Colours of Tango - Gallery" />
    </div>
  );
};

export default Concerts;
