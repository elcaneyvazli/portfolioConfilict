import React, { useEffect, useState } from "react";
import "./home.css";
import Typical from "react-typical";
import Buttonlink from "../components/buttonlink";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getList, getById } from "../services/services";
import axios from "axios";

function home() {
  const { data: userAbout } = useQuery(
    ["userAbouts"],
    () => getById("userAbout", 3),
    {
      refetchOnWindowFocus: false,
      staleTime: "0",
    }
  );
  userAbout && console.log(userAbout);

  return (
    userAbout && (
      <motion.div className="home h-screen w-screen flex items-center">
        <div className="container w-[100%] mx-auto">
          <div className="flex md:flex-row flex-col items-center justify-between gap-[10rem]">
            <motion.img
              initial={{ x: 0, y: 0 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
              dragElastic={0.5}
              whileTap={{ scale: 0.9 }}
              dragMomentum={true}
              src={`https://localhost:7204/${userAbout.imagePath}`}
              draggable="false"
              alt=""
              className="cursor-pointer md:w-[40rem] md:h-[40rem] h-[30rem] w-[30rem] rounded-full object-cover border-4 border-primary"
            />

            <div className="flex-1">
              <div className="flex items-center">
                <div className="w-[7rem] h-[.1rem] bg-primary mx-[1rem]"></div>
                <h1 className="text-[4rem] text-white mr-[1rem] font-bold">
                  Hi, There
                </h1>
                <img
                  src="img/hand.svg"
                  draggable="false"
                  alt=""
                  className="w-[5rem] h-[5rem]"
                />
              </div>
              <h1 className="text-white md:text-[4rem] text-[2rem] flex">
                I'm
                <Typical
                  steps={["Elcan Eyvazli", 5000, "Backend Dev", 3000]}
                  loop={Infinity}
                  wrapper="p"
                  className="md:text-[4rem] text-[2rem] text-primary ml-[1rem] font-bold"
                />
              </h1>
              <p className="md:text-[2rem] text-[1.2rem] text-white font-thin">
                {userAbout.description}
              </p>
              <div className="flex items-center gap-10 pt-[3rem]">
                <Buttonlink text="More About Me" link="/about" />
                <Buttonlink text="Portfolio" link="/portfolio" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
}

export default home;
