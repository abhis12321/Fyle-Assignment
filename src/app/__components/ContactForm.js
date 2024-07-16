import React from 'react'

export default function ContactForm() {
    return (
        <div className='fixed top-0 left-0 h-[100vh] w-full bg-gray-200 flex items-center justify-center'>
            <from className="flex flex-col gap-10 bg-white shadow-[0_0_5px_gray] rounded-md w-[600px] p-6">
                <h2 className="text-[1.7rem] font-bold font-sans text-gray-700">Talk to us</h2>
                <input type="email" placeholder='Work email' className='outline-none py-3 bg-transparent' />
                <div className="flex gap-3 items-center justify-between">
                    <input type="text" placeholder="First name" className='outline-none py-3 bg-transparent w-1/2' />
                    <input type="text" placeholder="Last name" className='outline-none py-3 bg-transparent w-1/2' />
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <input type="checkbox" className='rounded-full bg-red-300' />
                    <label htmlFor="" className="text-gray-500 font-sans">I agree to Fyle's terms and conditions, and provide consent to send me communication</label>
                </div>
                <button className='py-4 px-5 bg-rose-600 text-white font-semibold rounded-md'>Contact us</button>
            </from>
        </div>
    )
}
