import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const buttonlink = ({link,text}) => {
  return (
    <div className='text-center px-[3rem] py-[1rem] rounded-[3rem] hover:bg-primary border-[.1rem] border-primary text-white text-[2rem] transition ease-in-out delay-150'>
        {<Link to={link}>{text}</Link>}
    </div>
  )
}

export default buttonlink