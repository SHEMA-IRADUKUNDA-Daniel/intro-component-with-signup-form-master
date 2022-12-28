const button = document.querySelector(".button");

const firstName = document.querySelector(".firstName");
const firstNameInput = document.querySelector("#firstName");

const lastName = document.querySelector(".lastName");
const lastNameInput = document.querySelector("#lastName");

const inputs = document.querySelector(".inputs");

const email = document.querySelector(".email");
const emailInput = document.querySelector("#email");

const password = document.querySelector(".password");
const passwordInput = document.querySelector("#password");

const link = document.querySelector("aTag");

button.addEventListener("click", () => {
  let messages = [];
  if (firstNameInput.value === "" || firstNameInput.value == null) {
    messages.push("First name cannot be empty");
  } else {
    messages = [];
  }

  if (messages.length > 0) {
    firstName.innerText = messages.join([]);
    firstNameInput.style.border = "2px solid red";
  } else {
    firstNameInput.style.border = "2px solid green";
  }
});

button.addEventListener("click", () => {
  let messages = [];
  if (lastNameInput.value === "" || lastNameInput.value == null) {
    messages.push("Last name cannot be empty");
  } else {
    messages = [];
  }
  if (messages.length > 0) {
    lastName.innerText = messages.join([]);
    lastNameInput.style.border = "2px solid red";
  } else {
    lastNameInput.style.border = "2px solid green";
  }
});
button.addEventListener("click", () => {
  let messages = [];
  if (emailInput.value === "" || emailInput.value == null) {
    messages.push("Last name cannot be empty");
  } else {
    messages = [];
  }
  const emailVal = emailInput.value;
  if (!emailVal.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    email.innerHTML = "Invalid email. Please input valid email.";
    emailInput.style.border = "2px solid red";
  } else {
    messages = [];
    emailInput.style.border = "2px solid green";
  }
});
console.log(true);

button.addEventListener("click", () => {
  let messages = [];
  if (passwordInput.value === "" || passwordInput.value == null) {
    messages.push("Password must be 6 characters");
    passwordInput.style.border = "2px solid red";
  } else {
    passwordInput.style.border = "2px solid green";
  }
  if (messages.length > 0) {
    password.innerText = messages.join([]);
    passwordInput.style.border = "2px solid red";
  }
});
