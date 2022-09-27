const squareDivs = [];
const container = document.querySelector(".container");

// create 16 * 16 divs Grid
for (let i = 0; i < 256; i++) {
    squareDivs[i] = document.createElement("div");
    container.appendChild(squareDivs[i]);
    console.log(squareDivs[i]);
}