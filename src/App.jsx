import { useState } from "react";

const guessNumber = [0, 0, 0, 0];

for (let i = 0; i < guessNumber.length; i++) {
    guessNumber[i] = i == 0 ? getRandomInt(1, 9) : getRandomInt(0, 9);
}

console.log(guessNumber);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const App = () => {
    const [number, setNumber] = useState("");
    const [jugadas, setJugadas] = useState([]);

    const handleClick = () => {
        const aryInput = Array.from(number);
        let regulares = 0;
        let buenos = 0;

        aryInput.forEach((digit, digitIndex) => {
            if (guessNumber.includes(parseInt(digit))) {
                if (guessNumber[digitIndex] == parseInt(digit)) {
                    buenos++;
                } else {
                    regulares++;
                }
            }
        });

        setJugadas((jugadas) => [...jugadas, { number, buenos, regulares }]);
        setNumber("");
    };
    return (
        <div className="bg-black min-h-screen p-4 flex flex-col justify-between">
            <header className="h-10 w-full">
                <h1 className="text-2xl text-white text-center">
                    Guess The Number
                </h1>
            </header>
            <main className="w-full mt-4 mb-auto h-10">
                <section className="w-full flex flex-row gap-4 justify-center">
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="nunber"
                        min={1000}
                        max={9999}
                        className="w-20 rounded-sm p-2 text-center tracking-widest text-gray-700"
                    />
                    <button
                        className="w-20 rounded-sm p-2 text-center bg-gray-700 text-white"
                        onClick={handleClick}
                    >
                        Jugar
                    </button>
                </section>
            </main>
            <footer className="h-10">
                <p className="text-2xl text-center text-white">IdoSoft</p>
            </footer>
        </div>
    );
};

export default App;
