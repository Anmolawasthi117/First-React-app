import React from 'react'

function Footer() {
  return (
    <footer className='w-full h-[200px] p-8 bg-white flex flex-col'>
    <div className='flex flex-col gap-4' >
      
    
      <h1>thech.co</h1>
      <p>@all right reserved</p>
    </div>
    <div className='flex flex-col gap-4 justify-end items-end'>
    <h5>Follow us</h5>
    <div className='flex  gap-4'>
        <a href="#145">github</a>
        <a href="#961">insta</a>
        <a href="#78">linkedin</a>
    </div>
    </div>
    </footer>
  )
}

export default Footer
