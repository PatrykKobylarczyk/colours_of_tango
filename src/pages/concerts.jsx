import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

// COMPONENTS
import Head from "../components/Head";
import Loader from "../components/Loader";
import ConcertList from "../components/ConcertItem";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const Concerts = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
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

      {/* BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-[2]">
        <StaticImage
          src="../assets/images/orchester3.jpg"
          alt="main room"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.8, duration: 1.2 }}
        />
      </div>

      {/* CONTENT */}
      <section className="relative z-10 w-full sm:max-w-[70vw] mx-auto px-5 lg:px-10 py-20 flex flex-col">
        {/* Tytuł */}
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

        {/* Lista koncertów */}
        <div className=" ">
          <ConcertList />
        </div>
      </section>

      {/* BLENDS */}
      <div className="fixed top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black z-10" />
      <div className="fixed bottom-0 left-0 w-full h-[10vh] z-10" />

      <Head lang={`Colours of Tango - ${lang}`} />
    </div>
  );
};

export default Concerts;
