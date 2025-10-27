import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";
import { isIOS } from "react-device-detect";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";
import Head from "../components/Head";
import Loader from "../components/Loader";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import { Link } from "gatsby";

//DATA
import video from "../assets/movie/bg.mp4";
import video_mobile from "../assets/movie/bg_mobile.mp4";

const IndexPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [language] = useRecoilState(languageState);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  //Titles Animation
  const milonga = [
    "C",
    "o",
    "l",
    "o",
    "u",
    "r",
    "s",
    "\u00A0 ",
    "o",
    "f",
    "\u00A0 ",
    "T",
    "a",
    "n",
    "g",
    "o",
  ];

  const harp_en = `Aneta Salwińska - harp`;
  const harp_pl = `Aneta Salwińska - harfa`;
  const accordion_en = `Konrad Salwiński - accordion`;
  const accordion_pl = `Konrad Salwiński - akordeon`;
  const vocal_en = `Oscar Ernesto Ovejero - vocal`;
  const vocal_pl = `Oscar Ernesto Ovejero - wokal`;

  const harp = language === "PL" ? harp_en : harp_pl;
  const accordion = language === "PL" ? accordion_en : accordion_pl;
  const vocal = language === "PL" ? vocal_en : vocal_pl;
  const contactUs = language === "PL" ? "Buy tickets" : "Kup bilety";

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
    <div className="pages relative h-screen overflow-hidden">
      <Loader />
      <div className="fixed overflow-hidden top-0 right-0 h-screen w-auto z-0">
        <video
          src={isAboveMediumScreens ? video : video_mobile}
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        ></video>
      </div>
      <motion.div
        className="fixed top-0 right-0 h-screen w-full bg-black z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-layout"></div>
      <div
        className={`absolute flex flex-col justify-end text-white left-1/2 -translate-x-1/2 md:left-[70%] ${
          isIOS ? "bottom-[20vh]" : "bottom-[24vh]"
        } md:top-[60vh] text-2xl md:text-3xl font-medium md:font-bold z-[7]`}
      >
        <motion.div
          className="flex text-2xl lg:text-4xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {milonga.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex text-xs md:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {vocal}
        </motion.div>
        <motion.div
          className="flex text-xs md:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {harp}
        </motion.div>

        <motion.div
          className="flex text-xs md:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          {accordion}
        </motion.div>
        <motion.button
          className="w-28 md:w-40 border-[1px] border-white rounded-full font-semibold text-xs md:text-sm h-8 py-2 md:h-20 mt-3 hover:border-[#d50006] hover:bg-[#d50006] transition duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <Link to="/concerts">{contactUs}</Link>
        </motion.button>
      </div>

      <Head title="Colours of Tango - Home" />
    </div>
  );
};

export default IndexPage;
