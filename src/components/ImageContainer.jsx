import React from 'react'

const ImageContainer = () => {
  return (
    <div className='w-full overflow-hidden bg-transparent h-[50vh]  md:h-[100vh]'>
      <img src='imagecontainer.jpg' className='w-full object-cover top-[20vh] z-[-10] fixed h-[50vh] md:h-[70vh]'/>
    </div>
  )
}

export default ImageContainer
