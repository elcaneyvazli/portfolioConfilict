import React from "react";
import "./education.css";

const education = () => {
  const eds = [
    {
      id: 1,
      title: "Baku Engineering University",
      jobs: "Information Security",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
      time: "2022 - 2023",
    },
    {
      id: 2,
      title: "Baku Engineering University",
      jobs: "Information Security",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
      time: "2022 - 2023",
    },
  ];

  return (
    <div className="">
      {eds.map((ed) => (
        <div className="relative flex flex-col p-[3rem] gap-5 border-l-2 border-primary education mb-[1.2rem]" key={ed.id}>
          <p className="text-white text-[1.8rem]">{ed.time}</p>
          <h1 className="font-bold text-white text-[2rem]">
            {ed.title} - {ed.jobs}
          </h1>
          <p className="text-white text-[1.6rem]">
            {ed.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default education;
