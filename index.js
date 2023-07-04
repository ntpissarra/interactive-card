const buttons = document.querySelectorAll(".scores");
const submit = document.querySelector(".submit");
const content = document.querySelector(".content");
const submitted = document.querySelector(".submitted");
const scoreText = document.querySelector(".score-text");

let selectedValue = "";

function handleClick() {
  buttons.forEach((btn) => {
    if (btn !== this) {
      btn.classList.remove("selected");
    }
  });
  selectedValue = this.innerText;
  this.classList.add("selected");
  submit.disabled = false;
}

function handleSubmit() {
  scoreText.innerHTML = `You selected ${selectedValue} out of 5`;

  content.style.display = "none";
  submitted.style.display = "block";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

submit.addEventListener("click", handleSubmit);
