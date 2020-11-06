let randomColor = () => {
  r = Math.floor((Math.random() * 265) + 1);
  g = Math.floor((Math.random() * 265) + 1);
  b = Math.floor((Math.random() * 265) + 1);
  return `rgb(${r},${g},${b})`;
}

const topBar = document.createElement("div")
topBar.id = "topBar"
document.body.appendChild(topBar)


const title = document.createElement("h1");
title.textContent = "SKETCH AROUND"
topBar.appendChild(title);
const container = document.createElement("div");
container.id = "container";
container.style.display = "grid";
document.body.appendChild(container);


// Make Grid function//

const grid = (cells = 16) => {
    for (i=0;i<cells*cells;i++) {
      let boxes = document.createElement("div");
      boxes.classList.add(`boxes`);
      container.style.gridTemplateRows = `repeat(${cells}, 1fr`;
      container.style.gridTemplateColumns = `repeat(${cells}, 1fr`;
      container.appendChild(boxes);
    }
};

//Button DIV //

const button = document.createElement("div");
button.id = "button"
topBar.appendChild(button);

//BLK COLOR BUTTON//

const blkButton = document.createElement("button");
blkButton.id = "BLK";
blkButton.textContent = "Black Color";
blkButton.addEventListener("click", () => {
  let sqrs = document.querySelectorAll(".boxes");
  for (let sqr of sqrs) {
    sqr.addEventListener("mouseover", () => {
    sqr.style.backgroundColor = "black";

    });
  }
})
button.appendChild(blkButton);

//Rainbow Color//

const rainbow = document.createElement("button");
rainbow.id = "rainow";
rainbow.textContent = "Rainbow Color"
rainbow.addEventListener("click", () => {
  let sqrs = document.querySelectorAll(".boxes");
  for (let sqr of sqrs) {
    sqr.addEventListener("mouseover", () => {
    sqr.style.backgroundColor = randomColor();
    });
  }
})
button.appendChild(rainbow)

//NewGrid Button//

const gridButton = document.createElement("button");
gridButton.id = "gridButton";
gridButton.textContent ="Set New Grid";
gridButton.addEventListener("click", () => {
  let numb = window.prompt("enter your favorit grid size.", "16-50");
  if (numb >= 16 && numb <= 50) {
    container.innerHTML = "";
    grid(numb)
  } else {
    alert("type 16 - 50!")
    grid()
  }
})
button.appendChild(gridButton)

//reset Button//

const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.textContent= "Reset"
resetButton.addEventListener("click", () => {
  let sqrs = document.querySelectorAll(".boxes");
    for (let sqr of sqrs) {
      sqr.style.backgroundColor = "";
    }
})
button.appendChild(resetButton);

grid();
