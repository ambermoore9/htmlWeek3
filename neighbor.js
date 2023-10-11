const options = ["Mcdonalds", "Burger King", "Chiptole", "Bosa Donuts", "Black Rock Coffee Bar", "Cork Crush"];

function getRandomOption(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let button = document.getElementById("randomStringButton");

button.addEventListener("click", function() {
    const randomOption = getRandomOption();

    alert(randomOption);
});