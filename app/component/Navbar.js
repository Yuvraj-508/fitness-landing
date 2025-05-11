
'use client'
import React, { useEffect, useState,useContext } from 'react';
import {Link} from 'react-scroll';
import { Menu, X} from 'lucide-react';
import { DataContext} from '../Manager/Store';

export default function Navbar() {
  const [sticky ,setSticky]=useState(false);
  // const [toggle ,setToggle]=useState(false);
  const {toggle,setToggle}= useContext(DataContext);

  
  useEffect(()=>{
      window.addEventListener('scroll',()=>{
       window.scrollY > 80? setSticky(true):setSticky(false);
      })
       },[])
  return (
    <nav className={ `lg:px-[10%] md:px-[8%] px-[5%] w-full  text-white py-4  fixed top-0 left-0 flex items-center justify-between z-20 rel ${sticky?"bg-[#071B2F]" : " "}`}>
      <Link href="/" className='md:text-5xl text-4xl text-white'>
        LOGO
        </Link> 
         <div className={` hidden font-normal md:flex gap-8 text-xl`}>
          <Link to="hero" smooth={true} offset={-200} duration={500} className='cursor-pointer'>Home</Link>
          <Link to="about" smooth={true} offset={-100} duration={500} className=' cursor-pointer text-[#f6f6f6]'>About</Link>
          <Link to="testmonail" smooth={true} offset={-20} duration={500} className=' cursor-pointer text-[#e9e9e9]'>Reviews</Link>
          <Link to="contact " smooth={true} offset={-100} duration={500} className=' cursor-pointer text-[#dddddd]'>Contact Us </Link>
         </div>
         <div className="md:hidden">
            <Menu
            size={30}
            onClick={setToggle}
            className={`cursor-pointer ${toggle?"hidden":""}`}
            />
             <X
             size={30}
            onClick={()=>setToggle(prev=>!prev)}
            className={`cursor-pointer  ${toggle?"":"hidden"}`}
            />
         </div>
         <div className={`bg-white text-black fixed h-fit rounded-2xl py-4 px-6 translate-y-18 inset-4 transition  duration-50 ease-in-out ${toggle?"":"hidden"} `}>
          <div className="flex flex-col  gap-6">
         <Link to="hero" smooth={true} offset={-200} duration={500} className='cursor-pointer' onClick={()=>setToggle(prev=>!prev)} >Home</Link>
          <Link to="about" smooth={true} offset={-100} duration={500} className=' cursor-pointer 'onClick={()=>setToggle(prev=>!prev)} >About</Link>
          <Link to="testmonail" smooth={true} offset={-20} duration={500} className=' cursor-pointer 'onClick={()=>setToggle(prev=>!prev)} >Reviews</Link>
          <Link to="contact " smooth={true} offset={-100} duration={500} className=' cursor-pointer 'onClick={()=>setToggle(prev=>!prev)} >Contact Us </Link>
          </div>
         </div>
    </nav>
  )
}
