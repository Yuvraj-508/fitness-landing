"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Layers2, Crown, ChevronRight, Sparkle } from "lucide-react";
function Card() {
  const MotionSparkle = motion(Sparkle);
  return (
    <div className="cards w-full min-h-screen flex flex-col gap-14 justify-start items-center  lg:px-[10%] px-[5%] overflow-hidden ">
      <div className="relative w-full flex flex-col item-center gap-14 justify-center text-center lg:mt-45 mt-30 mb-4">
        <div className=" hidden md:flex absolute top-0 left-0 -translate-y-8 translate-x-30">
          <MotionSparkle
            size={15}
            strokeWidth={1}
            animate={{
              scale: [1.7, 1, 1.7],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
              className="translate-x-13 -translate-y-1 rotate-[-18deg] text-black"
          />

          <MotionSparkle
            size={35}
            strokeWidth={1}
            animate={{
              scale: [1.7, 1, 1.7],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
              className="-translate-x-0 translate-y-0 rotate-[-18deg] text-black"
          />
        </div>
     
        <div className=" hidden md:flex absolute top-0 right-0 -translate-y-8 -translate-x-27">
          <MotionSparkle
            size={15}
            strokeWidth={1}
            animate={{
              scale: [1.7, 1, 1.7],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
              className="-translate-x-8 -translate-y-1 rotate-[-18deg] text-black"
          />

          <MotionSparkle
            size={35}
            strokeWidth={1}
            animate={{
              scale: [1.7, 1, 1.7],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
              className="-translate-x-0 translate-y-0 rotate-[-18deg] text-black"
          />
        </div>
        <h1 className="text-[28px] w-full lg:w-[75%] font-bold text-center">
          Achieve Your Fitness Goals with Our Tailored Programs and Expert
          Guidance
        </h1>
      <div className="flex  flex-wrap lg:flex-nowrap lg:flex-row w-full items-center justify-center gap-10">
        <div className="card  flex flex-col items-center gap-5 justify-center lg:py-2 py-1">
          <Layers2 size="35" />
          <h1 className="text-[20px] lg:text-[24px]  text-[#383838] font-bold text-center">
            Comprehensive Programs for Fitness Journey: Weight Loss, Muscle
            Gain, and More
          </h1>
          <p className="text-[14px] text-[#383838d5] font-medium text-center">
            Our services are designed to help you transform your body and boost
            your confidence.
          </p>
          <button className="bg-[#e5e5e5cf] flex items-center px-3 py-1.5 rounded font-medium text-[#383838e7] text-xl cursor-pointer">
            Explore <ChevronRight />
          </button>
        </div>
        <div className="card bg-[#2980FF] flex flex-col items-center gap-9 justify-center py-1.5">
          <Crown size="35" />
          <h1 className="text-[20px] lg:text-[24px]  text-[#ffffff] font-bold text-center">
            Personal Training Tailored to Your Unique Needs and Goals
          </h1>
          <p className="text-[14px] text-[#ffffffd5] font-medium text-center">
            Experience one-on-one coaching that adapts to your fitness level and
            aspirations.
          </p>
          <button className="bg-[#ffffff]  flex items-center px-3 py-1.5 rounded font-medium text-[#2980FF] text-xl cursor-pointer">
            Join <ChevronRight />
          </button>
        </div>
        <div className="card  flex flex-col items-center gap-9 justify-center py-2">
          <Zap size="35" />
          <h1 className="text-[20px] lg:text-[24px]  text-[#383838] font-bold text-center">
            Effective Weight Loss Programs That Deliver Real Results
          </h1>
          <p className="text-[14px] text-[#383838d5] font-medium text-center">
            Our structured weight loss plans are designed to fit your lifestyle
            and preferences.
          </p>
          <button className="bg-[#e5e5e5cf]  flex items-center px-4 tracking-wide py-1.5 rounded-xl font-medium text-[#383838e7] text-xl cursor-pointer">
            Start <ChevronRight />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Card;
