import React from "react";
import { useQuery } from "react-query";
import Modal from "../components/modal";
import { getList, getByIdImage } from "../services/services";

const Portfolio = () => {
  const [modal, setModal] = React.useState(false);

  const [port, setPort] = React.useState({});
  const changeContext = (portdata) => {
    setPort([portdata]);
  };
  const { data: portfolioData} = useQuery(
    ["portfolios"],
    () => getList("portfolio"),
    {
      refetchOnWindowFocus: false,
      staleTime: "0",
    }
  );
  portfolioData && console.log(portfolioData);

  return (
    portfolioData && (
      <div className="bg-black container mx-auto mb-[5rem]">
        <div className="flex flex-col gap-[3rem]">
          <div>
            <h1 className="sm:text-[6rem] text-[4rem] text-center text-white font-black sm:mt-[0] mt-[10rem]">
              My <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-[2rem] text-center text-white font-extralight">
              A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL
              ME
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            {portfolioData.portfolios.map((portdata) => (
              <img
                src={"https://localhost:7204/" + portdata.imagePath}
                key={portdata.id}
                onClick={() => {
                  setModal(!modal);
                  setPort(portdata)
                  changeContext(portdata.id);
                }}
                draggable="false"
                alt=""
                className="w-full h-[30rem] object-cover rounded-[1rem]"
              />
            ))}
            {modal && <Modal setModal={setModal} port={port} />}
          </div>
        </div>
      </div>
    )
  );
};

export default Portfolio;
