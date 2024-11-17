function Skills() {
    return (
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-10 px-10 md:px-32 pt-12 pb-6">
            <div className="max-w-2xl md:max-w-xl flex flex-col gap-10">
                <p>I am knowledgeable in many different languages and comfortable developing in them. But my go to language has to be either JavaScript or Ruby.</p>
                <div className="text-center text-3xl">Languages</div>
                <div className="text-center text-xl">JavaScript, HTML, CSS, Java, Python, Ruby, C, Bash, Verilog</div>
            </div>
            <div className="max-w-xl flex flex-col gap-10">
                <p>I{`'`}m an aspiring full-stack web developer, I am familiar with both frontend and backend. I am currently trying to learn more backend frameworks such as Flask and Ruby on Rails.</p>
                <div className="text-center text-3xl">Frameworks</div>
                <div className="text-center text-xl">React, Next.js, Tailwind CSS, Express.js, Bootstrap</div>
            </div>
            <div className="max-w-xl flex flex-col gap-10">
                <p>I{`'`}ve been really enjoying using Linux and WSL for development. I am eager to learn cloud services such as AWS, Azure, and GCP.</p>
                <div className="text-center text-3xl">Technologies</div>
                <div className="text-center text-xl">Git, GitHub, Apache Maven, Linux, MongoDB, Node.js, Arduino</div>
            </div>
        </div>
    );
}

export default Skills