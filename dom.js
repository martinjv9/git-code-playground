// DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("box");
console.log(views);

const sameViews = document.querySelectorAll(".box");
console.log(sameViews);

console.log("Taco");

const divs = document.querySelectorAll("div");
console.log(divs);
