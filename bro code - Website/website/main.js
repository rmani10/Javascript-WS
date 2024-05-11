const PI = 3.14;
let radius;
let cirucumference;

document.getElementById("mysubmit").onclick = function () {
  radius = document.getElementById("mytext").value;
  radius = Number(radius);
  cirucumference = 2 * PI * radius;
  document.getElementById("myh2").textContent = cirucumference + "cm";
};

let arr = ["m", "a", "n"];

for (let ar in arr) {
  console.log(ar);
}
