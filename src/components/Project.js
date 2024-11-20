import React from 'react'




const Project = () => {
    const data = [
        {
            "Title": "Olympic Medal Prediction Model",
            "Description": "Built a machine learning model to predict Olympic medal counts based on prior Olympic results. Utilized Google Colab for development, leveraging Python, Scikit-learn, and Pandas for model building. Preprocessed data, applied linear regression, and incorporated feature engineering to enhance accuracy. Achieved an R² score of 0.81, indicating high prediction accuracy.",
            "Technologies": "[ Python, Scikit-learn, Pandas, Matplotlib, Data Pre-Processing ]",
            "Github": "Github",
            "period": "2024"
        },
        {
            "Title": "CabShare: Innovative Ride-Sharing Application",
            "Description": "Developed a dynamic cab-sharing application using Next.js, MongoDB, and Socket.IO. Integrated Maps API for autocomplete, geocoding, and short-distance calculations. Enabled real-time cab requests and matching within a 5 km radius using geo-spatial queries. Implemented a chat feature for enhanced communication between users upon request acceptance.",
            "Technologies": "[ Next.js, Socket.IO, MongoDB, Next-AUTH, shadcn UI ]",
            "Github": "Github",
            "period": "2024"
        },
        {
            "Title": "WaveX-Dashboard and Report",
            "Description": "Simplified decision-making by creating extensive Power BI reports on sales and HR, combining data from multiple sources to improve precision. Built a unified dashboard merging sales and HR data, providing clear and actionable insights at a glance. Enabled proactive planning and strategic decision-making using predictive analytics to forecast trends and visually highlight key performance indicators.",
            "Technologies": "[ PowerBI, Data Transformation, Power Query Editor ]",
            "Github": "Github",
            "period": "2024"
        },
        {
            "Title": "Todo Full Stack",
            "Description": "Built a comprehensive task management application using the MERN stack. Designed a user-friendly and responsive UI with Tailwind CSS. Integrated a chat feature to enhance user collaboration, enabling seamless communication within the app. Developed robust backend APIs to ensure smooth data handling and secure interactions between frontend and backend.",
            "Technologies": "[ ReactJs, ExpressJs, MongoDB, Tailwind CSS ]",
            "Github": "Github",
            "period": "2023"
        }
    ];
    return (
        <div className='h-auto my-1 flex flex-col items-center gap-5 px-2'>
            {data.map((i) => (
                <div className='grid grid-cols-4'>
                    <div className='col-span-3 p-4 bg-gray-100 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-bold text-black mb-2'>{i.Title}</h1>
                            <div>
                                <span className='bg-gray-200 text-black px-4 py-1 rounded-full text-sm mr-4'>
                                    {i.period}
                                </span>
                                <a
                                    href={i.Github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className=' hover:text-blue-800 text-sm no-underline font-medium'>
                                    GitHub
                                </a>
                            </div>

                        </div>
                        <div className='flex flex-col gap-3'>
                            <i className='text-[12px] text-gray-500 font-semibold'>{i.Technologies}</i>

                            <i className='text-base text-black mb-4'>
                                {i.Description}
                            </i>
                        </div>

                    </div>
                    <div className='col-span-1 '>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project