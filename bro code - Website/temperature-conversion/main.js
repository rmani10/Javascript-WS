const mytext = document.getElementById("mytext");
const tofarenheit = document.getElementById("tofarenheit");
const tocelcius = document.getElementById("tocelcius");
const myh2 = document.getElementById("myh2");

let temperature;

function convert() {
  if (tocelcius.checked) {
    temperature = Number(mytext.value);
    myh2.textContent = (temperature - 32) * (5 / 9);
  } else if (tofarenheit.checked) {
    temperature = Number(mytext.value);
    myh2.textContent = (temperature * 9) / 5 + 32;
  } else {
    myh2.textContent = "Select a unit";
  }
}
