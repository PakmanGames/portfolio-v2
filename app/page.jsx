import Image from "next/image";
import Link from "next/link";
import gradPhoto from "@/public/images/grad-photo-1.png";

function Page() {
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex justify-center items-center flex-wrap border-solid rounded-2xl border-8 border-blue-900 p-11 gap-10 m-10 bg-slate-100">
        <div className="border-solid rounded-2xl border-8 border-black shadow-2xl transform transition-all duration-500 motion-safe:hover:scale-105">
          <Image src={gradPhoto} alt="Picture of Andy Pak" className="w-72 h-auto rounded-lg"></Image>
        </div>
        <div className="text-center flex flex-col gap-11 items-center justify-center">
          <div className="text-7xl">
            <p className="bg-gradient-to-r from-blue-900 to-purple-600 text-transparent bg-clip-text transition-all duration-500 motion-safe:hover:scale-105">Andy Pak</p>
          </div>
          <div id="bio" className="text-xl max-w-xl flex flex-col gap-3">
            <strong>Software Engineer at McMaster University</strong>
            <div className="text-base lg:px-20 text-left">
              {`Hey! I'm Andy, a software engineering student. I am an aspiring full-stack developer passionate about web development.
              My interests are in digital solutions, challenges, hackathons, computers, and opportunities.`}
            </div>
            <div className="text-base">
              Feel free to <Link href={`https://www.linkedin.com/in/andy-pak/`} target="_blank" className="font-bold text-blue-500 hover:text-blue-400 transition-all ease-in-out">connect</Link> with me!
            </div>
          </div>
          <div className="max-w-80 flex flex-col gap-5">
            <p className="font-extrabold text-xl"><strong>Skills:</strong></p>
            <p className="text-left"><strong>Languages:</strong> JavaScript, HTML, CSS, Java, Python, Ruby, C, Bash, Verilog, LaTeX</p>
            <p className="text-left"><strong>Frameworks:</strong> React, Next.js, Tailwind CSS, Bootstrap</p>
            <p className="text-left"><strong>Technologies: </strong> Git, GitHub, Apache Maven, Linux, MongoDB, Node.js, Arduino</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page