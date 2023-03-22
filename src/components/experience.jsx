import React from "react";
import "./experience.css";

const experience = () => {
  const exs = [
    {
      id: 1,
      title: "Frontend Developer",
      jobs: "Envanto",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
      time: "2022 - 2023",
    },
    {
      id: 2,
      title: "Frontend Developer",
      jobs: "Envanto",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
      time: "2022 - 2023",
    },
    {
      id: 3,
      title: "Frontend Developer",
      jobs: "Envanto",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
      time: "2022 - 2023",
    },
  ];

  return (
    <div className="">
      {exs.map((ex) => (
        <div className="relative flex flex-col p-[3rem] gap-5 border-l-2 border-primary experience mb-[1.2rem]" key={ex.id}>
          <p className="text-white text-[1.8rem]">{ex.time}</p>
          <h1 className="font-bold text-white text-[2rem]">
            {ex.title} - {ex.jobs}
          </h1>
          <p className="text-white text-[1.6rem]">
            {ex.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default experience;
