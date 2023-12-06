import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";

//COMPONENTS
import AboutColoursContent from "../components/AboutColoursContent";
import AboutAnetaContent from "../components/AboutAnetaContent";
import AboutKonradContent from "../components/AboutKonradContent";
import AboutOscarContent from "../components/AboutOscarContent";
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

const About = () => {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);


  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language] = useRecoilState(languageState);
  const [showMoreDuo, setShowMoreDuo] = useState(false);
  const [showMoreAneta, setShowMoreAneta] = useState(false);
  const [showMoreKonrad, setShowMoreKonrad] = useState(false);
  const [showMoreOscar, setShowMoreOscar] = useState(false);

  const lang = language === "PL" ? lang_EN : lang_PL;

  const handleShowMore = (name) => {
    switch (name) {
      case "duo":
        setShowMoreDuo((prev) => !prev);
        break;
      case "aneta":
        setShowMoreAneta((prev) => !prev);
        break;
      case "konrad":
        setShowMoreKonrad((prev) => !prev);
        break;
      case "oscar":
        setShowMoreOscar((prev) => !prev);
        break;
      default:
        console.log("Opps");
    }
  };

  return (
    <div className="w-full relative page">
      <Loader />

      {/* BACKGROUND  */}
      <div className="fixed overflow-hidden top-0 right-0 w-full">
        <StaticImage
          src="../assets/pictures/6296.jpg"
          alt="main room"
          className="fixed w-full h-screen -z-[2]"
          // objectPosition={`${isAboveMediumScreens ? "0% bottom" : "47% 0%"}`}
        />

        <motion.div
          className="fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.8, duration: 1.2 }}
        ></motion.div>
      </div>

      {/* CONTENT */}
      <section className="absolute left-1/2 -translate-x-1/2 w-full md:max-w-6xl py-20 lg:py-32 px-10 mt-[55vh] z-[5]">
        <h1 className="text-3xl lg:text-4xl font-bold mb-12">
          {lang.about_title}
        </h1>
        <p>{lang.about_description_paragraph1}</p>
        {isAboveMediumScreens ? (
          <AboutColoursContent lang={lang} />
        ) : (
          showMoreDuo && <AboutColoursContent lang={lang} />
        )}
        {!isAboveMediumScreens && (
          <button className="mt-5" onClick={() => handleShowMore("duo")}>
            {showMoreDuo ? lang.about_less : lang.about_more}
          </button>
        )}

        {/* Oscar */}
        <div className="mt-20 lg:mt-40">
          <div className="flex flex-col md:flex-row items-end w-full gap-5">
            <StaticImage
              src="../assets/pictures/6513.jpg"
              alt="main room"
              className="w-full md:w-1/2 brightness-110"
            />
            <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-left">
              {lang.about_oscar_name}
            </h1>
          </div>
          <p className="mt-10 lg:mt-10">{lang.about_oscar_paragraph1}</p>
          {isAboveMediumScreens ? (
            <AboutOscarContent lang={lang} />
          ) : (
            showMoreOscar && <AboutOscarContent lang={lang} />
          )}
          {!isAboveMediumScreens && (
            <button className="mt-5" onClick={() => handleShowMore("oscar")}>
              {showMoreOscar ? lang.about_less : lang.about_more}
            </button>
          )}
        </div>

        {/* Aneta */}
        <div className="mt-20 lg:mt-40">
          <div className="flex flex-col md:flex-row items-end w-full gap-5">
            <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-right">
              {lang.about_aneta_name}
            </h1>
            <StaticImage
              src="../assets/pictures/6326.jpg"
              alt="main room"
              className="w-full md:w-1/2 brightness-110"
            />
          </div>
          <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph1}</p>
          {isAboveMediumScreens ? (
            <AboutAnetaContent lang={lang} />
          ) : (
            showMoreAneta && <AboutAnetaContent lang={lang} />
          )}
          {!isAboveMediumScreens && (
            <button className="mt-5" onClick={() => handleShowMore("aneta")}>
              {showMoreAneta ? lang.about_less : lang.about_more}
            </button>
          )}
        </div>

        {/* Konrad */}
        <div className="my-20 lg:my-40">
          <div className="flex flex-col md:flex-row items-end w-full gap-5">
            {!isAboveMediumScreens && (
              <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-left">
                {lang.about_konrad_name}
              </h1>
            )}
            <StaticImage
              src="../assets/pictures/6437.jpg"
              alt="main room"
              className="w-full md:w-1/2"
            />
            {isAboveMediumScreens && (
              <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-left">
                {lang.about_konrad_name}
              </h1>
            )}
          </div>
          <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph1}</p>
          {isAboveMediumScreens ? (
            <AboutKonradContent lang={lang} />
          ) : (
            showMoreKonrad && <AboutKonradContent lang={lang} />
          )}
          {!isAboveMediumScreens && (
            <button className="mt-5" onClick={() => handleShowMore("konrad")}>
              {showMoreKonrad ? lang.about_less : lang.about_more}
            </button>
          )}
        </div>
      </section>
      <div className=" fixed left-0 top-0 w-full h-[20vh] bg-gradient-to-b from-black z-10"></div>
      <div className=" fixed left-0 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black z-10"></div>
      <Head title="Colours of Tango - About" />
    </div>
  );
};

export default About;
