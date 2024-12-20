const login_form = document.querySelector(".login-form");

const login_label = document.querySelectorAll("label");
login_label.forEach((label) => {
  label.className = "login_label";
});

const login_input = document.querySelectorAll("input");
login_input.forEach((input) => {
  input.className = "login_input";
});

login_form.addEventListener("submit", handleSubmit);
console.dir(login_form);

const login_btn = document.querySelector("button");
login_btn.className = "login_btn";

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const login = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (login === "" || password === "") {
      return alert('All form fields must be filled in');
    }
  
    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
}