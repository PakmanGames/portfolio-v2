import Image from 'next/image';
import LinkedIn from '@/public/linkedin-original.svg';
import GitHub from '@/public/github-original.svg';
import Mail from '@/public/envelope-solid.svg';
import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterLinks() {
    const links = [
        {
            imageSource: Mail,
            href: "mailto:paka4@mcmaster.ca",
            altText: "Send Mail",
            opacity: "opacity-50",
            size: "w-7 w-7",
            icon: faEnvelope,
        },
        {
            imageSource: LinkedIn,
            href: "https://www.linkedin.com/in/andy-pak/",
            altText: "Linkedin Link",
            opacity: "opacity-50",
            size: "w-7 w-7",
            icon: faLinkedin,
        },
        {
            imageSource: GitHub,
            href: "https://github.com/pakmangames",
            altText: "GitHub Link",
            opacity: "opacity-60",
            size: "w-8 w-8",
            icon: faGithub,
        },
    ]

    return (
        <div id="links" className="flex items-center gap-4 py-4 px-8">
            {links.map((link) => (
                <div key={link.altText} className='hover:animate-bounce-slow hover:transition hover:ease-in-out z-10'>
                    <Link href={link.href} target="_blank" className={`filter grayscale ${link.opacity} text-3xl hover:opacity-100 transition duration-500 ease-in-out hover:transition hover:duration-500 hover:ease-in-out`}>
                        <FontAwesomeIcon icon={link.icon} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default FooterLinks