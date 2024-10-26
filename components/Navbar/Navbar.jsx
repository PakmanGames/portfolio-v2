'use client';
import Navlogo from './Navlogo';
import MobileLinks from './MobileLinks';
import { useState } from 'react';
import RegularLinks from './RegularLinks';

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
            <Navlogo setNavbar={setNavbar}/>

            <MobileLinks routes={routes} navbar={navbar} setNavbar={setNavbar}/>

            <RegularLinks routes={routes}/>
        </div>
    );
}

export default Navbar