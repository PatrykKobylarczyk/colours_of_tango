import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Loader from "../components/Loader";
import { AnimatePresence, motion } from "framer-motion";
import Head from "../components/Head";
import { Link } from "gatsby";
// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const Shop = () => {
  const [language] = useRecoilState(languageState);
  const contactUs = language === "PL" ? "Contact" : "Kontakt";

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
        <StaticImage
          src="../assets/pictures/6326.jpg"
          alt="background shop page colours of tango"
          className="fixed top-0 left-0 h-screen"
          objectPosition="63% 0"
          objectFit="cover"
        />
      </div>
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center lg:gap-10 z-10">
        <AnimatePresence>
          <motion.div
            className="w-2/3 md:w-2/5  flex md:flex-row flex-col"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <StaticImage
                src="../assets/pictures/cd.jpg"
                alt="cd colours of tango"
                className="w-full aspect-auto md:min-w-[400px] max-w-[400px]"
                objectPosition="63% 0"
                objectFit="contain"
              />
            </motion.div>
            <motion.div
              className="w-full sm:p-10 md:p-20 flex flex-col md:gap-2 mt-5 md:mt-0 justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <h2 className="w-full font-bold text-sm md:text-xl">
                Kup Naszą płytę
              </h2>
              <p className="w-full text-xs md:text-sm">
                W celu zakupienia płyty napisz do Nas.
              </p>
              <motion.button
                className="w-28 md:w-40 border-[1px] border-white rounded-full font-semibold text-xs md:text-sm h-8 py-2 md:h-12 mt-3 hover:border-[#d50006] hover:bg-[#d50006] transition duration-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <Link to="/contact">{contactUs}</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Head title="Colours of Tango - Buy a CD" />
    </div>
  );
};

export default Shop;
