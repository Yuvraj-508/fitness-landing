"use client"
import React from 'react'
import { motion } from "framer-motion"
import { sora } from '../layout';
import { scroller } from 'react-scroll';
// import Coach from '../../public/fitcoach-min (1).png'
// import Db from '../../public/dumble.png'
// import Db2 from '../../public/dumble2.png'
function Hero() {
  return (
    <div className=" hero w-full min-h-[100vh] flex  justify-start items-center lg:px-[10%] md:px-[8%] px-[5%] ">
      <div className="flex flex-col lg:flex-row w-full items-center gap-10 sm:gap-14 md:gap-17 lg:gap-0 pt-10 sm:pt-14 lg:pt-8">
        <div className="lft w-full lg:w-1/2 text-white flex flex-col  lg:items-start lg:justify-start items-center justify-center md:gap-5 gap-8 relative">
    
          <h1 className=' w-full font-bold text-[34px] md:text-[44px] sm:text-[38px] text-center lg:text-start lg:text-[50px] leading-10 lg:leading-none'>Achieve Your Fitness Goals with Expert Guidance</h1>
          <p className=' hidden lg:flex text-[12px] leading-5.5 text-[#ffffffe3]'>
            Join countless others who have transformed their lives through
            personalized coaching. With a focus on your unique goals, we provide
            the support and expertise you need to succeed.
          </p>
          <div className='flex gap-6
          '>
              <motion.button 
            animate={{
          
            }}
            whileHover={{
              // border:"none",
              background:"#fff",
              color:"#000",
              outline:"#071B2F"
              
            }}
            transition={{
              duration:1,
              type:"linear"
            }} className='bg-[#071B2F] hover:outline-[#071B2F] font-medium  px-6 py-3 rounded-lg cursor-pointer text-[16px]'
            onClick={()=>scroller.scrollTo('contact', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
            })}
            >Book Now</motion.button>
            <motion.button 
          onClick={()=>scroller.scrollTo('about', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          })}
            className='outline-1 transition font-medium hover:bg-[#071B2F] hover:outline-[#071B2F] outline-[#ffffffef] px-6 py-3 rounded-lg cursor-pointer text-[16px]'
            
            >Learn More</motion.button>
          </div>
        </div>
        <div className="ryt  w-full lg:w-1/2 lg:ml-18">
          <div className=" relative flex items-center justify-center">
          <img
            src="/heroI/fitcoach.png"
            alt=""
            className=" w-[180px] lg:w-[300px] md:w-[220px] sm:w-[200px] "
          />
          <motion.img
           animate={{
            y:[0,-120,0]
           }}
           transition={{
            duration:25,
            repeat:Infinity,
            type:"linear"
           }}
            src="/heroI/dumble.png"
            alt=""
            className=" lg:w-[130px] md:w-[95px] w-[86px]  transform absolute lg:translate-x-55 md:translate-x-40 lg:-translate-y-17 translate-x-34 -translate-y-6"
          />
          <motion.img
           animate={{
            y:[0,-70,0]
            
           }}
           transition={{
            duration:23,
            repeat:Infinity,
            type:"linear"
           }}
           
            src="/heroI/dumble2.png"
            alt=""
            className="lg:w-[100px] md:w-[85px] w-[75px] absolute lg:-translate-x-50 md:-translate-x-40 lg:translate-y-10 -translate-x-33 translate-y-13"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
