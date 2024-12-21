import Image from "next/image";
import Link from "next/link";
import gradPhoto from "@/public/images/grad-photo-1.png";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faTrophy } from "@fortawesome/free-solid-svg-icons";

function Page() {
  const titles = [
    "Software Engineer",
    "Full-Stack Web Developer",
    "Hackathon Enthusiast",
    "Continuous Learner",
  ]

  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex justify-center items-center flex-wrap border-solid rounded-2xl border-8 border-blue-900 p-11 gap-10 m-10 bg-slate-100 z-20">
        <div className="border-solid rounded-2xl border-8 border-black shadow-2xl transform transition-all duration-500 motion-safe:hover:scale-105">
          <Image src={gradPhoto} alt="Picture of Andy Pak" className="w-72 h-auto rounded-lg"></Image>
        </div>
        <div className="text-center flex flex-col gap-11 items-center justify-center">
          <div className="text-4xl md:text-7xl">
            <p className="bg-gradient-to-r from-blue-900 to-purple-600 text-transparent bg-clip-text transition-all duration-500 motion-safe:hover:scale-105">Andy Pak</p>
          </div>
          <div id="bio" className="text-lg md:text-xl max-w-xl flex flex-col gap-3">
            <strong className="text-3xl text-center">
              <TypingEffect words={titles} />
            </strong>
            <div className="text-sm md:text-base lg:px-20 text-left flex flex-col gap-3">
              <div>{`Hey! I'm Andy, a software engineering student at McMaster University.`}</div>
              <div>{`My interests are in web development, digital solutions, challenges, hackathons, computers, and opportunities.`}</div>
            </div>
            <div className="text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-lg" />
              <div>Feel free to <Link href={`https://www.linkedin.com/in/andy-pak/`} target="_blank" className="font-bold text-blue-500 hover:text-blue-400 transition-all ease-in-out">connect</Link> with me!</div>
            </div>
            <div className="text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-black text-lg" />
              <div>Curious about my <Link href={`/skills`} className="font-bold text-blue-500 hover:text-blue-400 transition-all ease-in-out">tech-stack</Link>?</div>
            </div>
            <div className="text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-lg" />
              <div>{`I'm a 3x Hackathon Winner`}</div>
            </div>
            <div className="text-base flex gap-2 items-center justify-center">Check out some of my <Link href={`https://github.com/PakmanGames`} target="_blank" className="font-bold text-blue-500 hover:text-blue-400 transition-all ease-in-out">projects</Link>!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page