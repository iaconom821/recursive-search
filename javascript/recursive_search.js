const searchArray = [5,6,7,8]


function recursiveSearch(arr, target) {
  // type your code here
  if(arr.length === 0){
    return false
  }
  if(target === arr[0]){
    return true
  } else {
    const newArr = [...arr]
    newArr.shift()
    return recursiveSearch(newArr, target)
  }
}

console.log(recursiveSearch(searchArray, 9))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
