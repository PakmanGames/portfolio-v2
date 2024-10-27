'use client';
import Link from "next/link";
import styles from './Navbar.module.css';
import { usePathname } from "next/navigation";

function RegularLinks({ routes }) {
    const currentRoute = usePathname();

    return (
        <div 
                id='links'
                className={`${styles.regularNavbar} flex-col md:flex md:flex-row md:gap-5 absolute md:relative left-0 w-full md:w-auto bg-black px-5 py-2`}
            >
            {routes.map((route) => (
                <Link 
                    className={`p-3 rounded-2xl hover:bg-gray-100 hover:text-black ${currentRoute === route.path ? 'bg-gray-400 text-black' : 'text-white'} transition duration-500 ease-in-out hover:transition hover:duration-500 hover:ease-in-out text-xl text-center`} 
                    href={route.path} key={route.title}
                >
                    {route.title}
                </Link>
            ))}
        </div>
    );
}

export default RegularLinks