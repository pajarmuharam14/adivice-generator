const diceBtn = document.querySelector(".dice");
diceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      document.querySelector("#advice-id").textContent = response.slip.id;
      document.querySelector(".advice p").textContent = `"${response.slip.advice}"`;
    });
});
