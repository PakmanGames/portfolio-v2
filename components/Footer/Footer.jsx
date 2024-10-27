import FooterCopyRight from "./FooterCopyRight";
import FooterLinks from "./FooterLinks";

function Footer() {
    return (
        <footer className="flex justify-evenly text-center text-sm md:text-md">
            <FooterCopyRight />
            <FooterLinks />
        </footer>
    );
}

export default Footer