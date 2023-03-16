import React from 'react'
import {  Route,Routes,Link} from 'react-router-dom';

function Course() {
  return (
    <div className='w-full'>
      <h1 className='text-center py-4 text-3xl font-bold'>Course we offer</h1>
      <div className='w-full flex gap-3 flex-col items-center md:flex-row md:justify-center'>
      <div className='relative w-[300px]  h-[300px] shadow-2xl bg-gray-900'>
          <div className='absolute w-[300px] h-[200px] bg-gradient-to-r from-black'></div>
            <img className='w-[300px] h-[200px]' src='https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='one'   />
               <div className='absolute top-[70px] px-[120px] '>
                <h1 className='text-center text-[1.4rem] font-bold'>10th <div>Standard</div></h1>
               </div>
               <div className='text-center py-3'>
                <div className='py-2 text-[1.2rem]'>Online class for 10th</div>
                <Link to='/apply'>
                <button className='bg-orange-500 px-9 py-2 rounded'>Join</button>

                </Link>
               </div>
          </div>
          <div className='relative w-[300px] h-[300px] shadow-2xl bg-gray-900'>
          <div className='absolute w-[300px] h-[200px] bg-gradient-to-r from-black'></div>
            <img className='w-[300px] h-[200px]' src='https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg' alt='second'   />
               <div className='absolute top-[70px] px-[120px] '>
                <h1 className='text-center  text-[1.4rem] font-bold'>8,9 <div>Standard</div></h1>
               </div>
               <div className='text-center py-3'>
                <div className='py-2 text-[1.2rem]'>Online class for 8,9th</div>
                <Link to='/apply'>
                <button className='bg-orange-500 px-9 py-2 rounded'>Join</button>

                </Link>
               </div>
          </div>
          <div className='relative w-[300px] h-[300px] shadow-2xl bg-gray-900'>
          <div className='absolute w-[300px] h-[200px] bg-gradient-to-r from-black'></div>
            <img className='w-[300px] h-[200px]' src='https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='third'   />
               <div className='absolute top-[70px] px-[120px] '>
                <h1 className='text-center  text-[1.4rem] font-bold'>+1,+2 Science </h1>
               </div>
               <div className='text-center py-3'>
                <div className='py-2 text-[1.2rem]'>Online class for +1,+2 Science</div>
                <Link to='/apply'>
                <button className='bg-orange-500 px-9 py-2 rounded'>Join</button>

                </Link>
               </div>
          </div>


      </div>
    </div>
  )
}

export default Course