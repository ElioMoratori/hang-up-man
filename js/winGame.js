let verifying = gameBlock.childNodes;
let splitNodes = [];

splitNodes.join("_")

function winGame() {
   splitNodes = []; 
   verifying.forEach(function (node){
        let inserting = node.textContent;
        splitNodes.push(inserting);       
   })
   
   if (!splitNodes.includes("_")) {
        alert("Você venceu! Vamos para a próxima palavra");
        reset();
   }
}
