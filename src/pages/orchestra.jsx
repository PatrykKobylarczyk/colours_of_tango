  import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Loader from "../components/Loader";
import { AnimatePresence, motion } from "framer-motion";
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

const Orchestra = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language] = useRecoilState(languageState);
  const lang = language === "PL" ? lang_EN : lang_PL;

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
    <div className="page pages relative h-screen flex flex-col justify-center overflow-hidden">
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
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center lg:gap-10 z-10">
        <AnimatePresence>
          <motion.div
            className="w-2/3 md:w-2/5  flex md:flex-row flex-col"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={container}
          ></motion.div>
        </AnimatePresence>
      </div>

      <Head title="Colours of Tango - Buy a CD" />
    </div>
  );
};

export default Orchestra;
