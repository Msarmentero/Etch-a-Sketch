// get necessary global variables
const gridContainer = document.getElementById("gridContainer");
const button = document.getElementById("resetBtn");

// create the default grid
function createGrid(size){
    gridContainer.innerHTML = ``;
    const squareSize = 800 / size;
    for (let index = 0; index < size * size; index++) {
        const squareDiv = document.createElement("div");

        squareDiv.classList.add("square");
        squareDiv.setAttribute("id", index);
        //squareDiv.textContent = index;

        // set proportions for each square
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;

        
    
        gridContainer.appendChild(squareDiv);
    };
    // store in a list the square elements
    let squares = document.querySelectorAll(".square")

    
    hover(squares);

    draw(squares);
}

function hover(squares){

    // listen to mouse event to add hoverState
  squares.forEach(square => {
    square.addEventListener("mouseenter", () =>{
        square.classList.add("hoverState");

    });
    // listen to mouse event to remove hoverState
    square.addEventListener("mouseleave", () =>{
        square.classList.remove("hoverState");
    });
  });   
};

function draw(squares){
    squares.forEach(square =>{
        
        square.addEventListener("mouseup", (event) => {
            switch (event.button) {
              case 0: { // LEFT CLICK — DRAW
                let currentOpacity = parseFloat(square.style.opacity) || 0.1;
          
                currentOpacity = Math.min(currentOpacity + 0.1, 1);
                square.style.backgroundColor = "black";
                square.style.opacity = currentOpacity;
          
                break;
              }
          
              case 1: { // MIDDLE CLICK — ERASE
                let currentOpacity = parseFloat(square.style.opacity) || 0.1;
          
                currentOpacity = Math.max(currentOpacity - 0.1, 0.1); // never below 0.1
                square.style.backgroundColor = "black";
                square.style.opacity = currentOpacity;
          
                break;
              }
          
              default:
                break; // Ignore anything that isn’t sanctioned input
            }
          });
    });
};



// use the reset button to prompt the user to set the size of the grid
button.addEventListener("click", () =>{
    const size = +prompt(`Squares per size? (1-100)`);
    if(isNaN(size) || size < 1 || size > 100) return alert('Invalid size!');

    createGrid(size)
})

// create a default grid
createGrid(16);
