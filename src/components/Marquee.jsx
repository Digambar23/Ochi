import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full rounded-tl-3xl rounded-tr-3xl py-20  bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex p-10 whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:5,repeat:Infinity}}  className='text-[12vw] uppercase leading-none font-["FoundersGrotesk - 600"] tracking-tighter letter font-bold pr-10'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:5,repeat:Infinity}}  className='text-[12vw] uppercase leading-none font-["FoundersGrotesk - 600"] tracking-tighter letter font-bold pr-10'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:5,repeat:Infinity}}  className='text-[12vw] uppercase leading-none font-["FoundersGrotesk - 600"] tracking-tighter letter font-bold pr-10'>We Are Ochi</motion.h1>

        </div>
    </div>
  )
}

export default Marquee