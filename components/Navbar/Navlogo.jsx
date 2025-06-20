import Link from 'next/link';
import Image from 'next/image'
import PakmanGames from '@/public/images/pakmangames.png'

function Navlogo({ setNavbar }) {
    return (
        <Link 
            onClick={() => setNavbar(false)} 
            href='/' 
            className='flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300 ease-in-out hover:scale-105 group'
        >
            <div className="relative">
                <Image 
                    src={PakmanGames} 
                    alt='PakmanGames' 
                    className='h-10 w-10 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300'
                    priority
                />
            </div>
            <div className='text-2xl font-bold text-white tracking-tight hover:text-white transition-colors duration-300'>
                Andy Pak
            </div>
        </Link>
    );
}

export default Navlogo