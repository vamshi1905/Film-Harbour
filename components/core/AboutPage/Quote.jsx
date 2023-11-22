import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        Dive into the magical world of cinema with our user-friendly and comprehensive movie website. Explore an extensive database featuring the latest releases, timeless classics, and hidden gems. From 
          <HighlightText text={" heart-pounding action "} />to {" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            tear-jerking dramas{" "}
        </span>
        our curated lists cater to
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            every cinematic taste.
        </span> 
    </div>
  )
}

export default Quote