import React from "react";

const Heading = ({
  title = "Highlights",
  subtitle = "What makes us stand out — at a glance.",
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-2 lg:py-8 space-y-4 ">
      {/* Title */}
      <h2 className="text-3xl font-extrabold  text-zinc-800 font-[MyFont] uppercase">
        {title}
      </h2>
      <p className=" text-base max-w-xl font-light ">{subtitle}</p>
    </div>
  );
};

export default Heading;
