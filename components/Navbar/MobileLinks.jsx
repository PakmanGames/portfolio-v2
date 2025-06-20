'use client';
import Link from "next/link";
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MobileLinks({ routes, navbar, setNavbar }) {
    const currentRoute = usePathname();

    return (
        <div className="z-20">
            <button 
                onClick={() => setNavbar(prevNavbar => !prevNavbar)}
                className={`${styles.mobileButton} text-white p-2 focus:outline-none hover:bg-white/10 rounded-xl transition-all duration-300 ease-in-out`}
                aria-label="Toggle navigation menu"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                        navbar ? 'rotate-45 translate-y-1' : '-translate-y-1'
                    }`} />
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                        navbar ? 'opacity-0' : 'opacity-100'
                    }`} />
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                        navbar ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                    }`} />
                </div>
            </button>
            <div className={`${navbar ? 'bg-gradient-to-b from-gray-900 to-black absolute top-20 inset-x-0 flex flex-col items-center justify-center w-screen z-50 shadow-2xl border-t pb-5 rounded-b-xl border-gray-800' : 'hidden'}`}>
                {routes.map((route, index) => (
                    <Link 
                        key={route.title}
                        href={route.path}
                        onClick={() => setNavbar(prevNavbar => !prevNavbar)}
                        className={`group relative w-full max-w-sm mx-4 px-6 py-4 rounded-2xl transition-all duration-300 ease-in-out transform ${
                            navbar ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        } ${
                            currentRoute === route.path 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                                : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon 
                                icon={route.icon} 
                                className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                                    currentRoute === route.path ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]' : ''
                                }`}
                            />
                            <span className="text-lg font-medium">{route.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MobileLinks