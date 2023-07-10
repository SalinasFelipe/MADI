const buttonChan = document.getElementById("button-change");

// esto es para el nombre del  admin
const mostrar = document.getElementById("pencil-image");
const removeName = document.getElementById("removename");
const inputName = document.getElementById("nameadmin");

//esto es para el apellido del profesor
const mostrar2 = document.getElementById("pencil-image-two");
const inputLastName = document.getElementById("last-name-adm");
const removeLastName = document.getElementById("removelastadmin");

function mostrarGene(pencil, button, most, remove) {
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

mostrarGene(mostrar, buttonChan, inputName, removeName);
mostrarGene(mostrar2, buttonChan, inputLastName, removeLastName);

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
