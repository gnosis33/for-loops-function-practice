
// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]


//what type is min??? I don't know how do this considering I can't use "npm run test-7"
  //example of npm run test-'#' error;
/*   $ npm run test-7

  > for-loops-functions-practice@1.0.0 test-7
  > vitest --run e7.
  
  
   RUN  v0.26.3 C:/Users/14803/documents/Devslopes-git/for-loops-functions-practice-unsolved
  
   ❯ test/e7.test.js  (0 test)
  
  ⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯
  
   FAIL  test/e7.test.js [ test/e7.test.js ]
  Error: No test suite found in file C:/Users/14803/documents/Devslopes-git/for-loops-functions-practice-unsolved/test/e7.test.js
  ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
  
   Test Files  1 failed (1)
        Tests  no tests
     Start at  17:53:51
     Duration  2.73s (transform 1.32s, setup 0ms, collect 500ms, tests 0ms) */


export function getClientWithLeastBalance(array) {
  let min; 
  for (let i = 0; i < array.length; i++) {
    const cond1 = array[i].balance > 0 && !min;
    const cond2 = array[i].balance < min.balance && array[i].balance > 0
    if (cond1 || cond2); {
      min = array[i];
    }
  }
  return min;  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
