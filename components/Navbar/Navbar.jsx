'use client';
import Navlogo from './Navlogo';
import MobileLinks from './MobileLinks';
import { useState } from 'react';
import RegularLinks from './RegularLinks';
import { faUser, faCode, faFileCode, faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [navbar, setNavbar] = useState(false);

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
            title: 'Contact',
            path: '/contact',
            icon: faPhone,
        },
    ]

    return (
        <div className='bg-black flex justify-between items-center px-5 py-4 h-24'>
            <Navlogo setNavbar={setNavbar}/>

            <MobileLinks routes={routes} navbar={navbar} setNavbar={setNavbar}/>

            <RegularLinks routes={routes}/>
        </div>
    );
}

export default Navbar