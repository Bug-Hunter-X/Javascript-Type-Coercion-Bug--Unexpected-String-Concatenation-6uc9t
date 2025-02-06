function foo(a,b){
  // Explicit Type checking
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b; 
  } else {
    return "Invalid input: Operands must be numbers";
  }
}
console.log(foo(10,20)); //Output:30
console.log(foo(10,"20")); //Output: Invalid input: Operands must be numbers

//Alternative solution using parseInt
function foo2(a,b){
  return parseInt(a) + parseInt(b);
}
console.log(foo2(10, "20")); //Output: 30