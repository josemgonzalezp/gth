import { useState } from "react";
import { getSecretNumber, checkPlay, validatePlay } from "./utils/utils";
import Header from "./components/Header";
import PlayInfo from "./components/PlayInfo";
import ConfettiEffect from "./components/ConfettiEffect";

const guessNumber = getSecretNumber(4);
console.log(guessNumber);

const App = () => {
    const [number, setNumber] = useState("");
    const [plays, setPlays] = useState([]);
    const [gameState, setGameState] = useState("playing");

    const handleClick = () => {
        if (gameState != "playing") return false;

        const playedNumber = parseInt(number);
        if (!validatePlay(playedNumber)) {
            setNumber("");
            return;
        }

        const result = checkPlay(guessNumber, parseInt(playedNumber));
        setPlays((plays) => [
            ...plays,
            {
                number: playedNumber,
                good: result.good,
                regular: result.regular,
            },
        ]);

        if (result.good == 4) {
            setGameState("win");
        }

        setNumber("");
    };

    return (
        <div className="min-h-screen bg-purple-700">
            <Header />
            <main className="container mx-auto">
                <section className="w-full flex flex-row gap-4 justify-center mt-8 px-4">
                    <input
                        autoFocus
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        className="w-24 rounded-sm p-2 text-center tracking-widest text-gray-700"
                    />
                    <button
                        className="w-24 rounded-sm p-2 text-center bg-gray-500 text-white border-white border-2"
                        onClick={handleClick}
                    >
                        Jugar
                    </button>
                </section>

                <section className="w-full flex flex-col gap-2 justify-center items-center mt-8 px-4">
                    {plays.length > 0 &&
                        plays.map((play, playIndex) => {
                            return <PlayInfo key={playIndex} play={play} />;
                        })}
                </section>
            </main>
            {gameState === "win" && <ConfettiEffect />}
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
                <p className="text-sm text-center text-white w-full">
                    © {new Date().getFullYear()} - IdoSoft
                </p>
            </footer>
        </div>
    );
};

export default App;
