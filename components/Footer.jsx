import Image from 'next/image';
import LinkedIn from '@/public/linkedin-original.svg';
import GitHub from '@/public/github-original.svg';
import Mail from '@/public/envelope-solid.svg';

function Footer() {
    return (
        <div>
            <footer className="flex justify-evenly text-center text-sm md:text-md">
                <div id="copyright" className="flex items-center gap-1">
                    <div className="text-xl md:text-3xl">&copy;</div>
                    <div className="md:text-left flex gap-2">
                        {new Date().getFullYear()} Andy Pak.
                        <div className="hidden sm:block">All rights reserved.</div>
                    </div>
                </div>
                <div id="links" className="flex items-center gap-4 py-4">
                    <div>
                        <a href="mailto:im.andy.pak@gmail.com" target="_blank" rel='noopener' className='filter grayscale opacity-50 hover:opacity-100 transition duration-500 ease-in-out'>
                            <Image src={Mail} alt='Send Email' className='w-7 h-7'></Image>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/andy-pak/" target="_blank" className='filter grayscale opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
                            <Image src={LinkedIn} alt='LinkedIn link' className='w-7 h-7'></Image>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/pakmangames" target="_blank" className='filter grayscale opacity-60 hover:opacity-100 transition duration-500 ease-in-out'>
                            <Image src={GitHub} alt='GitHub' className='w-8 h-8'></Image>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer