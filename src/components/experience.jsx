import React from "react";
import "./experience.css";

const experience = (data) => {
  const exs = data.data;
  return (
    <div className="">
      {exs.map((ex) => (
        <div className="relative flex flex-col p-[3rem] gap-5 border-l-2 border-primary experience mb-[1.2rem]" key={ex.id}>
          <p className="text-white text-[1.8rem]">{ex.year}</p>
          <h1 className="font-bold text-white text-[2rem]">
            {ex.jobName}
          </h1>
          <p className="text-white text-[1.6rem]">
            {ex.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default experience;
