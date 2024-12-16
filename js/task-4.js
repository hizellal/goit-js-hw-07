const login_form = document.querySelector(".login-form");

login_form.addEventListener("submit", handleSubmit);
console.dir(login_form);

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