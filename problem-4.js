// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string

let nums = [3, 30, 34, 5, 9];

function largestNum(nums){
  nums.sort((a, b) => {
    const num1 = a.toString() + b.toString();
    
    const num2 = b.toString() + a.toString();
    return num2-num1
  });
  return result = nums.join("")
}

const data=largestNum(nums);
console.log(data); //
  