import React from "react";
import {
  AiOutlineClose,
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BsPersonPlus, BsCodeSlash } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { useQuery } from "react-query";
import Button from "../components/button";
import { getById } from "../services/services";

const modal = ({ setModal, port}) => {
  const { data: portfolioData } = useQuery(
    ["portfolio"],
    () => getById("portfolio", port[0])
  );

  return (
    portfolioData && (
      <>
        {port.map((por) => (
          <div
            key={por.id}
            className="absolute h-screen w-screen top-0 right-0 bottom-0 after:content-[''] after:absolute after:w-screen after:h-screen after:top-0 after:right-0 after:bg-grey after:opacity-[60%] flex justify-end items-end mr-[0rem]"
          >
            <div className="relative flex flex-col z-50 items-start p-[5rem] w-[30rem] sm:w-[50rem] md:w-[70rem] h-screen bg-grey">
              <img
                src={"https://localhost:7204/" + portfolioData.imagePath}
                draggable="false"
                className="w-full h-[10rem] sm:h-[20rem] md:h-[30rem] object-cover rounded-[1rem]"
                alt=""
              />
              <div className="flex flex-col items-start gap-[3rem]">
                <h1 className="text-primary text-[2.5rem] md:text-[4rem] font-extrabold">
                  {portfolioData.name}
                </h1>
                <div className="flex flex-col items-start gap-[1rem]">
                  <div className="flex items-center gap-[1rem]">
                    <AiOutlineFundProjectionScreen className="w-[2rem] h-[2rem] text-white" />
                    <p className="text-white text-[1.5rem] font-medium">
                      Proje Type:{" "}
                      <span className="font-normal">{portfolioData.type}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <BsPersonPlus className="w-[2rem] h-[2rem] text-white" />
                    <p className="text-white text-[1.5rem] font-medium">
                      Client:{" "}
                      <span className="font-normal">
                        {portfolioData.client}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <AiOutlineFieldTime className="w-[2rem] h-[2rem] text-white" />
                    <p className="text-white text-[1.5rem] font-medium">
                      Duration:{" "}
                      <span className="font-normal">
                        {portfolioData.duration}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <BsCodeSlash className="w-[2rem] h-[2rem] text-white" />
                    <p className="text-white text-[1.5rem] font-medium">
                      Technologies:{" "}
                      <span className="font-normal">
                        {portfolioData.technologies}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <GiMoneyStack className="w-[2rem] h-[2rem] text-white" />
                    <p className="text-white text-[1.5rem] font-medium">
                      Budget:{" "}
                      <span className="font-normal">
                        {portfolioData.budget}
                      </span>
                    </p>
                  </div>
                  <Button text="PREVIEW" link={portfolioData.siteLink} />
                </div>
              </div>
              <div className="absolute top-0 right-0 p-[2rem]">
                <AiOutlineClose
                  onClick={() => setModal(false)}
                  className="text-white w-[3rem] h-[3rem]"
                />
              </div>
            </div>
          </div>
        ))}
      </>
    )
  );
};

export default modal;
