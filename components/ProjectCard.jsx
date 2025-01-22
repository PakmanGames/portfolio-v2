import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

function ProjectCard({ title, image, description, learnMore }) {
    return (
        <div className="bg-[#f4f4ff] rounded-lg shadow-lg overflow-hidden">
            <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-contain bg-[#dedefd]" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Button asChild>
                    <Link href={learnMore} target='_blank' rel='noopener noreferrer'>Learn More</Link>
                </Button>
            </div>
        </div>
    );
}

export default ProjectCard;