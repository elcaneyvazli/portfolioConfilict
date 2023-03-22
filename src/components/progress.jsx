import React from "react";
import "./progress.css";

const progress = (data) => {
  const skills = data.data;
  console.log(skills)
  return (
    <>
      {skills.map((skill) => (
          <div className="skill-box" key={skill.id}>
            <span className="title text-[1.8rem] font-bold text-white">
              {skill.name.toUpperCase()}
            </span>
            <div className="skill-bar bg-grey h-[.8rem] w-[35rem] rounded-[3rem]">
              <span
                style={{ width: skill.value + '%' }}
                className={`skill-per relative h-full rounded-[3rem] bg-primary block`}
              >
                <span className="tooltip absolute right-[-2.5rem] top-[-4rem] text-[1.6rem] text-white rounded-[.8rem] bg-primary z-1 px-[.6rem] py-[.2rem] ">
                  {skill.value}
                </span>
              </span>
            </div>
          </div>
      ))}
    </>
  );
};

export default progress;
