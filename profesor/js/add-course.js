const nameCur = document.querySelector("[name= name-cur]");
const descrip = document.querySelector("[name= descrip]");

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

nameCur.addEventListener("blur", validationEmpty);
descrip.addEventListener("blur", validationEmpty);
