import React from 'react'
import TeamCard from './TeamCard'

const TeamContainer = () => {
  return (
    <div className='w-full  gap-4 grid grid-cols-3 grid-rows-auto py-5'>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
  )
}

export default TeamContainer