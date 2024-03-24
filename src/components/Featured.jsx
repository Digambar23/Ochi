import { motion, useAnimation } from 'framer-motion';
import { Power4 } from 'gsap';
import React from 'react'

function Featured() {
 const cards = [useAnimation(),useAnimation()];

 const handleHover=(index)=>{
    cards[index].start({y:"0"})
 }
 const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
 }

    return (
        <div className='w-full py-20'>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className='text-5xl tracking-tight'>Featured Projects :</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div 
                    onHoverStart={()=>handleHover(0)}
                    onHoverEnd={()=>handleHoverEnd(0)}
                     className="cardcontainer relative w-1/2 rounded-3xl h-[75vh] bg-red-500">
                        <div className='absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[#CDEA68] leading-none tracking-tight text-6xl'>
                            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[#CDEA68] leading-none tracking-tight text-6xl'>
                                {"FYDE".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                        className='inline-block'
                                    >{item}</motion.span>
                                )}
                            </h1>
                        </div>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                     onHoverStart={()=>handleHover(1)}
                     onHoverEnd={()=>handleHoverEnd(1)}
                     className="cardcontainer relative w-1/2 rounded-3xl h-[75vh] bg-red-500">
                        <h1 className='absolute  overflow-hidden flex right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[#CDEA68] leading-none tracking-tight text-6xl'>
                            {"VISE".split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                    className='inline-block'
                                >{item}</motion.span>
                            )}
                        </h1>

                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured