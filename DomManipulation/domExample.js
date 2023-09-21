// Get a reference to the button and the heading element using their IDs
var button = document.getElementById("myButton");
var heading = document.getElementById("myHeading");

// Add a click event listener to the button
button.addEventListener("click", function () {
  heading.textContent = "Header BY Dom Manipulation";
  heading.style.color = "Blue";
});

//Creating a new Element using Dom
//We create a new paragraph element using createElement()
var paraGraph = document.createElement("p");
console.log("paraGraph", paraGraph);
paraGraph.innerText = "Hello paragraph by Dom";

//use appendChild() to add it to the body of the document.
document.body.appendChild(paraGraph);

//By Tag name

console.log("bytag name", document.getElementsByTagName("h1"));

//querySelector
var queryExampl = document.querySelector("h1");
console.log("QuerySelector", queryExampl);

//querySelectorAll
var queryAllExampl = document.querySelectorAll("h1");
console.log("QuerySelectorAll", queryAllExampl);

//parentNode
var parentNodeExample =
  document.getElementById("myHeading").parentNode.nodeName;
document.getElementById("demo").innerHTML = parentNodeExample;
console.log("parentNodeExample", parentNodeExample);

//childNode

var childNode = document.getElementById("myDiv").childNodes.length;
console.log("childNode", childNode);

//Inner HTML

var innerHTMLExample = document.getElementById("myHeading").innerHTML;

console.log("innerHTMLExample", innerHTMLExample);

document.getElementById("span-id").setAttribute("class", "myNewClass");

function myFunction() {
  console.log("click");
}

//appendChild

const newSpan = document.createElement("h5");
newSpan.innerHTML = "Helloooooo New Value";

document.body.appendChild(newSpan);

const newHaeder = document.createElement("h5");
const textUse = document.createTextNode("heloooo  by text node");

newHaeder.appendChild(textUse);

document.body.appendChild(newHaeder);

const fruits = ["Banana", "Orange", "Mango"];
const dFrag = document.createDocumentFragment();
for (let x in fruits) {
  var li = document.createElement("li");
  li.textContent = fruits[x];
  dFrag.appendChild(li);
}

document.getElementById("myList").appendChild(dFrag);
