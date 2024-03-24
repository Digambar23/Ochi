import React from 'react'

function Cards() {
    return (
        <div className='flex items-center p-10  gap-5 w-full h-screen bg-zinc-100'>
            <div className="cardcontainer  w-1/2 h-[50vh]">
                <div className="card relative flex items-center justify-center rounded-2xl w-full h-96 bg-[#004D43]">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute rounded-lg px-3 py-3 border-2 border-[#CDEA68] text-[#CDEA68] left-10 bottom-10'>&copy;2019-2020</button>
                </div>

            </div>
            <div className="flex gap-5 cardcontainer w-1/2 h-[50vh]">
                <div className="card relative flex items-center justify-center  rounded-2xl w-1/2 h-96 bg-[#212121]">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute rounded-lg px-3 py-3 border-2 left-10 bottom-10'>Rating 5.0 on Clutch</button>

                </div>
                <div className="card relative flex items-center justify-center rounded-2xl w-1/2 h-96 bg-[#212121]">
                    <img width={100} src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute rounded-lg px-3 py-3 border-2  left-10 bottom-10'>Business Bootcamp Alumni</button>

                </div>
            </div>
        </div>
    )
}

export default Cards