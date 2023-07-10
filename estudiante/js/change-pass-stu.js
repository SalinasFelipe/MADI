const mostImage = document.getElementById("image-password-old");
const mostImageTwo = document.getElementById("image-password-new");
const mostImageThree = document.getElementById("image-password-confi");

//inputs
const mostPass = document.getElementById("old-password");
const newPass = document.getElementById("new-password");
const confiPass = document.getElementById("confirmation-password");

const showPassword = () => {
  mostPass.type = mostPass.type === "password" ? "text" : "password";
};

mostImage.addEventListener("click", showPassword);

const showPasswordTwo = () => {
  newPass.type = newPass.type === "password" ? "text" : "password";
};

mostImageTwo.addEventListener("click", showPasswordTwo);

const showPasswordThree = () => {
  confiPass.type = confiPass.type === "password" ? "text" : "password";
};

mostImageThree.addEventListener("click", showPasswordThree);

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
