import React from 'react'
import "./style.css"
import { motion } from "motion/react" 
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-36'>
        <div className='text-center sm:flex items-center justify-between mx-[10%]  py-6'>
        <a href="#top">
        <h1 className='firstname'>Gaurav <span className='caste'> Kaintura</span></h1>
        </a>
        <motion.p
        initial={{opacity: 0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.4}}
        >Copyright &copy; 2025 Gaurav Kaintura. All rights reserved.</motion.p>
        <motion.ul
        initial={{opacity: 0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.4}}
        className='flex items-center gap-10 justify-center mt-4 sm:gap-4'>
            <li><a target='_blank' href="https://github.com/gauravkaintura08"><Image src={assets.github} className='w-6  rounded-full mix-blend-screen m-0' alt=''/>Github</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/gaurav-kaintura-41239120b/"><Image src={assets.linkedIn} className='w-6 rounded-full bg-white m-0' alt=''/>LinkedIn</a></li>
        </motion.ul>
        </div>
    </div>
  )
}

export default Footer