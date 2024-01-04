import { add, subtract, multiply, divide } from "./src/calculator.js";

console.log(add(5, 3)); //8
console.log(subtract(10, 4)); //6
console.log(multiply(2, 6)); //12

try {
  console.log(divide(8, 0)); // Error
} catch (error) {
  console.error(error.message);
}
