function compareValues(guess, target) {
    let includedOn = charList.includes(guess);
    let index = charList.indexOf(guess);

    
    if (index !== -1) {
        while (index !== -1) {
        let alteraLetra = document.getElementById(index);
        index = charList.indexOf(guess, index + 1);
        alteraLetra.textContent = guess;
        }

        target.className = "";
        target.classList.add("disabled-right");

    } else {
        target.className = "";
        target.classList.add("disabled-error");
        attemptsDecrease();
    }

}