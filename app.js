let inputValue = document.getElementById("inputValue");
let btn = document.getElementById("btnSubmit");
let spanResults = document.getElementById("resultsSpan");

let numberRandom = Math.floor(Math.random()*100) -1

var contador = 0;
btn.addEventListener("click", () => {
    if(inputValue.value === ""){
        spanResults.innerHTML = "Introduce algo"
    } else if(isNaN(inputValue.value)){
        spanResults.innerHTML = "No es un número.";
    } else if (inputValue.value < numberRandom){
        spanResults.innerHTML = "El número que has introducido es menor";
    } else if (inputValue.value > numberRandom) {
        spanResults.innerHTML = "El número que has introducido es mayor";
    } else if (inputValue.value == numberRandom) {
        spanResults.innerHTML = `¡Felicidades, has acertado! Tu número de intentos fue: ${contador}`;
        contador = 0;
    } else{
        spanResults.innerHTML = "Introduce lago"
    }
    contador ++;
});