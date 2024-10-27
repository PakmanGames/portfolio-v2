import Link from 'next/link';
import Image from 'next/image'
import PakmanGames from '@/public/images/pakmangames.png'

function Navlogo({ setNavbar }) {
    return (
        <Link 
            onClick={() => setNavbar(false)} href='/' 
            className='flex text-white gap-3 p-2 rounded-lg hover:bg-gray-500 transition duration-700 ease-in-out hover:transition hover:duration-700 hover:ease-in-out'
        >
            <Image src={PakmanGames} alt='PakmanGames' className='h-9 w-9'></Image>
            <div className='text-3xl'>Andy Pak</div>
        </Link>
    );
}

export default Navlogo