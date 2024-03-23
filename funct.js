let cr= 20; //amount of columns and rows
let container = document.querySelector(".containe");
let spaned = document.createElement("span");
let cuadro = document.createElement("div");
cuadro.classList.add("square");
spaned.classList.add("span");
spaned.setAttribute("style","border: 1.1px; background-color: white;border-style: solid border-color: lightgray; flex: 1; display:flex;");
cuadro.setAttribute("style", "flex-grow:1; border: 1.1px; border-style: solid; border-color: lightgray;");
let createEtch = () =>{
    //first child is deleted, then the second one is the first child, then repeat until no one left
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //generating rows [i] and columns [j]
    for (let i = 0; i < cr; i++) {
        let newSpaned = spaned.cloneNode(true);
        container.appendChild(newSpaned);
        for (let j = 0; j < cr; j++) {
            newSpaned.appendChild(cuadro.cloneNode(true));
        }
    }
    let cuadrosdiv = document.querySelectorAll(".square");
    //for each cuadro with "square" class, add eventlistener
    cuadrosdiv.forEach(div => {
        div.addEventListener("mouseover", BgColor);
});

}
createEtch();
//adding the class "black" to each cuadro
function BgColor(){
    this.classList.add("black");
}

//function that changes the number of squares
let rowsColumns = () =>{
    let msgBox =prompt("Enter the number of columns/rows");
    let msgBoxnum=  parseInt(msgBox);
    if (msgBoxnum !== msgBoxnum /*if msgBoxnum is NaN*/|| msgBoxnum<1 || msgBoxnum>100) {
        alert("please introduce a number between 1 and 100");
      }
    else{
        cr=msgBoxnum;
        alert(cr);
        createEtch();
    }
};
