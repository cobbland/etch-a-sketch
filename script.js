//Declare constants and variables
const drawBox = document.querySelector("#drawBox");
const clearButton = document.querySelector("#clearBox");
const resizeButton = document.querySelector("#setSquares");

// Create divs for drawing
function createDivs(divsNum) {
    removeDivs(drawBox);
    for (let step = 0; step < (divsNum * divsNum); step++) {
        const div = document.createElement("div");
        div.setAttribute("class", "undrawnBox");
        divsNumString = (960 / divsNum).toString() + "px";
        div.style.height = divsNumString;
        div.style.width = divsNumString;
        drawBox.appendChild(div);
    }
    return 
};

// Clear divs
function clearDivs(drawBox) {
    for (const child of drawBox.childNodes) {
        child.removeAttribute("class", "drawnBox");
    };
};

// Remove divs
function removeDivs(drawBox) {
    while (drawBox.firstChild) {
        drawBox.removeChild(drawBox.firstChild);
    };
};

// Change div style on hover
drawBox.addEventListener("mouseover", (event) => {
    event.target.setAttribute("class", "drawnBox");
});

// Make buttons do their things
clearButton.addEventListener("click", () => {
    clearDivs(drawBox);
});

resizeButton.addEventListener("click", () => {
    let newPixels = parseInt(prompt("How many 'pixels' per side?"));
    while (!newPixels || newPixels > 100) {
        newPixels = parseInt(prompt("Must be a number 100 or lower."));
    };
    createDivs(newPixels);
});

// Start with 16 x 16
createDivs(16);