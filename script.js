// Variable Declaration and Initialization with var
console.log(myVar); // Outputs: undefined
var myVar = 10;

// Variable Declaration and Initialization with let
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;

// Variable Declaration and Initialization with const
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;

// Function Declaration
hoistedFunction(); // Outputs: "Hoisted Function"
function hoistedFunction() {
  console.log("Hoisted Function");
}

// Function Expression
//console.log(hoistedFunctionExpression); // TypeError: hoistedFunctionExpression is not a function
var hoistedFunctionExpression = function() {
  console.log("Hoisted Function Expression");
};
hoistedFunctionExpression(); // Outputs: "Hoisted Function Expression"
