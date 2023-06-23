const nameForm = document.querySelector("[name=username]");
const lastNameForm = document.querySelector("[name=last-name]");
const emailForm = document.querySelector("[name=email]");
const passwordForm = document.querySelector("[name=password]");

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

//validate name and last-name
const validates = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 3) {
    form.classList.add("invalid");
    form.nextElementSibling.classList.add("error");
    form.nextElementSibling.innerHTML = `please type well the ${form.name} ;`;
  } else {
    form.classList.remove("invalid");
    form.nextElementSibling.classList.remove("error");
    form.nextElementSibling.innerHTML = "";
  }
};

//validate Email
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

//validate password
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

//aca se valida los datos vacidos
nameForm.addEventListener("blur", validationEmpty);
lastNameForm.addEventListener("blur", validationEmpty);
emailForm.addEventListener("blur", validationEmpty);
passwordForm.addEventListener("blur", validationEmpty);

// se valida el nombre, el apellido y contraseña
nameForm.addEventListener("input", validates);
lastNameForm.addEventListener("input", validates);

//se valida la longitud de la contraseña
passwordForm.addEventListener("input", validationPassword);

//aca se valida el email
emailForm.addEventListener("input", validationEmail);
