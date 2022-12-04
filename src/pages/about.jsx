import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  console.log(isAboveMediumScreens);

  return (
    <Layout>
      <div className="page flex min-h-screen ">
        <div className="w-2/5 h-full py-32 px-10 w-3xl md:max-w-4xl ">
          <h1 className="text-3xl font-bold mb-8">Duo Milonga</h1>
          <p>
            Duet powstał w 2007 roku i od początku istnienia koncertował już w
            Polsce, Niemczech, Austrii, Francji, Wielkiej Brytanii, Belgii i
            Kanadzie. W 2007 roku Duo zdobyło Grand Prix II Ogólnopolskiego
            Konkursu Duetów z Harfą w Cieszynie, w 2009 roku I nagrodę na V
            Międzynarodowym Konkursie Akordeonowym w Moravskich Toplicach
            (Słowenia), a w 2011 roku było finalistą III Concurso Iberico w
            Madrycie (Hiszpania). Duo jest także laureatem I nagrody w World
            Music Competition w ramach III Międzynarodowego Festiwalu Harfowego
            w Walii w 2014 roku.
          </p>
          <p>
            Duo Milonga występowało podczas wielu międzynarodowych festiwali,
            między innymi w ramach:
            <br /> - Festiwalu Blaue Harfentage w Hochschule für Musik w
            Monachium,
            <br /> - Międzynarodowego Festiwalu The Edinburgh Festival Fringe,
            <br /> - Międzynarodowego Festiwalu Harfowego w Katowicach,
            <br /> - Międzynarodowego Festiwalu Młodych Laureatów Konkursów
            Muzycznych,
            <br /> - Tango Maratonu The Strawberry Edition,
            <br /> - Festiwalu Muzyka w klasztorze w Łagiewnikach,
            <br /> - Festiwalu Jeremiego Przybory - Stacja Kutno,
            <br /> - Sesji Musica Moderna w Akademii Muzycznej w Łodzi,
            <br />
            wielu festiwali muzyki kameralnej i tangowej.
          </p>
          <div className="absolute left-0 top-0 w-full h-full bg-red "></div>
        </div>
        <div className="fixed right-0 h-full w-3/5">
          <StaticImage
            src="../assets/images/Duo/13.jpg"
            alt="main room"
            className=" h-full"
            objectPosition={`${isAboveMediumScreens ? "0% 0%" : "39% 0%"}`}
          />
          {/* <div className="fixed right-0 h-full w-3/5 bg-red"></div> */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
