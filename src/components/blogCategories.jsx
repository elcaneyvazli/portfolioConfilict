import React from "react";

function blogCategories(data) {
  let arr = data.data.categories.split(",");
  return arr.map((blogcat, index) => {
    return (
      <div
        key={index}
        className="bg-[#00000099] py-[1.2rem] px-[2rem] rounded-[1rem]"
      >
        <p className="text-white text-[1.4rem] hover-underline-animation">
          {blogcat}
        </p>
      </div>
    );
  });
}

export default blogCategories;
