const typeUsu = document.querySelector("[name= type]");
const email = document.querySelector("[name= username]");
const password = document.querySelector("[name= password]");

//validate dates empty
const validationEmpty = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length === 0) {
    form.classList.add("invalid");
    form.nextElementSibling.classList.add("error");
    form.nextElementSibling.innerHTML = `${form.name} is required;`;
  } else {
    form.classList.remove("invalid");
    form.nextElementSibling.classList.remove("error");
    form.nextElementSibling.innerHTML = "";
  }
};

typeUsu.addEventListener("blur", validationEmpty);
email.addEventListener("blur", validationEmpty);
password.addEventListener("blur", validationEmpty);

//validacion del email
const validationEmail = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-])+\.[\w-]{2,4}$/);

  if (formValue.trim().length > 5 && !regex.test(formValue)) {
    form.classList.add("invalid");
    form.nextElementSibling.classList.add("error");
    form.nextElementSibling.innerHTML = `Please enter a valid email`;
  } else {
    form.classList.remove("invalid");
    form.nextElementSibling.classList.remove("error");
    form.nextElementSibling.innerHTML = "";
  }
};

email.addEventListener("input", validationEmail);

//validacion de la contraseña
const validationPassword = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 8) {
    form.classList.add("invalid");
    form.nextElementSibling.classList.add("error");
    form.nextElementSibling.innerHTML = `please type well ${form.name}`;
  } else {
    form.classList.remove("invalid");
    form.nextElementSibling.classList.remove("error");
    form.nextElementSibling.innerHTML = "";
  }
};
