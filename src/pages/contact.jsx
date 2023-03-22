import React from "react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Input from "../components/input";
import Slide from "react-reveal/Slide";

const contact = () => {
  return (
    <div className="container mx-auto mb-[5rem]">
        <div className="flex flex-col gap-[5rem]">
          <div>
            <h1 className="text-white text-[4rem] md:text-[6rem] mt-[10rem] md:mt-[0rem] font-black text-center">
              Get <span className="text-primary">In Touch</span>
            </h1>
            <p className="text-[2rem] text-center text-white font-extralight">
              I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-[5rem] md:gap-[10rem]">
            <div className="flex flex-col gap-[3rem]">
              <div className="flex flex-1 flex-col gap-[1rem]">
                <h1 className="text-white font-bold text-[2rem]">Phone</h1>
                <div className="flex flex-row items-center gap-[1rem]">
                  <BsWhatsapp className="text-[2rem] text-primary" />
                  <p className="text-white text-[1.6rem] font-light">
                    +994513910242
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[1rem]">
                <h1 className="text-white font-bold text-[2rem]">Email</h1>
                <div className="flex flex-row items-center gap-[1rem]">
                  <AiOutlineMail className="text-[2rem] text-primary" />
                  <p className="text-white text-[1.6rem] font-light">
                    elcaneyvazli77@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[1rem]">
                <h1 className="text-white font-bold text-[2rem]">Linkedin</h1>
                <div className="flex flex-row items-center gap-[1rem]">
                  <BsLinkedin className="text-[2rem] text-primary" />
                  <p className="text-white text-[1.6rem] font-light">
                    Elcan Eyvazli
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[1rem]">
                <h1 className="text-white font-bold text-[2rem]">Github</h1>
                <div className="flex flex-row items-center gap-[1rem]">
                  <BsGithub className="text-[2rem] text-primary" />
                  <p className="text-white text-[1.6rem] font-light">
                    elcaneyvazli007
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-[2rem]">
              <p className="text-[1.8rem] text-white font-light">
                If you have any suggestion, project or even you want to say
                Hello.. please fill out the form below and I will reply you
                shortly.
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-[3rem]">
                <Input label="Your Name" type="text" />
                <Input label="Your Email" type="email" />
              </div>
              <h1 className="text-white text-[2.5rem] font-bold">
                Your <span className="text-primary">Message</span> :
              </h1>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="md:w-[90%] h-[15rem] bg-grey outline-none rounded-[3rem] text-white p-[2rem] text-[1.6rem]"
              ></textarea>
              <button className="bg-primary text-white text-[2rem] font-bold py-[1rem] px-[6rem] rounded-[3rem]">
                Send Message
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default contact;
