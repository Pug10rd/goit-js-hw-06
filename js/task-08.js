const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені, козаче!");
  }
    const objectCredentials = {
        email: email.value,
        password: password.value
  }
    console.log(objectCredentials);
    event.currentTarget.reset();
}