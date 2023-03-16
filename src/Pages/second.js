import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { GiTwoCoin,GiTakeMyMoney } from "react-icons/gi";

function Second() {

  return (
    <div className='flex  flex-col lg:flex-row lg:items-center'>
     <div className='bg-red-400 lg:w-[900px] h-[300px] hover:scale-110 duration-300'>
<div className='flex flex-col items-center justify-center gap-3  py-7'>
<i><GiClockwork size={30} color='black'/></i>

<h1 className='font-bold text-2xl'> Our Classes</h1>
<p className='px-3 md:text-[1.1rem] font-serif'>Live Google meet class from monday to saturday And weekly student assesment tests. doubt Clarification section everyday. Study anywhere anytime, either using your mobile, desktop or laptop. Download lessons and view them offline or stream them directly. Designed for your convenience
</p>
</div>
 
</div>
     <div className='bg-green-400 lg:w-[900px] h-[300px] hover:scale-110 duration-300'>
<div className='flex flex-col items-center justify-center gap-3  py-7'>
<i><GiTeacher size={30} color='black'/></i>

<h1 className='font-bold text-2xl'> Teachers</h1>
<p className='px-3 md:text-[1.1rem] font-serif'>Highly Talented and experienced teachers from kerala who are willing to assist you all the time


</p>
</div>
 
</div>
     <div className='bg-yellow-400 lg:w-[900px] lg:h-[300px] hover:scale-110 duration-300'>
<div className='flex flex-col items-center justify-center gap-3  py-7'>
<i><GiTakeMyMoney size={30} color='black'/></i>

<h1 className='font-bold text-2xl'> Our Classes</h1>
<p className='px-3 md:text-[1.1rem] font-serif'>a one-year fee of 4000 rs per student. total money will be given back to students if students are scored less than 60% of marks in the Board exam.
</p>
</div>
 
</div>

    </div>
    
  )
}

export default Second