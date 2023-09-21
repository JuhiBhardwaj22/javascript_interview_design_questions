// Get the parent element (common ancestor)
const parentElement = document.getElementById("myList");
parentElement.addEventListener("click", function (event) {
  console.log("event", event.target.tagName);
  if (event.target.tagName === "LI") {
    // Do something when an <li> is clicked
    console.log(`You clicked on: ${event.target.textContent}`);
  }
});
