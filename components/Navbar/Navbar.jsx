'use client';
import Navlogo from './Navlogo';
import MobileLinks from './MobileLinks';
import { useState, useEffect } from 'react';
import RegularLinks from './RegularLinks';
import { faUser, faCode, faFileCode, faPhone, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const routes = [
        {
            title: 'About',
            path: '/',
            icon: faUser,
        },
        {
            title: 'Skills',
            path: '/skills',
            icon: faCode,
        },
        {
            title: 'Projects',
            path: '/projects',
            icon: faFileCode,
        },
        {
            title: 'Resume',
            path: '/resume',
            icon: faFileAlt,
        },
        {
            title: 'Contact',
            path: '/contact',
            icon: faPhone,
        },
    ]

    return (
        <div
            className={`sticky top-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm border-b border-gray-800/50 flex justify-between items-center px-5 py-4 h-20 z-50 transition-shadow duration-300 ${
                scrolled ? 'shadow-2xl' : ''
            }`}
        >
            <Navlogo setNavbar={setNavbar}/>
            <MobileLinks routes={routes} navbar={navbar} setNavbar={setNavbar}/>
            <RegularLinks routes={routes}/>
        </div>
    );
}

export default Navbar;