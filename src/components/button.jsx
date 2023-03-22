import React from 'react'

const button = ({link,text}) => {
  return (
    <div className='text-center px-[3rem] py-[1rem] rounded-[3rem] hover:bg-primary border-[.1rem] border-primary text-white text-[2rem] transition ease-in-out delay-150'>
        <a href={link}>{text}</a>
    </div>
  )
}

export default button