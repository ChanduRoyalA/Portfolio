import React, { useState } from 'react'
import MyImage from '../Img/MyImage.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import MyResume from "../Img/MyResume.pdf"
import Education from '../components/Education.js';


const Resume = (props) => {
    const { setactiveTab } = props
    return (
        <div className='h-auto grid grid-cols-4 gap-1 py-5 px-2'>
            <div className='col-span-3 '>
                <div className=' bg-gray-100 flex flex-col py-5 px-4 rounded-lg'>
                    <div className='flex flex-col justify-between gap-8'>
                        <div className=' flex gap-1  items-center justify-evenly'>
                            <div className='flex gap-1 items-center'>
                                <div className="rounded-full overflow-hidden">
                                    <img src={MyImage} alt='Img' height='150px' width='150px' />
                                </div>
                                <div className='ml-8'>
                                    <h1 className=' text-2xl font-bold'>Sree Hari Chandra</h1>
                                    <p className=' text-base text-gray-600'>Full Stack Developer • Java Dev • Machine Learning </p>
                                    <p className='text-base text-gray-600'>Vellore Institute of Technology, Vellore • 2025 Pass out</p>
                                </div>
                            </div>
                            <a href={MyResume} name={"SreeHariChandra-Resume"} download={MyResume}><button className=' bg-blue-500 text-white px-8 py-2 rounded-md'>Download Resume</button></a>
                        </div>
                        <div className='flex gap-10'>
                            <button className='px-2 py-1 hover:border-b-2 hover:border-red-500 border-b-2 border-transparent' onClick={(e) => { setactiveTab(e.target.value) }} value="Education">Education</button>
                            <button className='px-2 py-1 hover:border-b-2 hover:border-red-500 border-b-2 border-transparent' onClick={(e) => { setactiveTab(e.target.value) }} value="Work Experince">Work Experince</button>
                            <button className='px-2 py-1 hover:border-b-2 hover:border-red-500 border-b-2 border-transparent' onClick={(e) => { setactiveTab(e.target.value) }} value="Projects">Projects</button>
                            <button className='px-2 py-1 hover:border-b-2 hover:border-red-500 border-b-2 border-transparent' onClick={(e) => { setactiveTab(e.target.value) }} value="Cretifications">Cretifications</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <div className='border-2 px-4 py-1 rounded-lg'>
                    {/* <h1 className=' font-bold text-xl'>Social</h1> */}
                    <div className='py-2 flex gap-5 mt-2'>
                        <FaGithub className='text-2xl' />
                        <FaLinkedinIn className='text-2xl' />
                    </div>
                </div>
                <div className='border-2 px-4 py-1 mt-1 rounded-lg'>
                    <div className='py-2 mt-2 flex flex-wrap gap-2'>
                        {[

                            'MongoDB',
                            'SQL',
                            'JavaScript',
                            'ReactJs',
                            'NextJs',
                            'Python',
                            'Numpy',
                            'Pandas',
                            'Java',
                            'ExpressJs',
                            'NodeJs',
                            'SuperVised Machine Learning',
                        ].map((skill) => (
                            <p key={skill} className='bg-slate-200 rounded-2xl px-3 py-1 w-fit'>
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Resume