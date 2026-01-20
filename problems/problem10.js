function solution(nums) {
    if (!Array.isArray(nums)) {
return [];
    }
    return nums.slice().sort((a, b) => a - b);
}