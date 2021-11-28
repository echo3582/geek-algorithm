/**
 * leetcode697. 数组的度
 *  给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 输入：[1, 2, 2, 3, 1]
 * 输出：2
 * 解释：
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/degree-of-an-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    let map = new Map()
    let max = 0
    let keys = []
    let min = Infinity
    for(num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    for([key, value] of map) {
        max = Math.max(max, value)
    }
    for([key, value] of map) {
        if(value === max) {
            keys.push(key)
        }
    }
    for(key of keys) {
        let j = 0, k = nums.length - 1
        while(j < k && (nums[j] !== key || nums[k] !== key)) {
            if(nums[j] !== key) j++
            if(nums[k] !== key) k--
        }
        if(k - j + 1 < min) {
            min = k - j + 1
        }
    }
    return min
};
