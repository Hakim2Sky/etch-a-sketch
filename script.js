const divRows = [];
const squareDivs = [];
let size = 16;
const container = document.querySelector(".container");

// excute the initial sketch
createGrid(size);

function sketch() {
    size = parseInt(prompt("pelase enter your desired sketch size", "16"));
    // remove the grid
    divRows.forEach(div => div.remove())
    // create new grid
    createGrid(size);
}

// create 16 * 16 divs Grid
function createGrid(num) {
    if (size > 100) {
        return alert("enter number lower than 100")
    } else {
        for (let i = 0; i < num; i++) {
            row(i);
            createDivs(i);
            squareDivs.forEach(div => div.addEventListener("mouseover", () => div.style.backgroundColor = "red"));
        }
    }
}

// create sub container for row divs
function row(num) {
    divRows[num] = document.createElement("div");
    container.appendChild(divRows[num]);
    divRows[num].classList.add("div-rows")
}


// create divs in each sub container
function createDivs(num) {
    for (let i = 0; i < size; i++) {
        squareDivs[i] = document.createElement("div");
        divRows[num].appendChild(squareDivs[i]);
        squareDivs[i].classList.add("square-divs")
    }
}


