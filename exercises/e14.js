
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < array[i].transactions.length; j++) {
      if (array[i].transactions[j].type === 'deposit') {
        sum += array[i].transactions[j].amount;
      } else if (array[i].transactions[j].type === 'withdrawal') {
        sum -= array[i].transactions[j].amount;
      }
    }
    if (sum !== array[i].balance) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
