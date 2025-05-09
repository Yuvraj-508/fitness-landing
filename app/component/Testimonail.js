"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from 'lucide-react';
function Testimonail() {
  const testimonials = [
    {
      text: "The coach is incredibly motivating and understands my fitness goals.",
      name: "John Joe",
      username: "@john12",
      rating: 5,
      avatar: "/client/c1.png"
    },
    {
      text: "Thanks to the coach, I’ve transformed my lifestyle and feel more confident.",
      name: "Sarah Miller",
      username: "@sarah_fit",
      rating: 5,
      avatar: "/client/c2.png"
    },
    {
      text: "Great workouts and even better accountability from the coach!",
      name: "Alex Carter",
      username: "@alex_moves",
      rating: 5,
      avatar: "/client/c3.png"
    },
    {
      text: "He explains everything clearly and tailors workouts perfectly to my level.",
      name: "Emily Stone",
      username: "@emily_active",
      rating: 4,
      avatar: "/client/c4.png"
    },
    {
      text: "Always encouraging and never lets me slack off. Best coach ever!",
      name: "Mike Taylor",
      username: "@mikepushes",
      rating: 5,
      avatar: "/client/c2.png"
    },
    {
      text: "Very professional and focused on long-term health, not just quick fixes.",
      name: "Rachel Gomez",
      username: "@rachelfit",
      rating: 5,
      avatar: "/client/c3.png"
    },
    {
      text: "I like how the coach balances intensity with proper form and safety.",
      name: "Daniel Roy",
      username: "@dantherunner",
      rating: 4,
      avatar: "/client/c1.png"
    },
    {
      text: "Sessions are always challenging, but the coach keeps me going.",
      name: "Priya Nair",
      username: "@priya_strength",
      rating: 5,
      avatar: "/client/c4.png"
    },
    {
      text: "His nutritional advice really helped me along with training.",
      name: "Liam Brooks",
      username: "@liamworks",
      rating: 4,
      avatar: "/client/c3.png"
    },
    {
      text: "I’ve never felt more energetic and positive—amazing coach!",
      name: "Nina Hart",
      username: "@nina_active",
      rating: 5,
      avatar: "/client/c1.png"
    }
  ];

   
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        fill={i < rating ? "#FFD700" : "none"} 
        stroke={i < rating ? "#FFD700" : "#CBD5E0"} 
        className="inline-block"
      />
    ));
  };

  const duplicated = [...testimonials, ...testimonials];

  return (
    <div className="testmonail w-full min-h-screen flex flex-col  items-center overflow-hidden px-[5%] lg:px-0">
        <div className="w-full flex flex-col mt-25 mb-4 items-center lg:gap-15 gap-10 justify-center ">
      <h1 className="lg:text-[44px] text-[32px] flex items-center gap-0 lg:gap-7  font-bold leading-15 relative">
        Hear from Our Users <motion.img  src="/heroI/arrow.png" alt="" className="w-25 absolute right-0 top-0 lg:translate-x-25 lg:-rotate-40 -rotate-50 translate-x-10 translate-y-4 " />
      </h1>
      <div className="flex flex-col gap-10 w-full mt-10">
        {/* {small screen} */}
        <div className="lg:hidden flex flex-col itms-center gap-5 justify-center">
      {duplicated.slice(0,4).map((item, i) => (
            <div
              key={i}
              className="box flex flex-col gap-4 "
            >
               <div className="">
                    {renderStars(item.rating)}
                  </div>
              <p className="text-gray-700">{item.text}</p>
              <div className="flex gap-3 items-center">
              <div className="rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                 <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-500">{item.username}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
            {/* {large screen} */}
      <div className="hidden lg:flex w-full overflow-hidden ">
        <motion.div
          className="flex gap-5 w-max py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="box flex flex-col gap-4 shrink-0"
            >
               <div className="">
                    {renderStars(item.rating)}
                  </div>
              <p className="text-gray-700">{item.text}</p>
              <div className="flex gap-3 items-center">
              <div className="rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                 <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-500">{item.username}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="hidden lg:flex w-full overflow-hidden ">
        <motion.div
          className="flex gap-5 w-max py-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration:60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="box flex flex-col gap-4 shrink-0"
            >
              <div className="mb-4">
                    {renderStars(item.rating)}
                  </div>
              <p className="text-gray-700">{item.text}</p>
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                 <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-500">{item.username}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Testimonail;
