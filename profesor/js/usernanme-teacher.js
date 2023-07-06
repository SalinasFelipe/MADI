const buttonChan = document.getElementById("button-change");
const mostrar = document.getElementById("pencil-image");
const mostrar2 = document.getElementById("pencil-image-two");
const mostrar3 = document.getElementById("pencil-image-three");

function mostrarGene(pencil, button) {
  pencil.addEventListener("click", function () {
    if (button.style.display == "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}

mostrarGene(mostrar, buttonChan);
mostrarGene(mostrar2, buttonChan);
mostrarGene(mostrar3, buttonChan);
