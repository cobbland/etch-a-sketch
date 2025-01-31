//Declare constants and variables
const buttons = document.querySelector("#buttons");
const drawBox = document.querySelector("#drawBox");

// Create divs for drawing
function createDivs(divsNum) {
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

// Change div style on hover

// Make buttons do their things