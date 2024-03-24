import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-[5vw] leading-[4.5vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className=" flex w-full border-t-[1px] mt-10 pt-5 border-[#a1b562]">
                <div className="w-1/2">
                    <h1 className='text-6xl tracking-tighter opacity-[0.9]'>Our approach :</h1>
                    <button className='flex uppercase gap-10 px-10 mt-4 py-5 bg-zinc-900 rounded-full text-white items-center'>Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[70vh] bg-[#b0c859] rounded-2xl"></div>
            </div>

            
        </div>
    )
}

export default About