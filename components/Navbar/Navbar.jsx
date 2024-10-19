'use client'
import Link from 'next/link'
import Navlogo from './Navlogo'
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
                {routes.map((route) => (
                    <Link className='hover:bg-gray-500 p-2 rounded-lg transition duration-600 ease-in-out text-white' 
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