// app/page.js (Home Page)
'use client'
import React,{useContext, useState} from 'react'
import Link from 'next/link'
import Hero from './component/Hero'
import Coach from './component/Coach'
import Testimonail from './component/Testimonail'
import Card from './component/Card'
import Contact from './component/Contact'
import { DataContext } from './Manager/Store'

export default function HomePage() {
  // const [toggle ,setToggle]=useState(true);
  const {toggle,setToggle} =useContext(DataContext);
  return (
    <main className={`relative w-full h-screen}`}>
      <div className={`${toggle?'bef':''} transition  duration-50 ease-in-out `}/>
     <Hero/>
     <Coach/>
     <Testimonail/>
     <Card/>
     <Contact/>
    </main>
  )
}

