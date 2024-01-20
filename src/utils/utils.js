function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const getSecretNumber = (digits) => {
    let guessNumber = Array(digits);
    for (let i = 0; i < digits; i++) {
        let randomNumber;
        do {
            randomNumber = i == 0 ? getRandomInt(1, 9) : getRandomInt(0, 9);
        } while (guessNumber.includes(parseInt(randomNumber)));
        guessNumber[i] = randomNumber;
    }
    return guessNumber;
};

export const checkPlay = (number, play) => {
    const playArray = Array.from(String(play), Number);
    let regular = 0;
    let good = 0;

    playArray.forEach((digit, digitIndex) => {
        if (number.includes(parseInt(digit))) {
            if (number[digitIndex] == parseInt(digit)) {
                good++;
            } else {
                regular++;
            }
        }
    });

    return { good: good, regular: regular };
};

export const validatePlay = (number) => {
    if (isNaN(number)) return false;
    const playArray = Array.from(String(number), Number);
    if (playArray.length != 4) return false;
    if (playArray[0] == 0) return false;
    const duplicates = playArray.filter(
        (item, index) => playArray.indexOf(item) !== index
    );
    return duplicates.length === 0;
};
