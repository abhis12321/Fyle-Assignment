import React, { useState } from 'react'

export default function ContactForm() {
    const [email , setEmail] = useState();
    const [fname , setFName] = useState();
    const [lname , setLName] = useState();
    return (
        <div className='fixed top-0 left-0 h-[100vh] w-full bg-gray-200 flex items-center justify-center'>
            <from className="flex flex-col gap-10 bg-white shadow-[0_0_5px_gray] rounded-md w-[570px] py-6 px-8">
                <h2 className="text-[1.7rem] font-bold font-sans text-gray-700">Talk to us</h2>
                <div className="flex flex-col border-b-[2px] border-gray-400">
                    <label htmlFor="email" className={`text-gray-500 cursor-text`}>Work email</label>
                    <input type="email" className={`outline-none py-2 bg-transparent font-semibold text-gray-900`} id='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="flex gap-3 items-center justify-between">
                    <div className="flex flex-col border-b-[2px] border-gray-400">
                        <label htmlFor="fname" className="text-gray-500 cursor-text">First name</label>
                        <input type="text" className={`outline-none py-2 bg-transparent font-semibold text-gray-900 w-full`} id='fname' value={fname} onChange={e => setFName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col border-b-[2px] border-gray-400">
                        <label htmlFor="lname" className="text-gray-500 cursor-text">Last name</label>
                        <input type="text" className={`outline-none py-2 bg-transparent font-semibold text-gray-900 w-full`} id='lname' value={lname} onChange={e => setLName(e.target.value)}/>
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <input type="checkbox" className='scale-150' id='t&c'/>
                    <label htmlFor="t&c" className="text-gray-500 font-sans leading-5">I agree to Fyle's terms and conditions, and provide consent to send me communication</label>
                </div>
                <button className='py-4 px-5 bg-rose-600 text-white font-semibold rounded-md'>Contact us</button>
            </from>
        </div>
    )
}
