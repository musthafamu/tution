import React, { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBars, FaBeer, FaTimes } from "react-icons/fa";
import {  Route,Routes,Link} from 'react-router-dom';



function Navbar() {

  const [menu,setmenu]=useState(false)
  const handleclick=()=>setmenu(!menu)

  
  return (
    <div className=''>
     <div className='bg-black  flex lg:pb-3 justify-around items-center w-full p-3   lg:w-full md:w-full   lg:h-[90px] '>
        <h1 className='text-4xl  font-bold lg:text-[50px] whitespace-nowrap '>Brilliance</h1>
        <Link to='/apply'>
                <button className=' md:hidden bg-orange-500 px-9 py-2 rounded'>Apply Now</button>
                </Link>
        <ul className=' hidden lg:flex md:flex items-center justify-between'>
        <div className='flex items-center pl-5 '>
       <i><FaTelegramPlane size={24} color='orange'/></i>
            <div className='flex flex-col'>
               <h1 className=' py-2 font-bold'>Email</h1>
               <p>sibin.os.g@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center '>
       <i> <BsTelephoneFill size={24} color='orange'/> </i>
            <div className='flex flex-col'>
               <h1 className=' py-2 font-bold'>Phone</h1>
               <p>7034548062</p>
            </div>
          </div>
          <Link to='/apply'>
                <button className=' ml-4 bg-orange-500 px-9 py-2 rounded'>Apply Now</button>
                </Link>
        </ul>
    </div> 
    <div className='rounded-lg shadow-xl  w-full h-[80px] flex justify-between items-center  bg-[#0a192f] '>
    <ul className=' md:hidden flex '>
      <div className='flex items-center pl-5 '>
       <i><FaTelegramPlane size={24} color='orange'/></i>
            <div className='flex flex-col'>
               <h1 className=' py-2 font-bold'>Email</h1>
               <p>sibin.os.g@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center '>
       <i> <BsTelephoneFill size={24} color='orange'/> </i>
            <div className='flex flex-col'>
               <h1 className=' py-2 font-bold'>Phone</h1>
               <p>7034548062</p>
            </div>
          </div>
    </ul>
      <ul className=' hidden w-full gap-9 md:flex justify-center font-bold '>
        <li className='mx-3 text-[1.3rem] hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='/' >
            Home
          </Link>
        </li>
        <li className='mx-7 text-[1.3rem] hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='/course'>
            Courses
          </Link>
        </li>
        <li className='mx-3 text-[1.3rem] hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link to='/contact' >
          Contact
          </Link>
        </li>
      
        
      </ul>
    
    
      <div onClick={handleclick} className='md:hidden'>
        {!menu? <div className='duration-1000'> <FaBars size={35} /></div>:<div className='duration-1000 bg-yellow-200'><FaTimes size={35}/> </div>}  
      </div>
      
   
    <ul className= {!menu ?' hidden duration-1000':  'md:hidden absolute right-0 w-full border font-bold border-sky-600 p-[100px] rounded shadow-xl ml-3 bg-gray-900 top-[150px] flex flex-col justify-center items-center duration-1000 z-50'}>

    <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='/' spy={true} offset={-100} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='/course'  >
            Courses
          </Link>
        </li>
        <li className='mx-3 my-2 hover:border-b-2 hover:border-b-sky-700 duration-50'>
        <Link onClick={handleclick} to='/contact' >
            Contact
          </Link>
        </li>
       
    </ul>
    
    </div>
    

</div>
    
  

   

  
  )
}

export default Navbar