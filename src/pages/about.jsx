import React from "react";
import Experience from "../components/experience";
import Education from "../components/education";
import Progress from "../components/progress";
import { motion } from "framer-motion";
import { getList } from "../services/services";
import { useQuery } from "react-query";
import education from "../components/education";
function about() {
  const { data: aboutData } = useQuery(["abouts"], () => getList("about"), {
    refetchOnWindowFocus: false,
    staleTime: "0",
  });
  //aboutData && console.log(aboutData.abouts);
  const index = aboutData && Math.ceil(aboutData.abouts.length / 2);
  const first = aboutData && aboutData.abouts.slice(0, index);
  const second = aboutData && aboutData.abouts.slice(index);

  const { data: historyData } = useQuery(
    ["histories"],
    () => getList("history"),
    {
      refetchOnWindowFocus: false,
      staleTime: "0",
    }
  );
  //historyData && console.log(historyData.histories);
  let educationHistory =
    historyData &&
    historyData.histories.filter((history) => history.type == false);
  let experienceHistory =
    historyData &&
    historyData.histories.filter((history) => history.type == true);

  const { data: skillData } = useQuery(["skills"], () => getList("skill"), {
    refetchOnWindowFocus: false,
    staleTime: "0",
  });
  skillData && console.log(skillData);
  return (
    first &&
    second &&
    educationHistory &&
    experienceHistory &&
    skillData && (
      <motion.div className="bg-black mb-[5rem]">
        {/* About */}
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
                  {first.map((col1) => (
                    <p
                      className="text-[1.6rem] text-white font-normal"
                      key={col1.id}
                    >
                      {col1.name}:{" "}
                      <span className="font-bold"> {col1.value}</span>
                    </p>
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {second.map((col2) => (
                    <p
                      className="text-[1.6rem] text-white font-normal"
                      key={col2.id}
                    >
                      {col2.name}:{" "}
                      <span className="font-bold"> {col2.value}</span>
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
        {/* History */}
        <div className="mt-[5rem]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-[3rem] md:gap-0">
              <div className="flex flex-col items-start flex-1 gap-10">
                <h1 className="text-[2.5rem] font-bold text-primary text-center">
                  Education
                </h1>
                <div>
                  <Education data={educationHistory} />
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 gap-10">
                <h1 className="text-[2.5rem] font-bold text-primary text-center">
                  Experience
                </h1>
                <div>
                  <Experience data={experienceHistory} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill */}
        <div className="container mx-auto py-[3rem]">
          <div className="flex flex-col items-start gap-10">
            <h1 className="text-[3rem] text-white font-bold">Skills</h1>
            <div className="flex md:flex-row flex-col flex-wrap items-start gap-[3rem]">
              <Progress data={skillData.skills} />
            </div>
          </div>
        </div>{" "}
      </motion.div>
    )
  );
}

export default about;
