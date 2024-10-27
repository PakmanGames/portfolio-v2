import Image from 'next/image';
import LinkedIn from '@/public/linkedin-original.svg';
import GitHub from '@/public/github-original.svg';
import Mail from '@/public/envelope-solid.svg';
import Link from 'next/link';

function FooterLinks() {
    const links = [
        {
            imageSource: Mail,
            href: "mailto:im.andy.pak@gmail.com",
            altText: "Send Mail",
            opacity: "50",
            size: "w-7 w-7",
        },
        {
            imageSource: LinkedIn,
            href: "https://www.linkedin.com/in/andy-pak/",
            altText: "Linkedin Link",
            opacity: "80",
            size: "w-7 w-7",
        },
        {
            imageSource: GitHub,
            href: "https://github.com/pakmangames",
            altText: "GitHub Link",
            opacity: "60",
            size: "w-8 w-8",
        },
    ]

    return (
        <div id="links" className="flex items-center gap-4 py-4">
            {links.map((link) => (
                <div key={link.altText}>
                    <Link href={link.href} target="_blank" className={`filter grayscale opacity-${link.opacity} hover:opacity-100 transition duration-500 ease-in-out`}>
                        <Image src={link.imageSource} alt={link.altText} className={link.size}></Image>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default FooterLinks