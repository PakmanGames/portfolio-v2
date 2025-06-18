export default function TestingPage() {
    return(
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
    );
}