/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
function sum(a, b) {
    return a + b;
  }
  
  console.log('Regular function call:', sum(5, 10)); // Output: 15
  
  // Extra arguments are ignored
  function sumIgnoreExtraArgs(a, b) {
    console.log('Arguments:', arguments);
    return a + b;
  }
  
  console.log('Extra arguments are ignored:', sumIgnoreExtraArgs(5, 10, 15)); // Output: Arguments: [5, 10, 15] 15
  
  // Function using ...rest
  function sumWithRest(...numbers) {
    console.log('Numbers:', numbers);
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
  
  console.log('Function using ...rest:', sumWithRest(5, 10, 15)); // Output: Numbers: [5, 10, 15] 30
  
