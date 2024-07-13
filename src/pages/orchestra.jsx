import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import Head from "../components/Head";
import { Link } from "gatsby";
// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

// DATA
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";
import VideoWindowOrchestra from "../components/VideoWindowOrchestra";
import VideoModalOrchestra from "../components/VideoModalOrchestra";

const Orchestra = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language] = useRecoilState(languageState);
  const lang = language === "PL" ? lang_EN : lang_PL;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  //Title Animation
  const cot_orchestra_en = [
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

  const orchestra = "& Orchestra";

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
    <div
      className={`page h-screen relative ${showModal && "overflow-hidden "}`}
    >
      <Loader />
      <div>
        (
        <motion.div
          className="pages fixed left-0 top-0 w-full h-screen bg-darker-gradient-bg z-[5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
        ></motion.div>
        )
        {isAboveMediumScreens ? (
          <StaticImage
            src="../assets/images/orchester.jpg"
            alt="background shop page colours of tango"
            className="fixed top-0 left-0 h-screen"
            objectPosition="63% 80%"
            objectFit="cover"
          />
        ) : (
          <StaticImage
            src="../assets/images/orchester_mobile.jpg"
            alt="background shop page colours of tango"
            className="fixed top-0 left-0 h-screen"
            objectPosition="63% 80%"
            objectFit="cover"
          />
        )}
      </div>
      {/* CONTENT */}
      <section className="w-full sm:max-w-[70vw] flex flex-col mx-auto px-5 lg:px-10 py-20">
        <motion.div
          className="flex justify-end text-4xl md:text-6xl font-bold z-[7] mt-[35vh] sm:mt-[40vh] mb-5 md:mb-10"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {cot_orchestra_en.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        {/* <motion.div
          className="flex justify-end text-xs md:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {orchestra}
        </motion.div> */}
        <div className="flex justify-end text-xs md:text-xl opacity-100">{orchestra}</div>
        <VideoWindowOrchestra setShowModal={setShowModal} item={item} />

        {showModal && <VideoModalOrchestra setShowModal={setShowModal} />}
      </section>

      <Head title="Colours of Tango & Orchester" />
    </div>
  );
};

export default Orchestra;
