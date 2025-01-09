function attemptsDecrease() {
    if (remainingAttempts > 0) {
        let errors = document.getElementById("errors");
        errors.textContent = remainingAttempts;
        imgSource.setAttribute("src", "./img/hang-up/" + remainingAttempts + ".svg");
        remainingAttempts--;
    } else {
        alert("Você perdeu! A palavra era " + hiddenWord + ". Vamos a uma nova partida!");
        reset();
    }
}
