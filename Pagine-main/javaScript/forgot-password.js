const email = document.querySelector("[name= username]");

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

email.addEventListener("blur", validationEmpty);

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

email.addEventListener("input", validationEmail);
