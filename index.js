// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"
dodger.style.bottom = "0px";
document.addEventListener("keydown", function(e) {
  console.log(e.key);
});
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
