import Image from 'next/image'
import React from 'react'

export default function IntroPage() {
  return (
    <div className='w-full h-[100vh] flex gap-10 items-center justify-center'>
      <div className="flex flex-col gap-8 max-w-[40%]">
        <div className="text-[1.3rem] font-medium text-rose-600">AWARD WINNING</div>
        <div className="text-[3rem] font-bold font-sans leading-[3.5rem]">DIGITAL MARKETING AGENCY</div>
        <div className="text-[12px] font-semibold font-sans leading-[1.4rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam consequatur debitis quaerat porro nostrum voluptas error. Voluptas, incidunt odio. Dolorum, nemo? Sunt em magni maiores.</div>
        <button className="w-fit bg-red-700/90 hover:bg-red-600 text-white rounded py-3 px-8 text-[10px] font-semibold font-sans">CONTACT US</button>
      </div>
      <div className="">
        <Image src={'/intropage1.png'} alt='symbol' height={600} width={600} className='h-[70vh] w-fit' />
      </div>
    </div>
  )
}
