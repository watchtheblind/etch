let container = document.querySelector(".container");
let spaned = document.createElement("span");
let cuadro = document.createElement("div");
cuadro.classList.add("square");
spaned.classList.add("espan");
spaned.setAttribute("style","border: 1.1px; border-style: solid border-color: lightgray; flex: 1; display:flex;");
cuadro.setAttribute("style", 
"flex-grow:1; border: 1.1px; border-style: solid; border-color: lightgray;");
for (let i = 0; i < 100; i++) {
    let newSpaned = spaned.cloneNode(true);
    container.appendChild(newSpaned);
    for (let j = 0; j < 100; j++) {
        newSpaned.appendChild(cuadro.cloneNode(true));
    }
}
// cuadro.setAttribute("style", 
// "flex-wrap: wrap, width: 3%; margin-inline: 0.05%; height: 3%;  border: 1px; border-style: solid; border-color: black;");
// for (let i=0; i<256;i++){
//     container.appendChild(cuadro.cloneNode(true));   
// }
function BgColor(){
    this.classList.add("black");
}
let cuadrosdiv = document.querySelectorAll(".square");
//para cada cuadro con clase square (variable "div"), se le añade el eventlistener 
cuadrosdiv.forEach(div => {
    div.addEventListener("mouseover", BgColor);
});