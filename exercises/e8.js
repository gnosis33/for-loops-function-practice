
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

// agin i have no idea how to do this one without the npm run test-8 command not working
/* i tried to change the code so i could just see what the out put was and manually check 
it with the test file but the file type of e8.js is a module so i cannot import the data/data.js 
info into the file to test it. */

export function getClientWithGreatestBalance(array) {
  let max = array[i];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > max.balance) {
      max = array[i];
    }
  }
  return max;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
