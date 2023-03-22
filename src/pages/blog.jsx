import React from "react";
import Blogcard from "../components/blogcard";

const blog = () => {

  return (
    <div className="container mx-auto mb-[5rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[4rem] md:text-[6rem] mt-[10rem] md:mt-[0rem] text-center font-black text-white">
            My <span className="text-primary">Blog Post</span>
          </h1>
          <p className="text-[1.6rem] md:text-[2rem] text-white font-normal text-center">
            TIPS, INSIGHTS, AND BEST PRACTICES ABOUT WEB DESIGN AND DEVELOPPMENT
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            <Blogcard />
          </div>
        </div>
    </div>
  );
};

export default blog;
