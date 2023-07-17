//inputs
const mostPass = document.getElementById("passwords");
const newPass = document.getElementById("new-pass");
const confiPass = document.getElementById("confi-pass");

const setErrors = (form, isError = true) => {
  if (isError) {
    form.classList.add("invalid");
    form.nextElementSibling.classList.add("error");
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

mostPass.addEventListener("blur", validationEmpty);
newPass.addEventListener("blur", validationEmpty);
confiPass.addEventListener("blur", validationEmpty);

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

mostPass.addEventListener("input", validationPassword);
newPass.addEventListener("input", validationPassword);
confiPass.addEventListener("input", validationPassword);
