"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

// const ExampleComponent = () => {
//   return (
  


const HeroSection = () => {
  return (
    <section> 
        <div className="grid grid-cols-1 sm:grid-cols-12">
           <div className="col-span-7 place-self-center text-center sm:text-left">
             <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
               <span className="text-"> Hello, Im{" "} </span> 

               <br />
               <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Abdul Rehman',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack developer',
        1000,
        'Giaic Student',
        1000,
        
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    /> 
             </h1> 

             <p className="text-[#ADB7BE] text-base sm:text-lg mb-6  lg:text-xl">
                I am Abdul Rehman, a FULL STACK DEVELOPER Skilled in Next.js, 
                Typescript, Javascipt, Html, Css, Tailwind.css And Git.
             </p>

             <div>
                  <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-transparent hover:text-white border border-white">Hire me</button>
                  <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-white hover:text-black text-white border border-white mt-3">Download CV</button> 
             </div> 
               
           </div>
          
          <div className="col-span-5"> 
              <div className=" ">
                  <Image src="/images/mypic.png" alt="mypic" className="" width={300} height={300} />                     
              </div>
          </div> 
        </div>     
    </section>
  )
}

export default HeroSection;