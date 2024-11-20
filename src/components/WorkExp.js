import React from 'react'
const WorkExpData = [
    {
        "Company": "Clinigo",
        "WorkDone": "Collaborated with a development team to build user-friendly websites using React.js, Node.js, Express.js, and MongoDB. Contributed to backend development and managed company web services. Gained hands-on experience in database management, React.js, API development. Strengthened skills in full stack development, tackling endto-end project management and practical problem-solving challenges",
        "Location": "Remote, India",
        "Role": "MERN Stack Intern",
        "Duration": "September 2023 - November 2023",
    }
]
const WorkExp = () => {
    return (
        <div className='h-auto my-1 flex flex-col items-center gap-5 px-2'>
            {WorkExpData.map((i) => (
                <div className='grid grid-cols-4'>
                    <div className='col-span-3 p-4 bg-gray-100 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-bold text-black mb-2'>{i.Company}</h1>

                            <div className='flex gap-4 items-center'>
                                <i className=' text-sm no-underline font-medium'>
                                    {i.Duration}
                                </i>
                                <p className='bg-gray-200 text-black px-4 py-1  font-medium rounded-full text-sm mr-4'>
                                    {i.Location}
                                </p>

                            </div>

                        </div>
                        <p className=' text-[12px] text-gray-500 font-semibold'>{i.Role}</p>
                        <i className='text-base text-black mb-4 '>
                            {i.WorkDone}
                        </i>

                    </div>
                    <div className='col-span-1 '>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkExp