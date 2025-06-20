'use client';
import Link from "next/link";
import styles from './Navbar.module.css';
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegularLinks({ routes }) {
    const currentRoute = usePathname();

    return (
        <div 
                id='links'
                className={`${styles.regularNavbar} flex-col md:flex md:flex-row md:gap-3 absolute md:relative left-0 w-full md:w-auto bg-transparent px-5 py-2`}
            >
            {routes.map((route) => (
                <Link 
                    key={route.title}
                    href={route.path}
                    className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out hover:scale-105 ${
                        currentRoute === route.path 
                            ? 'bg-blue-800 text-white shadow-lg shadow-blue-600/25' 
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon 
                            icon={route.icon} 
                            className={`text-sm transition-transform duration-300 group-hover:scale-110 ${
                                currentRoute === route.path ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]' : ''
                            }`}
                        />
                        <span className="text-sm font-medium">{route.title}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default RegularLinks