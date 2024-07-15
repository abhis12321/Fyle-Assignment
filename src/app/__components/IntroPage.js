import Image from 'next/image'
import React from 'react'

export default function IntroPage() {
  return (
    <div className='flex items-center justify-center'>
      <div className="flex flex-col">

      </div>
      <div className="">
        <Image src={'/intropage1.png'} alt='symbol' height={600} width={600} className='' />
      </div>
    </div>
  )
}
