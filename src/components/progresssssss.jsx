import React,{useState} from "react";

const Progress = () => {
    const data = 70;
    const [progress, setProgress] = useState({});

    setTimeout(() => {
        const newProgress = { 
            width: `${data}%`,
            transition: "1s ease-in-out",
            height: "2rem",
            borderRadius: "3rem",
            fontSize: "1.5rem",
            background: "#ffb400",
            textAlign: "center",
            color: "white",
         }
         setProgress(newProgress);
    }, 1000);


  return (
    <div className="flex flex-col items-start">
        <h1 className="text-[2rem] text-white font-bold">HTML</h1>
      <div className="text-center w-[35rem] h-[2rem] bg-grey rounded-[3rem]">
        <div style={progress}>
          <p>{data}%</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
