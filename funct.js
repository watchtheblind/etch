let container = document.querySelector(".container");
let cuadro = document.createElement("div");
// cuadro.classList.add("square");
cuadro.setAttribute("style", 
" width: 5.95%; height: 5.95%;  border: 1.1px; border-style: solid; border-color: red;");
// cuadro.setAttribute("style", 
// "flex-wrap: wrap, width: 3%; margin-inline: 0.05%; height: 3%;  border: 1px; border-style: solid; border-color: black;");
for (let i=0; i<256;i++){
    container.appendChild(cuadro.cloneNode(true));
}