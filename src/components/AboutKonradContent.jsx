import React from "react";

const AboutKonradContent = ({ lang }) => {
  return (
    <>
      <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph2}</p>
      <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph3}</p>
      <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph4}</p>
      <p className="mt-10 lg:mt-10 font-bold">{lang.about_konrad_paragraph5}</p>
    </>
  );
};

export default AboutKonradContent;
