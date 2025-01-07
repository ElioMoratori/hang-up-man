// Refatoração do código: criar nova palavra.

let hiddenWord;
function setHiddenWord() {
    let wordPosition = parseInt(Math.random() * words.length + 1);
    hiddenWord = words[wordPosition];
    hiddenWord.toUpperCase();
    createBricks(hiddenWord);
    charList = hiddenWord.toLowerCase().toLowerCase().split("");
}