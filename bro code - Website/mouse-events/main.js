const mybox = document.getElementById("mybox");

mybox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch 😒";
});

mybox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "dont do it 😢";
});

mybox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "green";
  event.target.textContent = "click Me 😊";
});
