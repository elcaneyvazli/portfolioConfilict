import React from "react";
import "./blogcard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  blogsData from "./blogsdata";

const blogcard = () => {
  return (
    <>
      {blogsData.map((blog) => (
        <div key={blog.id} className="flex flex-col items-start gap-[1rem] bg-grey rounded-[2rem]">
          <div className="overflow-hidden rounded-t-[1.5rem] w-[100%] h-[25rem]">
            <img
              src={blog.img}
              draggable="false"
              className="w-[100%] h-[100%] object-cover rounded-t-[1.5rem] hover:scale-125 transition duration-500 ease-in-out"
              alt=""
            />
          </div>
          <div className="p-[1.5rem] flex flex-col justify-between gap-[1rem]">
            <div className="flex flex-row gap-[1rem]">
              {blog.category.map((blogcat) => (
                <div className="bg-[#00000099] py-[1.2rem] px-[2rem] rounded-[1rem]">
                <p className="text-white text-[1.4rem] hover-underline-animation">
                  {blogcat}
                </p>
              </div>
              ))}
            </div>
            <div>
              <h1 className="text-primary text-[2.5rem] font-extrabold">
                {blog.title}
              </h1>
              <p className="text-white text-[1.6rem] font-normal flex-1">
                {blog.text1}
              </p>
            </div>
            <div className="flex flex-row items-center gap-[1rem]">
              <div className="w-[5rem] h-[.1rem] bg-primary"></div>
              <Link to={`/blogtext/${blog.id}`} className="">
                <p className="text-white text-[1.8rem] font-bold hover-underline-animation">
                  Read More
                </p>
              </Link>
              <AiOutlineArrowRight className="text-white w-[1.5rem] h-[1.5rem]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default blogcard;
