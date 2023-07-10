const nameForm = document.querySelector("[name=username]");
const lastNameForm = document.querySelector("[name=last-name]");
const documentForm = document.querySelector("[name = document]");
const emailForm = document.querySelector("[name=email]");
const phoneNumberForm = document.querySelector("[name=phone-number]");
const passwordForm = document.querySelector("[name=password]");

const setErrors = (form, isError = true) => {
  if (isError) {
    form.classList.add("invalid");
    form.nextElementSibling.classList.add("error");
    form.nextElementSibling.innerHTML = `${form.name} is required;`;
  } else {
    form.classList.remove("invalid");
    form.nextElementSibling.classList.remove("error");
    form.nextElementSibling.innerHTML = "";
  }
};

//validate dates empty
const validationEmpty = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length === 0) {
    setErrors(form);
  } else {
    setErrors(form, false);
  }
};

//aca se valida los datos vacidos
nameForm.addEventListener("blur", validationEmpty);
lastNameForm.addEventListener("blur", validationEmpty);
documentForm.addEventListener("blur", validationEmpty);
emailForm.addEventListener("blur", validationEmpty);
phoneNumberForm.addEventListener("blur", validationEmpty);
passwordForm.addEventListener("blur", validationEmpty);
buttonSub.addEventListener("submit", validationEmpty);

//validate name, last-name and document
const validates = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 3) {
    setErrors(form);
  } else {
    setErrors(form, false);
  }
};

// se valida el nombre, el apellido
nameForm.addEventListener("input", validates);
lastNameForm.addEventListener("input", validates);
buttonSub.addEventListener("submit", validates);

//validate document
const validatesDocumen = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 3) {
    setErrors(form);
  } else {
    setErrors(form, false);
  }
};

documentForm.addEventListener("input", validatesDocumen);

//validate Email
const validationEmail = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-])+\.[\w-]{2,4}$/);

  if (formValue.trim().length > 5 && !regex.test(formValue)) {
    setErrors(form, `Please enter a valid email`);
  } else {
    setErrors(form, false);
  }
};

//aca se valida el email
emailForm.addEventListener("input", validationEmail);

//validate password
const validationPassword = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 8) {
    setErrors(form);
  } else {
    setErrors(form, false);
  }
};

//se valida la longitud de la contraseña
passwordForm.addEventListener("input", validationPassword);
