
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let newArray = [];
  let newArray2 = [];
  let newArray3 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes('a')) {
      newArray.push(array[i]);
    } else {
      newArray2.push(array[i]);
    }
  }
  newArray3.push(newArray, newArray2);
  return newArray3;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
