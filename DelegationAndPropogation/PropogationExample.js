const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", function () {
  console.log("Buubling - > Outer Div Clicked!");
}); // Buubling phase

middle.addEventListener("click", function (e) {
  console.log("Buubling - > Middle Div Clicked!");
}); // Buubling phase
inner.addEventListener("click", function (event) {
  console.log("Buubling -> inner Div Clicked!");
}); // Buubling  phase

// Capturing phase

console.log("<----------------------------------------->");
outer.addEventListener(
  "click",
  function (e) {
    console.log("Capturing -> Outer Div Clicked!");
  },
  true
); // Capturing phase

middle.addEventListener(
  "click",
  function () {
    console.log("Capturing - > Middle Div Clicked!");
  },
  true
); // Buubling phase// Capturing phase
inner.addEventListener(
  "click",
  function () {
    console.log("Capturing -> inner Div Clicked!");
  },
  true
); // Capturing phase

const userInfo = {
  name: "Juhi",
  age: 30,
};

function getData(dat, va) {
  console.log("ggg", this.name, dat, va);
}

//getData.call(userInfo, "Harua");

getData.apply(userInfo, ["data", "value"]);
