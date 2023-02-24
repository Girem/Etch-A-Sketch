const gridContainer = document.querySelector(`.container`);
const div = document.createElement(`div`);

for (let i = 0; i < 16; i++) {
  div.textContent = i;
  console.log(i);
  gridContainer.appendChild(div);
}
