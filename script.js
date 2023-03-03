const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.className = "grid-cell";
    gridContainer.appendChild(cell);
  }
}
