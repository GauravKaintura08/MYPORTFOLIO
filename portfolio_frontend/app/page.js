'use client'
import About from "@/Components/About";
import Header from "@/Components/Header";
import MyWork from "@/Components/MyWork";
import MyServices from "@/Components/Services";
import Navbar from "@/Components/Navbar";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  // Code for the dark mode or light mode 
  const [dark,setDark] = useState(false);


  useEffect(()=>{
    if(localStorage.theme ==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setDark(true);
    }
    else{
      setDark(false)
    }
  },[])

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[dark])
  return (
   <>
   <Navbar dark={dark} setDark={setDark}/>
   <Header dark={dark} />
   <About dark={dark}/>
   <MyServices dark={dark} />
   <MyWork dark={dark} />
   <Contact dark={dark} />
   <Footer dark={dark}/> 
   </>
  );
}
