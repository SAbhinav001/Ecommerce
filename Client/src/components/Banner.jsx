import React, { useState } from 'react'
import {HiArrowRight, HiArrowLeft} from "react-icons/hi"

const Banner = () => {
const [slideNo, setSlideNo] = useState(0)

const images =[
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
]


const LeftSlide =()=>{
    setSlideNo((slideNo === 0) ? 3 : (x) =>x-1)
}

const RightSlide =()=>{
    setSlideNo((slideNo === 3) ? 0 : (x) =>x+1)
}

  return (
     <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform: `translateX(-${slideNo * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover' src={images[0]} alt="bannerImages" />
                <img className='w-screen h-full object-cover' src={images[1]} alt="bannerImages" loading='priority'/>
                <img className='w-screen h-full object-cover' src={images[2]} alt="bannerImages" />
                <img className='w-screen h-full object-cover' src={images[3]} alt="bannerImages" />
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-40 '>
                <div onClick={LeftSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-slate-600'>
                    <HiArrowLeft/>
                </div>
                <div  onClick={RightSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-slate-600'>
                    <HiArrowRight/>
                </div>
            </div>
        </div>

     </div>
  )
}

export default Banner 