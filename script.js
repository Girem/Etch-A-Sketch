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
    if (event.target.id == `grid-container`) {
      return;
    } else {
      event.target.classList.add("active");
    }
  },
  false
);

function clickPrompt() {
  let boxNum = prompt(`enter grid size (no more then 100)`);
  // alert(changeGrid);
  if (boxNum <= 100) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${boxNum}, 50px)`;
    gridContainer.style.gridTemplateRows = `repeat(${boxNum}, 50px)`;
    for (let i = 0; i < boxNum; i++) {
      for (let j = 0; j < boxNum; j++) {
        const cell = document.createElement("div");
        cell.className = "grid-cell";
        gridContainer.appendChild(cell);
      }
    }
  } else {
    alert(`grid size is too big (100+)`);
  }
}

btn.addEventListener(`click`, clickPrompt);
