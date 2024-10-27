'use client';
import Link from "next/link";
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MobileLinks({ routes, navbar, setNavbar }) {
    const currentRoute = usePathname();

    return (
        <div>
            <button 
                onClick={() => setNavbar(prevNavbar => !prevNavbar)}
                className={`${styles.mobileButton} hidden text-white p-2 focus:outline-none hover:bg-gray-500 rounded-lg transition duration-600 ease-in-out`}
            >
                {navbar ? '✖' : '☰'}
            </button>
            <div className={`${navbar ? 'bg-slate-600 absolute top-24 inset-x-0 flex flex-col items-center justify-center w-screen' : 'hidden'}`}>
                {routes.map((route) => (
                    <Link 
                        className={`w-screen p-4 hover:bg-gray-100 hover:text-black ${currentRoute === route.path ? 'bg-gray-500 text-white' : 'text-white'} transition duration-500 ease-in-out hover:transition hover:duration-500 hover:ease-in-out text-white text-xl text-center`} 
                        href={route.path} key={route.title}
                        onClick={() => setNavbar(prevNavbar => !prevNavbar)}
                    >
                        {route.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MobileLinks