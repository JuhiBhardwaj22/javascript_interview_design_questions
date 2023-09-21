//Debounce and throtlling we willl do with using webAPI which is setTimeout
//This is not only about search bar we can also apply on Scroll bar or window resize so in this time we can stop calling unwanted function

//Debounce

//Debouncing is a technique used to ensure that a function is called only
// after a certain period of Time
//e.g Filpkart

let counter = 0;
function getData() {
  //we will call api
  console.log("Fetching Data", counter++);
}

const BetterFunction = myDebounce(getData, 1000);

function myDebounce(cbFn, delay) {
  let timer;
  return function (...args) {
    // This args for BetterFunction Argument
    if (timer) clearTimeout(timer); //Agar user ne time complete hone se pehle agr se fr type kr diya tho user ko frr se utni der wait krna hoga
    timer = setTimeout(() => {
      cbFn();
    }, delay);
  };
}
