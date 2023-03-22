import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsFillTelephoneFill,
  BsNewspaper,
} from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { motion } from "framer-motion";

const Menu = () => {
  const [toogle, setToogle] = useState(false);
  const closemenu = () => {
    setToogle(false);
  };
  return (
    <motion.div
      className={`absolute top-[2rem] left-[2rem] z-100 bg-grey rounded-full ${
        toogle ? "p-[1rem] pt-[2rem]" : "p-[2rem]"
      } transition ease-in-out delay-150 `}
    >
      <div className="flex flex-col items-center">
        <motion.img
          initial={{ x: 0, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1 }}
          onClick={() => setToogle(!toogle)}
          src={toogle ? "/img/close.svg" : "/img/menu.svg"}
          alt=""
          className="w-[3rem] h-[3rem]"
        />
      </div>
      {toogle && (
        <motion.div
          className="flex flex-col items-center gap-[2rem] py-[3rem]"
        >
          <Link
            to="/"
            onClick={closemenu}
            className="flex flex-col items-center justify-between"
          >
            <AiFillHome className="text-white w-[2rem] h-[2rem]" />
            <p className="text-white text-[1.4rem]">Home</p>
          </Link>

          <Link
            to="/about"
            onClick={closemenu}
            className="flex flex-col items-center justify-between"
          >
            <BsFillPersonLinesFill className="text-white w-[2rem] h-[2rem]" />
            <p className="text-white text-[1.4rem]">About</p>
          </Link>

          <Link
            to="/portfolio"
            onClick={closemenu}
            className="flex flex-col items-center justify-between"
          >
            <MdOutlineWork className="text-white w-[2rem] h-[2rem]" />
            <p className="text-white text-[1.4rem]">Portfolio</p>
          </Link>

          <Link
            to="/contact"
            onClick={closemenu}
            className="flex flex-col items-center justify-between"
          >
            <BsFillTelephoneFill className="text-white w-[2rem] h-[2rem]" />
            <p className="text-white text-[1.4rem]">Contact</p>
          </Link>

          <Link
            to="/blog"
            onClick={closemenu}
            className="flex flex-col items-center justify-between"
          >
            <BsNewspaper className="text-white w-[2rem] h-[2rem]" />
            <p className="text-white text-[1.4rem]">Blog</p>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Menu;
