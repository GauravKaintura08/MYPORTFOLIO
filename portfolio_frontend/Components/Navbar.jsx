import { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import "./style.css"

const Navbar = ({dark,setDark}) => {


  const [newfalse,setnewfalse]= useState(false);
  const [scroll,setScroll]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(screenY>50){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    })
  },[])

  //sidebar hide hojao
  const handleMenuClick = () => {
    setnewfalse(false); 
  };

  return (
    <>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${scroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
        <a href="#top">
        <h1 className='firstname'>Gaurav <span className='caste'> Kaintura</span></h1>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${scroll ? "" :"bg-white shadow-sm bg-opacity-50"}`}>
            <li><a href="#top" className='font-Ovo'>Home</a></li>
            <li><a href="#about" className='font-Ovo'>About</a></li>
            <li><a href="#services" className='font-Ovo'>Services</a></li>
            <li><a href="#work" className='font-Ovo'>My Work</a></li>
            <li><a href="#contact" className='font-Ovo'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={() => setDark(prev => !prev)}> 
            <Image src={dark ? assets.lightmode :assets.darkmode } alt='' className='moon_icon'/>
          </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={dark ? assets.right_arrow_white :assets.arrow_icon} className='w-3' alt=''/></a>
          <button className='block md:hidden ml-3'>
            <Image src={dark ? assets.menu_white:assets.menu_black} alt='' className='menu_black ' onClick={()=>setnewfalse(true)}/>
          </button>
        </div>

        {/* Mobile Menu */}
        {
          newfalse ?
        <ul className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-gray-300 transition duration-500 dark:bg-white dark:text-black'>

          <div className='absolute right-6 top-6'>
            <Image src={assets.close_black} alt='' className='close-black cursor-pointer' onClick={()=>setnewfalse(false)}/>
          </div>
            <li onClick={handleMenuClick}><a href="#top" className='font-Ovo'>Home</a></li>
            <li onClick={handleMenuClick}><a href="#about" className='font-Ovo'>About</a></li>
            <li onClick={handleMenuClick}><a href="#services" className='font-Ovo'>Services</a></li>
            <li onClick={handleMenuClick}><a href="#work" className='font-Ovo'>My Work</a></li>
            <li onClick={handleMenuClick}><a href="#contact" className='font-Ovo'>Contact Me</a></li>
        </ul>
        :<></>
        }
    </nav>
    </>
    
  )
}

export default Navbar
