import { motion } from 'framer-motion'
import React from 'react'




function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3'  className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textStructure mt-40 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item,index) => {
          return (
          <div className="masker font-['FoundersGrotesk - 600'] ">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[.76,0,.24,1],duration:1}} className="mr-5 w-[8vw] rounded-md h-[5.7vw]  relative bg-green-300"></motion.div>
              )} 
           
            <h1 className='uppercase text-[6.5vw] leading-[6.5vw] tracking-tight font-bold'>{item}</h1>
            </div>
          </div>
          )
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex item-center justify-between">
        {["For public and private companies", "From the first pitch to IPO", ""].map((item, index) => {
          return <p className='font-md leading-none tracking-tight mt-4'>{item}</p>
        })}
        <div className='start flex items-center gap-5'>
          <div className="px-4 py-2 mt-2 border-[2px] border-zinc-500 font-md leading-none tracking-tight rounded-full"> Start the Project</div>
          <div className="w-8 h-8 items-center justify-center border-[2px] border-zinc-500 font-md rounded-full">/</div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage