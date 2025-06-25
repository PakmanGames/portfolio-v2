import FooterCopyRight from "./FooterCopyRight";
import FooterLinks from "./FooterLinks";

function Footer() {
    return (
        <footer className="flex flex-col bg-theme-not-white z-[1] border-t border-border/50 px-4 py-16 justify-evenly items-center text-center text-sm md:text-md">
            {/* <FooterCopyRight />
            <FooterLinks /> */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
                <div>
                    <h1>PakmanGames</h1>
                    <p>Small bio here</p>
                </div>
                <div>LinkedIn, email</div>
                <div>github links, leetcode links</div>
                <div>Devpost, dorahacks links</div>
            </div>
            <FooterCopyRight />
        </footer>
    );
}

export default Footer;
