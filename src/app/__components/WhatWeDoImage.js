import Image from 'next/image'
import React from 'react'

export default function WhatWeDoImage({image}) {
  return (
    <div className='group h-[350px] w-[243px] rounded'>
      <Image src={image} alt='' height={400} width={400} className='h-[350px] w-[243px] group-hover:hidden rounded' />
      <div className="w-full h-full hidden group-hover:flex flex-col gap-8 items-center justify-center bg-rose-500 rounded text-white p-2">
        <Image src={'/codeLogo.png'} alt='' height={40} width={40} className='rounded bg-white ring-2 ring-white'/>
        <h2 className="">WEB DEVELOPEMNT </h2>
        <p className="text-[10px] text-center opacity-60">Lorem ipsum dolor sit amet cor quae eius sapiente dolore voluptatum similique?</p>
        <button className="text-[8px] py-[10px] px-5 bg-slate-50 rounded text-red-500 font-semibold tracking-[.12rem]">READ MORE &rarr;</button>
      </div>
    </div>
  )
}
