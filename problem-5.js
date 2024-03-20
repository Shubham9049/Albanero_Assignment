// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method

const nums = [10,4,12,9,87,34];
const K = 2;
function KthLargest(nums){

    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j]; //10,
            nums[j] = nums[j + 1];  //4
            nums[j + 1] = temp;    //10
        }
    }
    return (nums[nums.length-K],nums)

}

console.log(nums)

const data=KthLargest(nums);
console.log(data)
