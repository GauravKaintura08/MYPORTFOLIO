import { serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react" 
const myservices = () => {
  return (
  
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
      <motion.h1 className='text-center mb-2 text-5xl font-Ovo'
      initial={{y:-20,opacity: 0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      >My Services</motion.h1>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.7}}
      >
      I am a Master of Computer Application (MCA) student from India with a passion for crafting digital solutions. As a freelancer, I work with diverse clients, delivering high-quality projects tailored to their needs.
      </motion.p>
      
      <motion.div className='grid grid-cols-auto gap-6 my-10'
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.9}}
      >
        {
        serviceData.map(({icon,title,description , link},index)=>(
          <motion.div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 dark:hover:shadow-white'
          whileHover={{scale:1.07}}
          >
            <Image src={icon} alt='' className='w-12 rounded-full'/>
            <h3 className='text-lg my-4'>{title}</h3>
            <p className='text-sm  leading-5'>
              {description}
            </p>
          </motion.div>
        ))
        }
      </motion.div>
      </motion.div>
  )
}

export default myservices