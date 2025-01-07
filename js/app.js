setHiddenWord();

let mappedKeyboard;
let keyboard = document.getElementById("keyboard");
let remainingAttempts = 6;
let charlist;
let imgSource = document.getElementById("hang-up-image");
let gameBlock = document.getElementById("letters");
let contentGameBlock = gameBlock.querySelectorAll("p").textContent;


keyboard.addEventListener("click", function(e){
    let palpite = e.target.textContent;
    let alvo = e.target;
    
    if (alvo.textContent.length !== 1 || alvo.classList.contains("disabled-error") || alvo.classList.contains("disabled-right")) {
    } else {
        compareValues(palpite, alvo);
    }
})


