const button = document.getElementById("button");

//nombre del curso
const pencil = document.getElementById("pen-one");
const mostInput = document.getElementById("most-input");
const spanRemove = document.getElementById("remove");

//descripcion del lcurso
const pencilTwo = document.getElementById("pen-two");
const mostInputTwo = document.getElementById("most-input-two");
const spanRemoveTwo = document.getElementById("descrip");

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

mostrarGene(pencil, button, mostInput, spanRemove);
mostrarGene(pencilTwo, button, mostInputTwo, spanRemoveTwo);

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

mostInput.addEventListener("blur", validationEmpty);
mostInputTwo.addEventListener("blur", validationEmpty);

//validate name and description
const validates = (e) => {
  const form = e.target;
  const formValue = e.target.value;
  if (formValue.trim().length < 3) {
    setErrors(form);
  } else {
    setErrors(form, false);
  }
};

mostInput.addEventListener("input", validationEmpty);
mostInputTwo.addEventListener("input", validationEmpty);
