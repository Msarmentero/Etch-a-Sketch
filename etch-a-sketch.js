const gridContainer = document.getElementById("gridContainer");
const button = document.getElementById("resetBtn");


function createGrid(size){
    gridContainer.innerHTML = ``;
    const squareSize = 800 / size;
    for (let index = 0; index < size * size; index++) {
        const squareDiv = document.createElement("div");

        squareDiv.classList.add("square");
        squareDiv.setAttribute("id", index);
        //squareDiv.textContent = index;


        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
    
        gridContainer.appendChild(squareDiv);
    };
    let squares = document.querySelectorAll(".square")


    hover(squares);
}

function hover(squares){

  squares.forEach(square => {
    square.addEventListener("mouseenter", () =>{
        square.classList.add("hoverState");

    });
    square.addEventListener("mouseleave", () =>{
        square.classList.remove("hoverState");
    });
  });   
};




button.addEventListener("click", () =>{
    const size = +prompt(`Squares per size? (1-100)`);
    if(isNaN(size) || size < 1 || size > 100) return alert('Invalid size!');

    createGrid(size)
})

createGrid(16);
