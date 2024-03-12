let container = document.querySelector(".container");
let cuadro = document.createElement("div");
cuadro.classList.add("square");
cuadro.setAttribute("style", 
" width: 5.954%; height: 5.954%;  border: 1.1px; border-style: solid; border-color: gray;");
// cuadro.setAttribute("style", 
// "flex-wrap: wrap, width: 3%; margin-inline: 0.05%; height: 3%;  border: 1px; border-style: solid; border-color: black;");
for (let i=0; i<256;i++){
    container.appendChild(cuadro.cloneNode(true));   
}
function BgColor(){
    this.classList.add("black");
}
let cuadrosdiv = document.querySelectorAll(".square");
//para cada cuadro con clase square (variable "div"), se le añade el eventlistener 
cuadrosdiv.forEach(div => {
    div.addEventListener("mouseover", BgColor);
});