import React from "react";
import Experience from "../components/experience";
import Education from "../components/education";
import Progress from "../components/progress";
import { motion } from "framer-motion";

const about = () => {
  const cols1 = [
    {
      id: 1,
      title: "First Name",
      text: "Elcan",
    },
    {
      id: 2,
      title: "Last Name",
      text: "Eyvazlı",
    },
    {
      id: 3,
      title: "Birthdate",
      text: "29.05.2003",
    },
    {
      id: 4,
      title: "Nationality",
      text: "Azerbaijan",
    },
    {
      id: 5,
      title: "Experience",
      text: "1 Year",
    },
    {
      id: 6,
      title: "Address",
      text: "Sumqayit",
    },
  ];
  const cols2 = [
    {
      id: 1,
      title: "Freelance",
      text: "Available",
    },
    {
      id: 2,
      title: "Languages",
      text: "English",
    },
    {
      id: 3,
      title: "Phone",
      text: "+994513910242",
    },
    {
      id: 4,
      title: "Email",
      text: "elcaneyvazli77@gmail.com",
    },
    {
      id: 5,
      title: "Degree",
      text: "Bachelor",
    },
    {
      id: 6,
      title: "Github",
      text: "elcaneyvazli007",
    },
  ];

  return (
    <motion.div className="bg-black mb-[5rem]">
        <div className="container mx-auto">
          <h1 className="text-[4rem] md:text-[6rem] text-white font-black text-center mt-[8rem] md:mt-[0rem]">
            About <span className="text-primary"> Me </span>{" "}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.img
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
              src="img/2.jpg"
              draggable="false"
              alt=""
              className="cursor-pointer rounded-full border-4 border-primary w-[30rem] md:w-[44rem] h-[30rem] md:h-[44rem] object-cover"
            />
            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row items-start md:items-center justify-center gap-5">
                <div className="flex flex-col pr-[0rem] md:pr-[10rem] gap-5">
                  {cols1.map((col1) => (
                    <p
                      className="text-[1.6rem] text-white font-normal"
                      key={col1.id}
                    >
                      {col1.title}:{" "}
                      <span className="font-bold"> {col1.text}</span>
                    </p>
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {cols2.map((col2) => (
                    <p
                      className="text-[1.6rem] text-white font-normal"
                      key={col2.id}
                    >
                      {col2.title}:{" "}
                      <span className="font-bold"> {col2.text}</span>
                    </p>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="text-center text-[2rem] text-white p-[1rem] border-2 border-primary hover:bg-primary rounded-[3rem] md:w-[50%] w-[100%]"
              >
                Dowload My CV
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[5rem]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-[3rem] md:gap-0">
              <div className="flex flex-col items-start flex-1 gap-10">
                <h1 className="text-[2.5rem] font-bold text-primary text-center">
                  Education
                </h1>
                <div>
                  <Education />
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 gap-10">
                <h1 className="text-[2.5rem] font-bold text-primary text-center">
                  Experience
                </h1>
                <div>
                  <Experience />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-[3rem]">
          <div className="flex flex-col items-start gap-10">
            <h1 className="text-[3rem] text-white font-bold">Skills</h1>
            <div className="flex md:flex-row flex-col flex-wrap items-start gap-[3rem]">
              <Progress />
            </div>
          </div>
        </div>{" "}
    </motion.div>
  );
};

export default about;
