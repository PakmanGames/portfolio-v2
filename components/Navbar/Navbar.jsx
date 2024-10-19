'use client'
import Link from 'next/link'
import Navlogo from './Navlogo'
import styles from './Navbar.module.css'
import { useState } from 'react'

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const routes = [
        {
            title: 'About',
            path: '/',
        },
        {
            title: 'Skills',
            path: '/skills',
        },
        {
            title: 'Projects',
            path: '/projects',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
    ]

    return (
        <div className='bg-black flex justify-between items-center px-5 py-4 h-24'>
            <Navlogo />

            <button 
                onClick={() => setNavbar(prevNavbar => !prevNavbar)}
                className={`${styles.mobileButton} hidden text-white p-2 focus:outline-none hover:bg-gray-500 rounded-lg transition duration-600 ease-in-out`}
            >
                {navbar ? '✖' : '☰'}
            </button>
            <div className={`${navbar ? 'bg-slate-600 absolute top-24 inset-x-0 flex flex-col items-center justify-center w-screen' : 'hidden'}`}>
                {routes.map((route) => (
                    <Link className='w-screen p-4 hover:bg-gray-500 transition duration-600 ease-in-out text-white text-xl text-center' 
                        href={route.path} key={route.title}
                    >
                        {route.title}
                    </Link>
                ))}
            </div>

            <div 
                id='links'
                className={`${styles.regularNavbar} flex-col md:flex md:flex-row md:gap-5 absolute md:relative left-0 w-full md:w-auto bg-black px-5 py-2`}
            >
                {routes.map((route) => (
                    <Link className='p-3 rounded-2xl hover:bg-gray-500 transition duration-600 ease-in-out text-white text-xl text-center' 
                        href={route.path} key={route.title}
                    >
                        {route.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar