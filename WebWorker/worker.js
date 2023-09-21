self.onmessage = (event) => {
  const numbers = event.data;
  const sum = calculateSum(numbers);
  self.postMessage(sum); // Send the result back to the main thread
  console.log("arrayVal", numbers);
};

function calculateSum(nums) {
  return nums.reduce((acc, curr) => acc + curr);
}
