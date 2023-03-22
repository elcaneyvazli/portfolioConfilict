import React from "react";
import "./blogcard.css";
import { getList } from "../services/services";
import { useQuery } from "react-query";
import AllBlog from "./allBlog";

const blogcard = (data) => {
  let datas = data.data;
  return (
    data.data && (
      <>
        {datas?.map((blog) => (
          <AllBlog key={blog.id} data={blog} />
        ))}
      </>
    )
  );
};

export default blogcard;
