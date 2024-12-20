function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = document.querySelector("input");
amount.className = "amount";

const createBtn = document.querySelector('button[data-create]');
createBtn.className = "create_btn";

const divContainer = document.querySelector('#boxes');
divContainer.className = "boxes";

const dellBtn = document.querySelector('button[data-destroy]');
dellBtn.className = "destroy_btn";

const controls = document.querySelector('#controls');
controls.className = "controls";

createBtn.addEventListener("click", () => {
  let cicle = 1;
  let size = 30;
  if (amount.value !== 0 & (amount.value > 0 & amount.value <= 100)) {
    while (cicle <= amount.value) {
      cicle ++;
      const createDiv = document.createElement("div");
      createDiv.style.width = `${size}px`;
      createDiv.style.height = `${size}px`;
      createDiv.className = "create_div";
      divContainer.append(createDiv);
      size += 10;
      createDiv.style.backgroundColor = getRandomHexColor();
    }
  }
})

function destroyBoxes() {
  divContainer.innerHTML = "";
}

dellBtn.addEventListener("click", destroyBoxes);
