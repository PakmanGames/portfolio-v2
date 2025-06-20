import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const contactLinks = [
        {
            icon: faLinkedin,
            title: "LinkedIn",
            description: "Connect with me professionally",
            href: "https://www.linkedin.com/in/andy-pak/",
            color: "text-[#0e76a8] hover:text-[#377491]",
            bgColor: "bg-[#0e76a8]/10 hover:bg-[#0e76a8]/20"
        },
        {
            icon: faGithub,
            title: "GitHub",
            description: "Check out my projects and code",
            href: "https://github.com/pakmangames",
            color: "text-gray-800 hover:text-gray-600",
            bgColor: "bg-gray-100 hover:bg-gray-200"
        },
        {
            icon: faEnvelope,
            title: "Email",
            description: "Send me a direct message",
            href: "mailto:paka4@mcmaster.ca",
            color: "text-red-600 hover:text-red-700",
            bgColor: "bg-red-50 hover:bg-red-100"
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center grow text-center px-4 py-12">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        I'm always open to new opportunities, collaborations, or just a friendly chat about technology and development.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 ease-in-out ${link.bgColor} hover:shadow-lg hover:-translate-y-1 z-10`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <FontAwesomeIcon 
                                    icon={link.icon} 
                                    className={`text-4xl mb-4 transition-all duration-300 ${link.color}`}
                                />
                                <h3 className="text-xl font-semibold mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {link.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {link.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
                    <p className="text-gray-600 mb-4">
                        Hey! If you're into building web apps, hacking on side projects, or just love chatting about code and cool ideas,
                        I'd really enjoy hearing from you. I'm always down to talk shop, share ideas, or even brainstorm something together.
                    </p>
                    <p className="text-sm text-gray-500">
                    I typically respond within 24-48 hours during weekdays.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;