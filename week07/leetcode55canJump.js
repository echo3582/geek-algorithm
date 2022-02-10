/**
 * 
 *  给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

    数组中的每个元素代表你在该位置可以跳跃的最大长度。

    判断你是否能够到达最后一个下标。

    https://leetcode-cn.com/problems/jump-game/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let farMost = 0
    for(let i = 0; i < nums.length; i++) {
        // 如果现在的i大于上一个i所能到达的最远位置farMost，说明之前无法到达i，那就返回false
        if(i > farMost) return false
        // 从i位置可以达到的最远位置
        farMost = Math.max(i + nums[i], farMost)
        if(farMost >= nums.length - 1) return true
    }
    return false
};