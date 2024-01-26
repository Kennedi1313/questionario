"use client"
import { BsArrowDown, BsArrowUp, BsMenuUp, BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import './globals.css'
import { Inter } from 'next/font/google'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaXRay, FaXing } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    let main = document.getElementsByTagName('html');
    main[0]?.classList.toggle('dark');
    setDarkMode(!darkMode)
  }
  
  const [isResultEmpty, setIsResultEmpty] = useState(true);
  if (typeof window !== 'undefined') {
    if(localStorage.getItem('pontGeral') != null && isResultEmpty) {
      setIsResultEmpty(false);
    } else if (localStorage.getItem('pontGeral') == null && !isResultEmpty) {
      setIsResultEmpty(true);
    }
  }

  function toggleMenu() {
    var menu = document.getElementById('menu');
    menu?.classList.toggle('hidden');
    menu?.classList.toggle('w-[70%]');
    menu?.classList.toggle('h-screen');
    var toggle = document.getElementById('toggle-button');
    toggle?.classList.toggle('color-white');
    var bar = document.getElementById('bar-icon');
    bar?.classList.toggle('hidden');
    var times = document.getElementById('times-icon');
    times?.classList.toggle('hidden');  
  }

  const pathname = usePathname();
  return (
    <html lang="en" className='min-h-screen'>
      <body className={inter.className}>
        <button id="toggle-button"
            className="fixed right-0 top-2 w-12 h-14 block md:hidden z-[100] text-white"
            onClick={toggleMenu}>
            <FaBars id='bar-icon' className="w-6 h-8"></FaBars>
            <FaTimes id='times-icon' className="w-6 h-8 hidden"></FaTimes>
        </button>

        <div className='fixed top-0 z-50 w-full bg-black text-white shadow-md h-24'>
              <p className="font-semibold text-lg uppercase p-4 md:mt-4 md:ml-8" >
                Ferramenta para avaliação de Repositórios Institucionais
              </p>
              
        </div>
        <div id='menu' className="fixed hidden top-0 left-0 shadow-sm
            md:top-0 md:block md:w-full z-50">
              <div className="top-0 right-0 h-screen fixed w-[50%] md:w-full md:h-14 md:justify-end
                z-50 flex flex-col md:flex-row bg-black text-white md:bg-transparent px-5 pt-20 md:pt-8 md:mr-8 gap-2">
                <Link href='/' className='px-2'>
                  <span className={pathname == "/" ? "border-b-2 border-solid border-black" : ""}>
                    QUESTIONÁRIO
                  </span>
                </Link>
                <Link href='/sobre' className='px-2'>
                  <span className={pathname == "/sobre" ? "border-b-2 border-solid border-black" : ""}>
                    SOBRE
                  </span>
                </Link>
                <Link href='/diretrizes' className='px-2'>
                  <span className={pathname == "/sobre" ? "border-b-2 border-solid border-black" : ""}>
                    DIRETRIZES
                  </span>
                </Link>
                <Link href={ isResultEmpty ? '#' : '/result'} 
                  className={
                    isResultEmpty ? 'hidden' : 'px-2' 
                  } >
                  <span 
                    className={
                      pathname == "/result" ? "border-b-2 border-solid border-black" : ""
                    }>
                    RESULTADOS
                  </span>
                </Link>
              
                {/* darkMode ?
                  <BsSunFill className='cursor-pointer' onClick={toggleDarkMode}></BsSunFill>
                  :
                  <BsMoonStarsFill className='cursor-pointer' onClick={toggleDarkMode}></BsMoonStarsFill>
                */}
                </div>
              </div>
        <main id="main" className="flex min-h-screen flex-col items-center w-full self-center
          justify-betwee bg-gray-50 dark:bg-slate-950 dark:text-white md:px-4 z-10">
            <div className="md:w-[80%] pt-5 min-h-screen h-full pb-10">
              {children}
            </div>
        </main>
        <footer id='footer' className='flex bottom-0 p-2 w-full h-10 z-50 bg-gray-200 dark:bg-black dark:text-white text-sm font-light text-center items-center justify-center'>
          Created by <a href="https://github.com/Kennedi1313" className='m-2 border-b-[1px] border-solid border-gray-800'>Kennedi1313</a> |  2023
        </footer>
        <a href="#" className='fixed right-4 bottom-28 rounded-full w-12 h-12 bg-blue-700 text-white flex items-center justify-center font-extrabold text-2xl'>
            <BsArrowUp></BsArrowUp>
        </a>
        <a href="#footer" className='fixed right-4 bottom-14 rounded-full w-12 h-12 bg-blue-700 text-white flex items-center justify-center font-extrabold text-2xl'>
            <BsArrowDown></BsArrowDown>
        </a>
      </body>
    </html>
  )
}
