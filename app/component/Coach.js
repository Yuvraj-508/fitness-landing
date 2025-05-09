"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
function Coach() {

  return (
    <div className=" about w-full bg-[#F3F8FF] min-h-screen flex flex-col lg:flex-row items-center gap-13 lg:gap-0 lg:px-[10%] px-[5%]">
      
     <div className="lft w-full lg:w-[75%] flex flex-col items-center lg:items-start justify-center lg:gap-6 gap-3 mt-15 lg:mt-0">
        <h1 className=" hidden lg:flex text-[44px] w-full max-w-[68%] font-bold lg:leading-15 leading-10">
         {` Meet Your Coach: A Passionate Expert in Fitness and Wellness`}
        </h1>
        <h1 className=" lg:hidden w-full text-[30px] text-center font-bold leading-10">
         {` A Passionate Expert in Fitness and Wellness`}
        </h1>
        <p className="lg:text-[18px] text-[16px]  font-normal">
          Personal training and online coaching
        </p>
        <button className="bg-blue-700 w-fit text-white lg:py-3 py-2 lg:px-5 px-3 rounded cursor-pointer">
          Book Session
        </button>
        <ul className="hidden list-disc lg:flex flex-col lg:gap-3 gap-1 font-medium">
          <li>Over 3000 clients</li>
          <li>10+ years of experience</li>
          <li>Specialized in fitness and wellness</li>
          <li>Online coaching available</li>
          <li>Certified personal trainer</li>
        </ul>
      </div>

      <div className="ryt w-full lg:w-[25%] flex items-center justify-center shadow-gray-400">
      <div
      // ref={ref}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      // style={{ perspective: 1000 }}
      className="inline-block"
    >
      <motion.img
        src="/heroI/fitcoach2.png"
        alt=""
        // style={{
        //   rotateX,
        //   rotateY,
        //   transformStyle: "preserve-3d",
        // }}
        // transition={{
        //   duration:2,
        //   type:"linear",
        // }}
        className="lg:w-[250px] w-[210px]  object-contain rounded-xl"
      />
    </div>
    </div>
    </div>
  );
}

export default Coach;
