const appButton = document.querySelector(".button");

appButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#how-it-works").scrollIntoView({
    behavior: "smooth"
  });
});