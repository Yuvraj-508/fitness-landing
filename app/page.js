// app/page.js (Home Page)
import Link from 'next/link'
import Hero from './component/Hero'
import Coach from './component/Coach'
import Testimonail from './component/Testimonail'
import Card from './component/Card'
import Contact from './component/Contact'

export default function HomePage() {
  return (
    <main className=''>   
     <Hero/>
     <Coach/>
     <Testimonail/>
     <Card/>
     <Contact/>
    </main>
  )
}

