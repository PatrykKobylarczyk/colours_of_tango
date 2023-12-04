import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Logo = ({ color }) => {
  return (
    <Link to="/">
      <StaticImage
            src="../assets/logo/tango_logo.png"
            alt="main room"
            className=" w-[150px]"
          />
    </Link>
  );
};

export default Logo;
