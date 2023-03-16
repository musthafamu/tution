import React from 'react'
import { BsFillTelephonePlusFill } from "react-icons/bs";


function apply() {
  return (  

   
    <div className='flex justify-center mt-7'>
      <form method='POST' action='https://getform.io/f/d55d06e8-f367-4583-8745-0c9046e6739c' className='flex p-3 bg-gradient-to-b from-gray-900 to-gray-600  w-[300px] md:w-[500px] flex-col'>
      <input  type="text" required placeholder='Name' name='Name' className='w-full  bg-white shadow appearance-none border rounded border-blue-600   py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'   />
          <input  type="number" required placeholder=' Phone number' name='number' className='w-full  bg-white shadow appearance-none border rounded border-blue-600   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'   />
          <input  type="text" required placeholder='Class' name='class' className='w-full my-2  bg-white shadow appearance-none border rounded border-blue-600   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'   />


          <input  type="email"  placeholder='Email' name='email' className='w-full  bg-white shadow appearance-none border rounded border-blue-600   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'   />
                <button type="submit" className='text-white border-2 my-2 bg-orange-500  p-2 rounded-md border-none '>Apply</button>
     
      </form>
    </div>

  
  )
}

export default apply