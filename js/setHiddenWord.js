// let hiddenWord;
// function setHiddenWord() {
//     let wordPosition = parseInt(Math.random() * words.length + 1);
//     hiddenWord = words[wordPosition];
//     hiddenWord.toUpperCase();
//     createBricks(hiddenWord);
//     charList = hiddenWord.toLowerCase().toLowerCase().split("");
// }


let hiddenWord;
let hiddenTip = document.getElementById("tip-text");

function setHiddenWord() {
    let position = parseInt(Math.random() * 6);
    console.log(position);
    let nameList = categoriesName[position];
    console.log(nameList)
    switch(nameList) {
        case "meiosDeTransporte": 
            hiddenWord = meiosDeTransporte[parseInt(Math.random() * meiosDeTransporte.length)];
            break;
        case "animais": 
            hiddenWord = animais[parseInt(Math.random() * animais.length)];
            break;
        case "comidas": 
            hiddenWord = comidas[parseInt(Math.random() * comidas.length)];
            break;
        case "emocoes": 
            hiddenWord = emocoes[parseInt(Math.random() * emocoes.length)];
            break;
        case "paises": 
            hiddenWord = paises[parseInt(Math.random() * paises.length)];
            break;
        case "objetos": 
            hiddenWord = objetos[parseInt(Math.random() * objetos.length)];
            break;
    }
    console.log(hiddenWord);
    createBricks(hiddenWord);
    charList = hiddenWord.toLowerCase().toLowerCase().split("");
    hiddenTip.textContent = tips[position];

}
