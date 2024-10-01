import Image from 'next/image';
import Link from 'next/link';

import moreProjects from '@/public/images/moreprojects.png';
import planetPal from '@/public/images/planetpal.jpg';
import stroom from '@/public/images/stroom.jpg';
import menti from '@/public/images/menti.jpg';

function Projects() {
    return (
        <div className="flex flex-grow flex-wrap justify-center items-center gap-10 m-5">
            <div className='flex flex-col justify-center items-center gap-7 border-solid border-8 border-blue-950 rounded-2xl p-5 text-center bg-slate-100'>
                <div className='text-3xl'>PlanetPal</div>
                <div>
                    <Image src={planetPal} alt='PlanetPal image cover' className='w-xl md:w-2xl h-auto border-solid rounded-2xl border-8 border-black'></Image>
                </div>
                <div>
                    <Link href='/projects/planetpal' className='border-solid border-4 border-black text-white bg-blue-300 rounded-xl p-2 hover:bg-blue-500 hover:shadow-xl transition duration-600 ease-in-out'>Click to Learn More</Link>
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-7 border-solid border-8 border-blue-950 rounded-2xl p-5 text-center bg-slate-100'>
                <div className='text-3xl'>Stroom</div>
                <div>
                    <Image src={stroom} alt='Stroom image cover' className='w-xl md:w-2xl h-auto border-solid rounded-2xl border-8 border-black'></Image>
                </div>
                <div>
                    <Link href='/projects/stroom' className='border-solid border-4 border-black text-white bg-blue-300 rounded-xl p-2 hover:bg-blue-500 hover:shadow-xl transition duration-600 ease-in-out'>Click to Learn More</Link>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-7 border-solid border-8 border-blue-950 rounded-2xl p-5 text-center bg-slate-100'>
                <div>
                    <div className='text-3xl'>PlanetPal</div>
                    <dir>WINNER at Serenity Hacks 2024</dir>
                </div>
                <div>
                    <Image src={menti} alt='Menti image cover' className='w-xl md:w-2xl h-auto border-solid rounded-2xl border-8 border-black'></Image>
                </div>
                <div>
                    <Link href='/projects/menti' className='border-solid border-4 border-black text-white bg-blue-300 rounded-xl p-2 hover:bg-blue-500 hover:shadow-xl transition duration-600 ease-in-out'>Click to Learn More</Link>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-7 border-solid border-8 border-blue-950 rounded-2xl p-5 text-center bg-slate-100'>
                <div className='text-3xl'>MORE PROJECTS TO BE ADDED</div>
                <div>
                    <Image src={moreProjects} alt='PlanetPal image cover' className='w-xl md:w-2xl h-auto border-solid rounded-2xl border-8 border-black'></Image>
                </div>
                <div>
                    <Link href='/' className='border-solid border-4 border-black text-white bg-blue-300 rounded-xl p-2 hover:bg-blue-500 hover:shadow-xl transition duration-600 ease-in-out'>Click to Learn More</Link>
                </div>
            </div>
        </div>
    );
}

export default Projects