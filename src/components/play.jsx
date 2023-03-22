import React, { useState, useRef, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import ReactHowler from "react-howler";

const Play = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };

  // const audioRef = useRef(null);

  // useEffect(() => {
  //   if (play) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [play]);

  return (
    <div className="p-[2rem] fixed bottom-[2rem] right-[2rem] bg-grey rounded-[50%]">
      {play && (
        <ReactHowler
          src="music/syml.mp3"
          playing={true}
          loop={true}
          // ref={(ref) => (this.player = ref)}
        />
      )}

      {play ? (
        <BsPauseFill className="text-white text-[3rem] cursor-pointer" onClick={handlePlay}/>
      ) : (
        <BsFillPlayFill className="text-white text-[3rem] cursor-pointer" onClick={handlePlay}/>
      )}
    </div>
  );
};

export default Play;
