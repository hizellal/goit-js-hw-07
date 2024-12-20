function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bd = document.querySelector('body');

const colorBtn = document.querySelector(".change-color");
colorBtn.className = "login_btn";

colorBtn.addEventListener("click", () => {
  bd.style.backgroundColor = getRandomHexColor();
})