let inputNumber = parseFloat (prompt ("Enter a non-negative number: ") );

if (!NaN (inputNumber) && inputNumber >= 0) {
  let squareRoot = Math.sqrt(inputNumber);
  console.log (`Square Root of ${inputNumber} : ${squareRoot} `);
}
else {
  console.log("Please enter valid number");
}
