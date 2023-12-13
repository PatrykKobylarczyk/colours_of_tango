import React, { useEffect, useState, useRef } from "react";

// LIBS
import { AnimatePresence, motion } from "framer-motion";
import AudioSpectrum from "react-audio-spectrum";
import { isSafari, isIOS } from "react-device-detect";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// COMPONENTS
import Button from "./Button";
import MusicButtonAudioSpectrum from "./MusicButtonAudioSpectrum";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

// STATE
import { useRecoilState } from "recoil";
import {
  currentSongState,
  currentSongIndex,
  musicInFooter,
  musicInPlayer,
} from "../atoms/atom";

// DATA
import { musicData } from "../data/musicData";
import AudioSpectrumAnimation from "./AudioSpectrumAnimationForIOS/AudioSpectrumAnimation";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentSongIndex);
  const [currentSong, setCurrentSong] = useRecoilState(currentSongState);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1368px)");
  const [audioProgress, setAudioProgress] = useState(0);
  const [isMusicInFooter, setIsMusicInFooter] = useRecoilState(musicInFooter);
  const [IsMusicInPlayer, setIsMusicInPlayer] = useRecoilState(musicInPlayer);

  //PLAY AND PAUSE MUSIC
  useEffect(() => {
    audioRef.current.load();
    if (IsMusicInPlayer) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [IsMusicInPlayer, currentIndex]);

  const handlePlayMusic = () => {
    setIsMusicInPlayer((prev) => !prev);
    setIsMusicInFooter(false);
  };

  const setSongFromList = (song, index) => {
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  const nextSong = () => {
    if (currentIndex + 1 < musicData.length) {
      setCurrentIndex(currentIndex + 1);
      setCurrentSong(musicData[currentIndex + 1]);
    }
  };

  const prevSong = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentSong(musicData[currentIndex - 1]);
    }
  };

  // CONTROL TIME FOR PROGRESS BAR
  const handleAudioUpdate = () => {
    const progress = parseInt(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    audioRef.current.currentTime =
      (e.target.value * audioRef.current.duration) / 100;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="w-[280px] h-auto md:w-[800px] z-[6] flex flex-col md:flex-row md:gap-1"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="relative flex flex-col w-full bg-black/80  md:pt-5 lg:pt-10 px-3 rounded-md">
          {/* SONG TITLE */}
          <h1 className="absolute top-0 left-0 w-full h-full grid place-items-center text-2xl xl:text-4xl font-black -translate-y-5 xl:translate-y-0">
            {musicData[currentIndex].title}
          </h1>

          {/* AUDIO AND AUDIOSPECTRUM */}
          <div className="w-full h-auto grid place-items-center">
            <audio
              ref={audioRef}
              id="audio-element"
              src={currentSong.music}
              onTimeUpdate={handleAudioUpdate}
              onEnded={nextSong}
            />
            {/* {!(isIOS || isSafari) ? (
              <AudioSpectrum
                id="audio-canvas"
                height={isAboveLargeScreens ? 200 : 110}
                width={isAboveMediumScreens ? 320 : 200}
                audioId={"audio-element"}
                capColor={"#af2723"}
                capHeight={2}
                meterWidth={2}
                meterCount={512}
                meterColor={[
                  { stop: 0, color: "#f00" },
                  { stop: 0.6, color: "#0e879c" },
                  { stop: 1, color: "red" },
                ]}
                gap={4}
              />
            ) : ( */}
            <AudioSpectrumAnimation IsMusicInPlayer={IsMusicInPlayer} />
            {/* )} */}
          </div>

          {/* CONTROL PANEL */}
          <div className="grid place-items-center z-10">
            <div className="flex gap-5 py-5 xl:py-8 items-center">
              <button className="button w-10 h-10 " onClick={prevSong}>
                <RxTrackPrevious size={"12px"} />
              </button>

              <Button
                handleClick={handlePlayMusic}
                content={
                  <MusicButtonAudioSpectrum
                    IsMusicInPlayer={IsMusicInPlayer}
                    isMusicInFooter={isMusicInFooter}
                    styles={"text-xs"}
                  />
                }
              />
              <button className="button w-10 h-10 " onClick={nextSong}>
                <RxTrackNext size={"12px"} />
              </button>
            </div>
          </div>

          {/* PROGRESSBAR */}
          <input
            type="range"
            value={audioProgress}
            className=" w-full z-10"
            onChange={handleMusicProgressBar}
          />
        </div>

        {/* SONG LIST */}
        <motion.ul
          className="w-full h-auto flex flex-col gap-1 xl:gap-3 mt-1 md:mt-0 "
          initial={{}}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 1,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {musicData.map((song, index) => (
            <motion.li
              className={`flex items-center h-full w-full bg-black/80 px-4 md:px-8 py-3 sm:py-2 xl:py-5 text-xs xl:text-base rounded-md cursor-pointer border-[1px] ${
                currentSong === song
                  ? "border-[#af2622]/60 "
                  : "border-black/80"
              }`}
              key={song.title}
              onClick={() => setSongFromList(song, index)}
            >
              {song.title} - {song.author}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default MusicPlayer;
