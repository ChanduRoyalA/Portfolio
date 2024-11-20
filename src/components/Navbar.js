import React from 'react'
import MyImage from "../Img/MyImage.jpeg"
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center' >
            <div className='flex gap-3'>
                Resume
            </div>
            <div className='mr-4 py-1 px-4 border-2 flex gap-3 items-center'>
                <div className="rounded-full overflow-hidden">
                    <img src={MyImage} alt='Img' height='35px' width='35px' />
                </div>
                <h1 className='font-bold text-base'>Sree Hari Chandra</h1>
                <IoIosArrowDown />
            </div>
        </div>
    )
}

export default Navbar
