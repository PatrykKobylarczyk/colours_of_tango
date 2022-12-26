import React, { useState } from "react";
import { Link } from "gatsby";

// LIBS
import { motion, AnimatePresence } from "framer-motion";
import { Squeeze as Hamburger } from "hamburger-react";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// COMPONENTS
import Logo from "./Logo";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

// DATA
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [language] = useRecoilState(languageState);

  const lang = language === "PL" ? lang_EN : lang_PL;

  const menuListAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const projectVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="relative">
      <header>
        <Logo color="white" />

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <motion.div
            className="hovered-link flex justify-between gap-16 font-opensans text-sm font-semibold text-white"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={menuListAnimation}
          >
            <motion.div
              transition={{ duration: 0.6, ease: [0.435, 0.135, 0.09, 0.83] }}
              variants={projectVariant}
            >
              <Link to="/">{lang.menu_home}</Link>
            </motion.div>
            <motion.div
              transition={{ duration: 0.6, ease: [0.435, 0.135, 0.09, 0.83] }}
              variants={projectVariant}
            >
              <Link to="/about">{lang.menu_about}</Link>
            </motion.div>
            <motion.div
              transition={{ duration: 0.6, ease: [0.435, 0.135, 0.09, 0.83] }}
              variants={projectVariant}
            >
              <Link to="/media">{lang.menu_media}</Link>
            </motion.div>
            <motion.div
              transition={{ duration: 0.6, ease: [0.435, 0.135, 0.09, 0.83] }}
              variants={projectVariant}
            >
              <Link to="/contact">{lang.menu_contact}</Link>
            </motion.div>
          </motion.div>
        ) : (
          <Hamburger
            toggled={isMenuToggled}
            toggle={() => setIsMenuToggled((prev) => !prev)}
            size={17}
            color="white"
          />
        )}
      </header>
      {/* MOBILE MENU POPUP */}
      <AnimatePresence>
        {!isAboveSmallScreens && isMenuToggled && (
          <motion.div
            className="fixed right-0 top-0 h-full bg-[#141414] text-white w-full z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            {/* MENU ITEMS */}
            <AnimatePresence>
              <motion.div
                className="hovered-link w-full h-full flex flex-col gap-6 items-center justify-center text-xl text-white"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                variants={menuListAnimation}
              >
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link to="/" onClick={() => setIsMenuToggled(false)}>
                    {lang.menu_home}
                  </Link>
                </motion.div>
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link to="/about" onClick={() => setIsMenuToggled(false)}>
                    {lang.menu_about}
                  </Link>
                </motion.div>
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link to="/media" onClick={() => setIsMenuToggled(false)}>{lang.menu_media}</Link>
                </motion.div>
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link to="/contact" onClick={() => setIsMenuToggled(false)}>{lang.menu_contact}</Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
