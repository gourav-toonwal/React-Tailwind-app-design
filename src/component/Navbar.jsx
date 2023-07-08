import React , {useState}from 'react'
import { FaBeer , FaUserMinus} from "react-icons/fa";

const Navbar = () => {
  const [nav,setNav] = useState(false);

  const navHandler = () =>{
    setNav(!nav)
  }
  return (
    <div className='text-[#d6e4ff] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-bold'>
      <h1 className='w-full text-3xl font-bold text-[#d6e4ff]'>Sunstone.</h1>
     <ul className=' md:flex hidden'>
      <li className='p-4'>Home</li>
      <li className='p-4'>Calender</li>
      <li className='p-4'>Community</li>
      <li className='p-4'>Jobs</li>
      <li className='p-4'>Buzz</li>
     </ul>
     <div onClick={navHandler} className=' md:hidden'>
      {!nav ?<FaBeer size={20}/> : <FaUserMinus size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#b1cdff] ease-in-out duration-500 ' : 'fixed left-[-100%] '} >
      <h1 className='w-full text-3xl font-bold text-[#002590] m-4'>Sunstone.</h1>

        <ul className=' uppercase p-4'>

      <li className='p-4 border-b border-b-[#002590] '>Home</li>
      <li className='p-4 border-b border-b-[#002590] '>Calender</li>
      <li className='p-4 border-b border-b-[#002590] '>Resoucres</li>
      <li className='p-4 border-b border-b-[#002590] '>Buzz</li>
      <li className='p-4'>about</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar;