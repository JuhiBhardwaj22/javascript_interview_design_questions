const myDiv = document.getElementById("main");

console.log("myDiv", myDiv);

const myH1 = document.getElementById("dom-hello");

console.log("myH1", myH1);

const myP1 = document.getElementsByTagName("p");

console.log("myP1", myP1);

const queVal = document.querySelector("p");
console.log("queVal", queVal);

const queValAll = document.querySelectorAll("p");
console.log("queValAll", queValAll);

const parentVal = document.getElementById("dom-hello").parentNode;

console.log("parentVal", parentVal);

const childVal = document.getElementById("main").childNodes;

console.log("childVal", childVal);

//

const span = document.createElement("span");
span.innerText = " Helooooooooooooo";

myDiv.appendChild(span);

const text = document.createTextNode("document.createTextNode()’");

span.appendChild(text);

span.setAttribute("class", "my-span");

const myh2 = document.createElement("h1");

myh2.textContent = "Juhi bhardwaj!!";

myDiv.appendChild(myh2);
myh2.style.color = "red";

myDiv.removeChild(span);

const mybtn = document.getElementById("btn-add");

mybtn.addEventListener("click", getData);

function getData() {
  console.log("click e here !!");
}

function getMyInfo() {
  console.log("getMyInfo");
}

myDiv.addEventListener("mousemove", myFunction);

function removeHandler() {
  myDiv.removeEventListener("mousemove", myFunction);
}

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

const element = document.getElementById("myElement");
console.log(element.innerHTML); // Outputs: "<p>This is <span>inner</span> HTML.</p>"

const element2 = document.getElementById("myElement");
console.log(element2.innerText); // Outputs: "This is inner HTML."

const element1 = document.getElementById("myElement");
console.log(element1.textContent); // Outputs: "This is inner HTML."
