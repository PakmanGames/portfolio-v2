import Image from "next/image";
import Link from "next/link";
import gradPhoto from "@/public/images/grad-photo-1.png";
import Particle from "@/components/Particle/Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Page() {
  return (
    <div className="flex flex-grow justify-center items-center">
      <Particle />
      <div className="flex justify-center items-center flex-wrap border-solid rounded-2xl border-8 border-blue-900 p-11 gap-10 m-10 bg-slate-100 z-50">
        <div className="border-solid rounded-2xl border-8 border-black shadow-2xl transform transition-all duration-500 motion-safe:hover:scale-105">
          <Image src={gradPhoto} alt="Picture of Andy Pak" className="w-72 h-auto rounded-lg"></Image>
        </div>
        <div className="text-center flex flex-col gap-11 items-center justify-center">
          <div className="text-4xl md:text-7xl">
            <p className="bg-gradient-to-r from-blue-900 to-purple-600 text-transparent bg-clip-text transition-all duration-500 motion-safe:hover:scale-105">Andy Pak</p>
          </div>
          <div id="bio" className="text-lg md:text-xl max-w-xl flex flex-col gap-3">
            <strong>Software Engineer at McMaster University</strong>
            <div className="text-sm md:text-base lg:px-20 text-left flex flex-col gap-3">
              <div>{`Hey! I'm Andy, a software engineering student. I am an aspiring full-stack developer passionate about web development.`}</div>
              <div>{`My interests are in digital solutions, challenges, hackathons, computers, and opportunities.`}</div>
            </div>
            <div className="text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-lg" />
              <div>Feel free to <Link href={`https://www.linkedin.com/in/andy-pak/`} target="_blank" className="font-bold text-blue-500 hover:text-blue-400 transition-all ease-in-out">connect</Link> with me!</div>
            </div>
            <div className="text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-black text-lg" />
              <div>Curious about my <Link href={`/skills`} className="font-bold text-blue-500 hover:text-blue-400 transition-all ease-in-out">tech-stack</Link>?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page