let add = document.querySelector(".add");
let counterText = document.querySelector(".counter");
let reset = document.querySelector(".reset");

let counter = 0;

add.addEventListener("click", function () {
  counter = counter + 1;

  counterText.innerText = counter;
});

reset.addEventListener("click", function () {
  counter = 0;

  counterText.innerText = counter;
});
