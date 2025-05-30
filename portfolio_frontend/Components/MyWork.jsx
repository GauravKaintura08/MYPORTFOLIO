import { workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react" 

const MyWork = () => {
  return ( 
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20 mt-7'
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'
      initial={{y:-20,opacity: 0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      >My Portfolio</motion.h4>

      <motion.h1 className='text-center mb-2 text-5xl font-Ovo'
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.7}}
      >My Latest Work</motion.h1>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.9}}
      >
     Welcome to my web development portfolio ! <br /> Explore my collection of projects showcasing my experties in Web Developement.
      </motion.p>
      <div className='grid grid-cols-auto my-10 gap-5 '>
  {workData.map((project, index) => (
    <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        style={{ backgroundImage: `url(${project.bgImage})`}}
        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group dark:hover:shadow-white'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
          <div>
            <h2 className='text-black'>{project.title}</h2>
            <p className='text-sm text-gray-700'>{project.description}</p>
          </div>
          <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-300 transition'>
            <Image src={assets.send_icon} alt='send icon' className='w-3' />
          </div>
        </div>
      </motion.div>
    </a>
  ))}
</div>

   
      <motion.a href="https://github.com/gauravkaintura08" target="_blank" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 p-3 dark:bg-white dark:text-black dark:hover:shadow-white'
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:1.1}}
      >Show More<Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/> </motion.a>
      </motion.div>
  )
}

export default MyWork