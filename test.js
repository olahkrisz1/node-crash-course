// const nameX = "yoshi";

// console.log(nameX);

// const greet = (nameX) => {
//   console.log(`Hello, ${nameX}`);
// };

// greet("mario");
// greet("yooshi");

// Global Object

// console.log(global);

setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);
