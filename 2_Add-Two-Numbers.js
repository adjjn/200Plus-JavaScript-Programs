let number1 = parseFloat (prompt ("Enter the first number: "));
let number2 = parseFloat (prompt ("Enter the second number: "));

if (!isNaN (number1) && !isNaN (number2)) {
  let sum = number1 + number2;
  console.log (`the sum of ${number1} and ${number2} is ${sum}`);
}

else {
  console.log ("Please enter valid numbers.");
}
