import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react" 

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{opacity: 0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        >Introduction</motion.h4>


        <motion.h1 className='text-center mb-2 text-5xl font-Ovo'
        initial={{opacity: 0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        >About Me</motion.h1>

    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:0.8}}
    className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        
        <motion.div
        initial={{opacity: 0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'><Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/></motion.div>
        
        <motion.div className='flex-1'
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.8}} >
            <p>I am a skilled full-stack web developer with expertise in building dynamic, responsive, and user-friendly web applications. Proficient in front-end technologies like React.js, Next.js, and modern CSS frameworks, and back-end tools such as Node.js, Express.js, and MongoDB, I seamlessly bridges the gap between design and functionality. With a strong understanding of RESTful APIs, database management, and deployment pipelines, he ensures robust and scalable solutions.</p>
            
            <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-4'
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8,delay:1}}
            >
                {
                    infoList.map(({ icon, icondark, title, description }, index)=>(
                        <motion.li className='myclss border-[0.5px] border-gray-400 rounded-xl cursor-pointer pl-4 hover:-translate-y-1 duration-500 hover:shadow-black ' key={index}
                        whileInView={{opacity:1.05}}
                        >
                        <Image src={icon} alt={title} className='w-5 mt-3 '/>
                        <h3 className='my-4 font-semibold '>{title}</h3>
                        <p className=' text-sm pb-4'>{description}</p>
                        </motion.li>
                 ))
                }
            </motion.ul>
            
            <motion.h4 className='my-6 text-gray-700 font-Ovo dark:text-white'
            initial={{y:20,opacity: 0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1.3,delay:0.5}}
            >Tools I Use</motion.h4>
            
            <motion.ul className='flex items-center gap-3 sm:gap-5'
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5,delay:0.6}}
            >
                {
                    toolsData.map((icon,index)=>(
                        <motion.li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}
                        whileHover={{scale:1.1}}
                        >
                            <Image src={icon} alt='tool' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))
                }
            </motion.ul>
        </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default About