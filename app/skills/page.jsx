function Skills() {
    return (
        <div className="flex-1 flex flex-col items-center px-4 pt-12 pb-6">
            <div className="w-full max-w-4xl flex flex-col gap-10">
                <div className="text-center text-3xl">Languages</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">🟨</span>
                        <span className="text-lg">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">🌐</span>
                        <span className="text-lg">HTML</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">🎨</span>
                        <span className="text-lg">CSS</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">☕️</span>
                        <span className="text-lg">Java</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">🐍</span>
                        <span className="text-lg">Python</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">💎</span>
                        <span className="text-lg">Ruby</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">🌊</span>
                        <span className="text-lg">C</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">💻</span>
                        <span className="text-lg">Bash</span>
                    </div>
                    <div className="flex items-center gap-3 bg-theme-not-white rounded-lg px-4 py-3">
                        <span className="text-2xl">🔌</span>
                        <span className="text-lg">Verilog</span>
                    </div>
                </div>
                <p>I am knowledgeable in many different languages and comfortable developing in them. But my go to language has to be either JavaScript or Ruby.</p>
            </div>
            <div className="max-w-xl flex flex-col gap-10">
                <div className="text-center text-3xl">Frameworks</div>
                <div className="text-center text-xl">React, Next.js, Tailwind CSS, Express.js, Bootstrap</div>
                <p>I{`'`}m an aspiring full-stack web developer, I am familiar with both frontend and backend. I am currently trying to learn more backend frameworks such as Flask and Ruby on Rails.</p>
            </div>
            <div className="max-w-xl flex flex-col gap-10">
                <div className="text-center text-3xl">Technologies</div>
                <div className="text-center text-xl">Git, GitHub, Apache Maven, Linux, MongoDB, Node.js, Arduino</div>
                <p>I{`'`}ve been really enjoying using Linux and WSL for development. I am eager to learn cloud services such as AWS, Azure, and GCP.</p>
            </div>
            <div>
                Experimenting with new theme colours:
                <div>
                    <div className="bg-theme-black text-white p-2 rounded">Theme Black</div>
                    <div className="bg-theme-navy text-white p-2 rounded">Theme Navy</div>
                    <div className="bg-theme-purple text-white p-2 rounded">Theme Purple</div>
                    <div className="bg-theme-light-purple text-white p-2 rounded">Theme Accent</div>
                    <div className="bg-theme-cyan text-white p-2 rounded">Theme Accent 2</div>
                    <div className="bg-theme-not-white text-black p-2 rounded">Theme Accent 3</div>
                </div>
            </div>
        </div>
    );
}

export default Skills