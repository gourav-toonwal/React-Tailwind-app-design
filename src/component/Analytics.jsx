import React from 'react'
import Laptop from '../assest/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#c4a518] font-bold'>The Sunstone Philosophy</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Practise In The Real World</h1>
          <p>
            CEOs, CTOs, and COOs of Fortune 500 companies and start-ups with years of recruitment experienc
            Gain hands-on experience with internships & real-life projects to be job-ready from Day 1Showcase your verified skills and experience with a professional portfolioLearn from Recruiters
            Learn from MDs, CEOs & Founders of leading companies with 10+ years of hiring experience



          </p>
          <button className='bg-black text-[#c4a518] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>get started</button>
        </div>
      </div>
    </div>

  )
}

export default Analytics