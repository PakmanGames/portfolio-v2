import Image from "next/image";
import HoloCard from "@/components/HoloCard/HoloCard";

function Skills() {
    return (
        <div className="flex-1 flex flex-col items-center px-4 pt-12 pb-6 gap-10">
            <div className="w-full max-w-4xl flex flex-col gap-10">
                <div className="text-center text-3xl">Languages</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2 z-10">
                    <HoloCard>
                        <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 min-w-[100px]">
                            <span className="text-2xl">
                                <Image src="/skills/javascript-original.svg" alt="JavaScript" width={24} height={24} />
                            </span>
                            <span className="all-[unset] text-lg">JavaScript</span>
                        </div>
                    </HoloCard>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/typescript-original.svg" alt="TypeScript" width={24} height={24} />
                        </span>
                        <span className="text-lg">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/html5-original.svg" alt="HTML" width={24} height={24} />
                        </span>
                        <span className="text-lg">HTML</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/css3-original.svg" alt="CSS" width={24} height={24} />
                        </span>
                        <span className="text-lg">CSS</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/java-original.svg" alt="Java" width={24} height={24} />
                        </span>
                        <span className="text-lg">Java</span>
                    </div>
                    <HoloCard>
                        <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 min-w-[100px]">
                            <span className="text-2xl">
                                <Image src="/skills/python-original.svg" alt="Python" width={24} height={24} />
                            </span>
                            <span className="text-lg">Python</span>
                        </div>
                    </HoloCard>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/ruby-original.svg" alt="Ruby" width={24} height={24} />
                        </span>
                        <span className="text-lg">Ruby</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/c-original.svg" alt="C" width={24} height={24} />
                        </span>
                        <span className="text-lg">C</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/bash-original.svg" alt="Bash" width={24} height={24} />
                        </span>
                        <span className="text-lg">Bash</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/verilog-original.svg" alt="Verilog" width={24} height={24} />
                        </span>
                        <span className="text-lg">Verilog</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/azuresqldatabase-original.svg" alt="SQL" width={24} height={24} />
                        </span>
                        <span className="text-lg">SQL</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/matlab-original.svg" alt="MATLAB" width={24} height={24} />
                        </span>
                        <span className="text-lg">MATLAB</span>
                    </div>
                </div>
                {/* <p>I am knowledgeable in many different languages and comfortable developing in them. But my go to language has to be either JavaScript or Ruby.</p> */}
            </div>
            <div className="max-w-4xl flex flex-col gap-10">
                <div className="text-center text-3xl">Frameworks</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 z-10">
                    <HoloCard>
                        <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 min-w-[100px]">
                            <span className="text-2xl">
                                <Image src="/skills/react-original.svg" alt="React" width={24} height={24} />
                            </span>
                            <span className="text-lg">React</span>  
                        </div>
                    </HoloCard>
                    <HoloCard>
                        <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 min-w-[100px]">
                            <span className="text-2xl">
                                <Image src="/skills/nextjs-original.svg" alt="Next.js" width={24} height={24} />
                            </span>
                            <span className="text-lg">Next.js</span>
                        </div>
                    </HoloCard>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/tailwindcss-original.svg" alt="Tailwind CSS" width={24} height={24} />
                        </span>
                        <span className="text-lg">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/express-original.svg" alt="Express.js" width={24} height={24} />
                        </span>
                        <span className="text-lg">Express.js</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/bootstrap-original.svg" alt="Bootstrap" width={24} height={24} />
                        </span>
                        <span className="text-lg">Bootstrap</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/spring-original.svg" alt="Spring Boot" width={24} height={24} />
                        </span>
                        <span className="text-lg">Spring Boot</span>
                    </div>
                </div>
                {/* <p>I{`'`}m an aspiring full-stack web developer, I am familiar with both frontend and backend. I am currently trying to learn more backend frameworks such as Flask and Ruby on Rails.</p> */}
            </div>
            <div className="w-full max-w-4xl flex flex-col gap-10">
                <div className="text-center text-3xl">Technologies</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2 z-10">
                    <HoloCard>
                        <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 min-w-[100px]">
                            <span className="text-2xl">
                                <Image src="/skills/git-original.svg" alt="Git" width={24} height={24} />
                            </span>
                            <span className="text-lg">Git</span>
                        </div>
                    </HoloCard>
                    <HoloCard>
                        <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 min-w-[100px]">
                            <span className="text-2xl">
                                <Image src="/skills/github-original.svg" alt="GitHub" width={24} height={24} />
                            </span>
                            <span className="text-lg">GitHub</span>
                        </div>
                    </HoloCard>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/apache-original.svg" alt="Apache Maven" width={24} height={24} />
                        </span>
                        <span className="text-lg">Apache Maven</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/linux-original.svg" alt="Linux" width={24} height={24} />
                        </span>
                        <span className="text-lg">Linux</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/mongodb-original.svg" alt="MongoDB" width={24} height={24} />
                        </span>
                        <span className="text-lg">MongoDB</span>
                    </div>
                    <HoloCard>
                        <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 min-w-[100px]">
                            <span className="text-2xl">
                                <Image src="/skills/nodejs-original-wordmark.svg" alt="Node.js" width={24} height={24} />
                            </span>
                            <span className="text-lg">Node.js</span>
                        </div>
                    </HoloCard>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/mysql-original.svg" alt="MySQL" width={24} height={24} />
                        </span>
                        <span className="text-lg">MySQL</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-6 py-3 min-w-[100px]">
                        <span className="text-2xl">
                            <Image src="/skills/postgresql-original.svg" alt="PostgreSQL" width={24} height={24} />
                        </span>
                        <span className="text-lg">PostgreSQL</span>
                    </div>
                </div>
                {/* <p>I{'`'}ve been really enjoying using Linux and WSL for development. I am eager to learn cloud services such as AWS, Azure, and GCP.</p> */}
            </div>
        </div>
    );
}

export default Skills