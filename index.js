function isPalindrome(word) {
  // Write your algorithm here
  let firstLetter = 0;
  let lastLetter = word.length - 1;
  while (firstLetter < lastLetter){
    if(word[firstLetter] !== word[lastLetter]){
      return false
    }
    else{
      firstLetter += 1;
      lastLetter -=1;
    }
  }
  return true
}

/* 
  Add your pseudocode here
*/
// check to see if first & last index are equal, then add 1 to first index and subtract 1 from last index 
//   while first index < last index, repeat to see if equal

/*
  Add written explanation of your solution here
*/
  // returns false if word fails test, if passes the while loop it should return true

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
