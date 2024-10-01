'use client'
import Link from 'next/link'
import Image from 'next/image'
import PakmanGames from '@/public/images/pakmangames.png'

import { useState, useRef, useEffect } from 'react'

function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const expandRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const clickOutside = (e) => {
            if (expandRef.current && !expandRef.current.contains(e.target)) {
                setNavbar(false);
            }
        };

        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [navbar, expandRef]);

    return (
        <div>
            <nav className='bg-black flex justify-between items-center px-5 py-4'>
                <div id='logo' className='max-w-7xl sm:px-2 lg:px-4'>
                    <Link href='/' className='text-white p-2 flex gap-3 hover:bg-gray-500 rounded-lg transition duration-600 ease-in-out text-3xl'>
                        <Image src={PakmanGames} alt='PakmanGames' className='h-9 w-9'></Image>
                        <div>Andy Pak</div>
                    </Link>
                </div>
                
                <div className='md:hidden'>
                    <button 
                        onClick={() => setNavbar(!navbar)}
                        className='text-white p-2 focus:outline-none hover:bg-gray-500 rounded-lg transition duration-600 ease-in-out'
                    >
                        {navbar ? '✖' : '☰'}
                    </button>
                </div>

                <div 
                    id='links'
                    className={`flex-col md:flex md:flex-row md:gap-5 absolute md:relative left-0 w-full md:w-auto bg-black px-5 py-2 text-1xl text-center ${navbar ? 'block top-20' : 'hidden'}`}
                    ref={expandRef}
                >
                    <div className='hover:bg-gray-500 p-2 rounded-lg transition duration-600 ease-in-out'>
                        <Link href='/' className='text-white'>About</Link>
                    </div>

                    <div className='hover:bg-gray-500 p-2 rounded-lg transition duration-600 ease-in-out'>
                        <Link href='/skills' className='text-white'>Skills</Link>
                    </div>

                    <div className='hover:bg-gray-500 p-2 rounded-lg transition duration-600 ease-in-out'>
                        <Link href='/projects' className='text-white'>Projects</Link>
                    </div>

                    <div className='hover:bg-gray-500 p-2 rounded-lg transition duration-600 ease-in-out'>
                        <Link href='/contact' className='text-white'>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar