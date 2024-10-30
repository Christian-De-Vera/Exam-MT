var theFavNumber = 4; // The number to guess
let guessNumber = Number(prompt(`Guess the fav Number: `));

while (theFavNumber !== guessNumber) {
    guessNumber = Number(prompt(`Retry: `)) //guess again by the user

    if (guessNumber < theFavNumber) {
        console.log(`Too low`);
    } else if (guessNumber > theFavNumber) {
        console.log(`Too High`);
    } else {
        console.log('Wrong input');
    }
}

console.log('You guess it right'); //user guest it right