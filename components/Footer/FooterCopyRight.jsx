import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterCopyRight() {
    return (
        <div className="flex items-center gap-1">
            <div className="md:text-left flex gap-2 flex-wrap items-center justify-center">
                <div className="text-xl opacity-70"><FontAwesomeIcon icon={faCopyright} /></div>
                <div>{new Date().getFullYear()} Andy Pak.</div>
                <div>All rights reserved.</div>
            </div>
        </div>
    );
}

export default FooterCopyRight