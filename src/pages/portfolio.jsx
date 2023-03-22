import React from "react";
import Modal from "../components/modal";

const Portfolio = () => {
  const [modal, setModal] = React.useState(false);
  const [port, setPort] = React.useState({});
  const changeContext = (portdata) => {
    setPort([portdata]);
  };

  const portdatas = [
    {
      id: 1,
      src: "img/portfolio.png",
      pname : "Proje Name",
      type : "Website",
      client : "Azerbaijan Future Studies Society",
      duration : "1 month",
      techn : "Html, Css, JavaScript",
      budget : "1000$",
      link : "https://demo.futurestudies.az/"
    },
  ];

  return (
    <div className="bg-black container mx-auto mb-[5rem]">
        <div className="flex flex-col gap-[3rem]">
          <div>
            <h1 className="sm:text-[6rem] text-[4rem] text-center text-white font-black sm:mt-[0] mt-[10rem]">
              My <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-[2rem] text-center text-white font-extralight">
              A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            {portdatas.map((portdata) => (
              <img
                src={portdata.src}
                key={portdata.id}
                onClick={() => {setModal(!modal); changeContext(portdata);} }
                draggable="false"
                alt=""
                className="w-full h-[30rem] object-cover rounded-[1rem]"
              />
            ))}

            {modal && <Modal modal={modal} setModal={setModal} portdatas={portdatas} setPort={setPort} port={port}/>}
          </div>
        </div>
    </div>
  );
};

export default Portfolio;
