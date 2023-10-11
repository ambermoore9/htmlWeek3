let color = document.getElementById("color");
let place = document.getElementById("place");
let ritual = document.getElementById("ritual");


function colorfun(){
    
    alert("Green");
}

function placefun(){
    
    alert("Destin, Flordia");
}

function ritualfun(){
    
    alert("Chocolate Milkshakes after soccer games");
}

color.addEventListener("click", colorfun);
place.addEventListener("click", placefun);
ritual.addEventListener("click", ritualfun);