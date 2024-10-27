function FooterCopyRight() {
    return (
        <div id="copyright" className="flex items-center gap-1">
            <div className="text-xl md:text-3xl">&copy;</div>
            <div className="md:text-left flex gap-2">
                {new Date().getFullYear()} Andy Pak.
                <div className="hidden sm:block">All rights reserved.</div>
            </div>
        </div>
    );
}

export default FooterCopyRight