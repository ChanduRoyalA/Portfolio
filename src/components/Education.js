import React from 'react'
const educationData = [
    {
        "Degree": "B.Tech,  Computer Science Engineering (CSE)",
        "Institute": "Vellore Institute of Technology, Katpadi, Vellore, Tamil Nadu",
        "CGPAPercentage": "8.18 (Current)",
        "Year": "2021-2025"
    },
    {
        "Degree": "Senior Secondary",
        "Institute": "Sri Chaitanya Junior College, Hyderabad, Telengana",
        "CGPAPercentage": "97.0%",
        "Year": "2019-2021"
    },
    {
        "Degree": "Secondary",
        "Institute": "Dr.KKR Gowtham, Vijayawada, Andhra Pradhesh",
        "CGPAPercentage": "9.70/10.0",
        "Year": "2019"
    }
];

const Education = () => {
    return (
        <div className='h-auto my-1 flex flex-col gap-5 px-2'>
            {educationData.map((i) => (
                <div className='grid grid-cols-4 '>
                    <div className=' col-span-3 gap-4 px-4 py-2 bg-gray-100 rounded-lg   '>
                        <h1 className='text-lg font-bold text-gray-800'>{i.Institute}</h1>
                        <div className='flex gap-1 items-center font-medium'>
                            <p className='text-sm text-gray-700'>{i.Degree}</p>
                            <p></p>
                            <p className='bg-gray-200 text-black px-3 py-1 rounded-full text-xs'> {i.CGPAPercentage}</p>
                        </div>
                        <i className='text-sm text-gray-500'>{i.Year}</i>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Education