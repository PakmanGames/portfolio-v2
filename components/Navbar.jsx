'use client'
import Link from 'next/link'
import Image from 'next/image'
import PakmanGames from '@/public/images/pakmangames.png'

import { useState } from 'react'

function Navbar() {

    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className='bg-black flex justify-between items-center px-5 py-4'>
                <div id='logo' className='max-w-7xl sm:px-2 lg:px-4'>
                    <Link href='/' className='text-white p-2 flex gap-3 hover:bg-gray-500 rounded-lg'>
                        <Image src={PakmanGames} alt='PakmanGames' className='h-6 w-6'></Image>
                        <div>Andy Pak</div>
                    </Link>
                </div>
                
                <div className='md:hidden'>
                    <button 
                        onClick={() => setNavbar(!navbar)}
                        className='text-white p-2 focus:outline-none'
                    >
                        {navbar ? '✖' : '☰'} {/* Toggle between open and close icons */}
                    </button>
                </div>

                <div 
                    id='links'
                    className={`flex-col md:flex md:flex-row md:gap-5 absolute md:relative left-0 w-full md:w-auto bg-black px-5 py-2 ${navbar ? 'block top-16' : 'hidden'}`}
                >
                    <div className='hover:bg-gray-500 p-2 rounded-lg'>
                        <Link href='/' className='text-white'>About</Link>
                    </div>

                    <div className='hover:bg-gray-500 p-2 rounded-lg'>
                        <Link href='/skills' className='text-white'>Skills</Link>
                    </div>

                    <div className='hover:bg-gray-500 p-2 rounded-lg'>
                        <Link href='/projects' className='text-white'>Projects</Link>
                    </div>

                    <div className='hover:bg-gray-500 p-2 rounded-lg'>
                        <Link href='/contact' className='text-white'>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar