const txt_input = document.querySelector("#name-input");

const txt_output = document.querySelector("#name-output");

txt_input.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim().length != 0) {
        txt_output.textContent = event.currentTarget.value.trim();
    } else {
        txt_output.textContent = "Anonymous";
    }
  });

//trim for dell __s__