const buttonChan = document.getElementById("button-change");
// esto es para el nombre del  profesor
const mostrar = document.getElementById("pencil-image");
const removeName = document.getElementById("removename");
const inputName = document.getElementById("nameteacher");

//esto es para el apellido del porfesor
const mostrar2 = document.getElementById("pencil-image-two");
const inputLastname = document.getElementById("last-name");
const removeLastname = document.getElementById("removelast");

//esto es para el celular del profesor
const mostrar3 = document.getElementById("pencil-image-three");
const inputPhone = document.getElementById("phone");
const removePhone = document.getElementById("cell");

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
mostrarGene(mostrar2, buttonChan, inputLastname, removeLastname);
mostrarGene(mostrar3, buttonChan, inputPhone, removePhone);

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

inputName.addEventListener("blur", validationEmpty);
inputLastname.addEventListener("blur", validationEmpty);
inputPhone.addEventListener("blur", validationEmpty);
