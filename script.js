const squareDivs = [];
let size = 16;
const container = document.querySelector(".container");

// create 16 * 16 divs Grid
function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        squareDivs[i] = document.createElement("div");
        container.appendChild(squareDivs[i]);
    }
}

function sketch() {
    size = parseInt(prompt("pelase enter your desired sketch size", "16"));
    // remove the grid
    squareDivs.forEach(div => div.remove())
    // create new grid
    createGrid(size);
}

createGrid(size);
// add hovering effect
squareDivs.forEach(div => div.addEventListener("mouseover", () => div.style.backgroundColor = "red"));