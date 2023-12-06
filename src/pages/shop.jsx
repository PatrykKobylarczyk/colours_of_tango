import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import Head from "../components/Head";

const shop = () => {
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
          alt="main room"
          className="fixed top-0 left-0 h-screen"
          objectPosition="63% 0"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center lg:gap-10 z-10">
        {" "}
      </div>

      <Head title="Colours of Tango - Buy a CD" />
    </div>
  );
};

export default shop;
