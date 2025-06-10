import React from 'react'

const Heading = ({ 
  title = "Highlights", 
  subtitle = "What makes us stand out — at a glance.",
 
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-20">
      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-3 text-zinc-800 font-[MyFont] uppercase">
        {title}
      </h2>
      
      {/* Subtitle */}
      <p className=" text-lg max-w-2xl font-light ">
        {subtitle}
      </p>

    </div>
  )
}

export default Heading