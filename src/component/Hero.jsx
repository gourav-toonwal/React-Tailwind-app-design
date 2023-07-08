import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white '>
            <div className=' max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center   '>
                <p className=' text-[#c8dafe] font-bold p-2'>GROWING WITH DATA ANALYTICS </p>
                <h1 className='md:text-7xl sm:6xl text-4xl font-bold  md:py-4'>Grow with data</h1>
                <div className=' flex justify-center items-center py-3'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold '> 200% Better Placements* with </p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#c4a518]' strings={['MBA', 'MCA', 'BBA' ,'BCA' ,'B.Tech']} typeSpeed={200} backSpeed={80} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-[#c4a518]'>Secure your future with our corporate tie-ups</p>
                <button className='bg-[#a4c2ff] text-slate-950 rounded w-[200px] px-6 my-6 mx-auto py-2 font-medium hover:bg-[#bf9200]'>Get started</button>
            </div>
        </div>
    )
}

export default Hero;