import React from 'react'
import Second from './second'
import {  Route,Routes,Link} from 'react-router-dom'

function Main() {
  return (
    <div>
      
      <div className='relative'>
     <div className='absolute w-full  h-[340px] md:h-[550px] bg-gradient-to-r from-black'></div>
     <img className=' w-full object-cover h-[340px] md:h-[550px] '  src='https://images.pexels.com/photos/3776190/pexels-photo-3776190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  /> 
        
      </div>
      <div className='absolute top-[200px] md:top-[350px] '>
               <div className='flex flex-col gap-4 px-4'>
                <h1 className='md:text-4xl text-[1.3rem] font-bold'>Brilliance institute of education  <div className='py-2'>An online eduction center</div></h1>
                <p className='md:text-2xl text-[1.1rem] '>Way to catch your dream</p>
                <Link to='/contact'>
                <button className='bg-orange-500 md:p-3 font-bold md:w-[150px] px-2 py-2 rounded-md shadow-2xl'>Contact us</button>
                </Link>
               </div>
            </div>
          <Second/>

    </div>
  )
}

export default Main