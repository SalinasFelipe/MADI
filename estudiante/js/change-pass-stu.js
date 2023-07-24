//inputs
const mostPass = document.getElementById("old-password");
const newPass = document.getElementById("new-password");
const confiPass = document.getElementById("confirmation-password");

//validate dates empty
const validationEmpty = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length === 0) {
    form.classList.add("invalid");
    form.nextElementSibling.classList.add("error");
  } else {
    form.classList.remove("invalid");
    form.nextElementSibling.classList.remove("error");
    form.nextElementSibling.innerHTML = "";
  }
};

mostPass.addEventListener("blur", validationEmpty);
newPass.addEventListener("blur", validationEmpty);
confiPass.addEventListener("blur", validationEmpty);
