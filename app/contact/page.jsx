import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div className="flex flex-col justify-center items-center flex-grow text-center">
            <div className="text-center my-5 mt-8 text-3xl">
                <Link href="https://www.linkedin.com/in/andy-pak/" className="text-[#0e76a8] no-underline ml-1 hover:text-[#377491] transition-all ease-in-out">
                    <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                    {`LinkedIn`}
                </Link>
                {` is the best way to get in touch with me.`}
            </div>
            <div className="text-center text-5xl flex items-center justify-center flex-col flex-grow gap-8">
                <div>Contact page is WORK IN PROGRESS</div>
                <div>Check out other ways to reach me in the footer</div>
            </div>
        </div>
    );
}

export default Contact;