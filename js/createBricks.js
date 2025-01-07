function createBricks(hiddenWord) {
    let brick = document.getElementById("letters");
    brick.innerHTML = "";

    for (let i=0; i < hiddenWord.length; i++) {
        let brickContent = document.createElement("p");
        brick.appendChild(brickContent);
        brickContent.textContent = "_";
        brickContent.setAttribute("id", i);
    }
}