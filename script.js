const gridContainer = document.getElementById("grid-container");
const btn = document.querySelector(`.btn`);

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.className = "grid-cell";
    gridContainer.appendChild(cell);
  }
}

gridContainer.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    console.log(event.target);
    if (event.target.id == `grid-container`) {
      return;
    } else {
      event.target.classList.add("active");
    }

    // reset the color after a short delay
    // setTimeout(() => {
    //   event.target.style.color = "";
    // }, 500);
  },
  false
);

function clickPrompt() {
  let changeGrid = prompt(`enter grid size`);
  // alert(changeGrid);
}

btn.addEventListener(`click`, clickPrompt);
