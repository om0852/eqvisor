import React from 'react'

const TeamCard = () => {
  return (
    <div className='w-[40vh] md:w-[50vh] h-[60vh] rounded-4xl overflow-hidden' style={{borderRadius:"2vh"}}>
      <div className='w-full h-[75%] bg-red-500 '><img src='/omsalunke.jpeg' className='object-cover bg-cover w-full h-full'/></div>
      <div  className='w-full h-[25%] flex flex-col justify-center items-start pl-10 bg-black text-white'>
        <h1 className='text-2xl'>Om sachin salunke</h1>
        <h1 className='text-xl'>Web developer</h1>
      </div>
    </div>
  )
}

export default TeamCard
