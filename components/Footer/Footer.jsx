import FooterCopyRight from "./FooterCopyRight";
import { Linkedin, Mail, Github, Code2, Globe, BadgeHelp, BookOpen } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col bg-theme-not-white z-[1] border-t border-border/50 px-4 py-16 justify-evenly items-center text-center text-sm md:text-md mt-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16 w-full max-w-6xl">
        {/* Logo & Bio */}
        <div className="flex flex-col items-start md:items-start gap-2">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-1">PakmanGames</h1>
          <p className="text-gray-600 dark:text-gray-300 text-left max-w-xs leading-relaxed">Full Stack Developer, always learning, always building.</p>
        </div>
        {/* Contact Links */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-semibold text-gray-800 dark:text-white mb-1">Contact</h2>
          <a
            href="https://www.linkedin.com/in/andy-pak/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
          >
            <Linkedin size={18} className="text-blue-700" /> LinkedIn
          </a>
          <a href="mailto:paka4@mcmaster.ca" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
            <Mail size={18} className="text-red-600" /> Email
          </a>
        </div>
        {/* Code Links */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-semibold text-gray-800 dark:text-white mb-1">Code Profiles</h2>
          <a
            href="https://github.com/pakmangames"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github size={18} className="text-black dark:text-white" /> GitHub
          </a>
          <a
            href="https://leetcode.com/u/pakmangames/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
          >
            <BadgeHelp size={18} className="text-orange-500" /> LeetCode
          </a>
        </div>
        {/* Hackathons & More */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-semibold text-gray-800 dark:text-white mb-1">Hackathons & More</h2>
          <a
            href="https://devpost.com/PakmanGames"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <BookOpen size={18} className="text-blue-500" /> Devpost
          </a>
          <a
            href="https://dorahacks.io/hacker/PakmanGames"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <Globe size={18} className="text-purple-600" /> DoraHacks
          </a>
        </div>
      </div>
      <div className="w-full max-w-6xl mt-12 border-t border-border/80 pt-6">
        <FooterCopyRight />
      </div>
    </footer>
  );
}

export default Footer;
