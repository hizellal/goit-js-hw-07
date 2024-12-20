const txt_input = document.querySelector("#name-input");
txt_input.className = "txt_input"; 

const txt_h1 = document.querySelector("h1");
txt_h1.className = "txt_h1"; 

const txt_output = document.querySelector("#name-output");

txt_input.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim().length != 0) {
        txt_output.textContent = event.currentTarget.value.trim();
    } else {
        txt_output.textContent = "Anonymous";
    }
  });
