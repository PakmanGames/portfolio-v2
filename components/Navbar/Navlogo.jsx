import Link from 'next/link';
import Image from 'next/image'
import PakmanGames from '@/public/images/pakmangames.png'

function Navlogo() {
    return (
        <div>
            <Link href='/' className='flex text-white gap-3 p-2 rounded-lg hover:bg-gray-500 transition duration-600 ease-in-out'>
                <Image src={PakmanGames} alt='PakmanGames' className='h-9 w-9'></Image>
                <div className='text-3xl'>Andy Pak</div>
            </Link>
        </div>
    );
}

export default Navlogo