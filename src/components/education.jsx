import React from "react";
import "./education.css";

function education(data){
  const eds = data.data;
  return (
    <div className="">
      {eds.map((ed) => (
        <div className="relative flex flex-col p-[3rem] gap-5 border-l-2 border-primary education mb-[1.2rem]" key={ed.id}>
          <p className="text-white text-[1.8rem]">{ed.year}</p>
          <h1 className="font-bold text-white text-[2rem]">
            {ed.jobName}
          </h1>
          <p className="text-white text-[1.6rem]">
            {ed.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default education;
