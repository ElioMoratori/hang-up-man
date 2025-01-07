function reset() {
    remainingAttempts = 6;
    let blankSpace = document.getElementById("letters");
    blankSpace.textContent = "";

    let initialAttempts = document.getElementById("errors");
    initialAttempts.textContent = 7;

    disableClass("error");
    disableClass("right");
    
    

    imgSource.setAttribute("src", "./img/hang-up/0.svg");
    setHiddenWord();
}


function disableClass(value) {
    let keyboardError = document.querySelectorAll("p.disabled-" + value);
    keyboardError.forEach(function(node) {
        node.classList.remove("disabled-" + value);
        node.classList.add("keyboard");
    })
}

