import React from "react";
import "./progress.css";

const progress = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      percent: "95%",
    },
    {
      id: 2,
      title: "CSS",
      percent: "90%",
    },
    {
      id: 3,
      title: "JavaScript",
      percent: "80%",
    },
    {
      id: 4,
      title: "ReactJs",
      percent: "65%",
    },
    {
      id: 5,
      title: "NodeJs",
      percent: "35%",
    },
  ];

  return (
    <>
      {skills.map((skill) => (
          <div className="skill-box" key={skill.id}>
            <span className="title text-[1.8rem] font-bold text-white">
              {skill.title}
            </span>
            <div className="skill-bar bg-grey h-[.8rem] w-[35rem] rounded-[3rem]">
              <span
                style={{ width: skill.percent }}
                className={`skill-per relative h-full rounded-[3rem] bg-primary block`}
              >
                <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem] ">
                  {skill.percent}
                </span>
              </span>
            </div>
          </div>
      ))}
    </>
  );
};

export default progress;
