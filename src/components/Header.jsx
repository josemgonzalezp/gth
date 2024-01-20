import MoonIcon from "./icons/MoonIcon";
const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
                    Guess The Number
                </h1>
                <button>
                    <MoonIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
