// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack");

function removeDuplicates(stack) {
  // your code here

  stack = [5, 2, 1, 5, 1, 3];

  let tempStack = new Stack();
  let seen = [];

  while (!stack.isEmpty()) {
    let element = stack.pop();
    if (!seen.includes(element)) {
      tempStack.push(element);
      seen.push(element);
    }
  }

  return stack;
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack);
// console.log(stack.printStack()); // [5, 2, 1, 3] First in first out
console.log(stack.printStack()); // [2, 5, 1, 3] Last in first out
