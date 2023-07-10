const buttonChan = document.getElementById("button");

//name of student
const mostImage = document.getElementById("image-one");
const inputName = document.getElementById("namestudent");
const removeName = document.getElementById("removename");

//apellido del estudiante
const mostImageTwo = document.getElementById("image-two");
const inputLastName = document.getElementById("last-name");
const removeLastName = document.getElementById("removelastname");

//celular del estudiante
const mostImageThree = document.getElementById("image-three");
const inputPhone = document.getElementById("cellstudent");
const removePhone = document.getElementById("removephone");

function mostSpan(pencil, button, most, remove) {
  pencil.addEventListener("click", function () {
    if (button.style.display == "none") {
      button.style.display = "block";
      most.style.display = "block";
      remove.style.display = "none";
    } else {
      button.style.display = "none";
      most.style.display = "none";
      remove.style.display = "block";
    }
  });
}

mostSpan(mostImage, buttonChan, inputName, removeName);
mostSpan(mostImageTwo, buttonChan, inputLastName, removeLastName);
mostSpan(mostImageThree, buttonChan, inputPhone, removePhone);

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

inputName.addEventListener("blur", validationEmpty);
inputLastName.addEventListener("blur", validationEmpty);
inputPhone.addEventListener("blur", validationEmpty);

//validate name, last-name
const validates = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 3) {
    setErrors(form);
  } else {
    setErrors(form, false);
  }
};

inputName.addEventListener("input", validates);
inputLastName.addEventListener("input", validates);

//validate phone number
const validatesPhone = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 9) {
    setErrors(form);
  } else {
    setErrors(form, false);
  }
};

inputPhone.addEventListener("input", validatesPhone);
