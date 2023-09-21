const getData = () => {
  console.log("throttle function");

  document.getElementById("btn").disabled = false;
};
       
const BetterFunction = myThrottle(getData, 1000);

function myThrottle(cbFun, delay) {
  return function (...args) {
    document.getElementById("btn").disabled = true; // by using this condition we can set the limit on button so so user should wait for enabling the button
    setTimeout(() => {
      cbFun();
    }, delay);
  };
}
