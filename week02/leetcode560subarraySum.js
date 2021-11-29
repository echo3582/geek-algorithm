/**
 * 
 * leetcode560. 和为k的子数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
    示例 1：

    输入：nums = [1,1,1], k = 2
    输出：2
    示例 2：

    输入：nums = [1,2,3], k = 3
    输出：2
     

    提示：

    1 <= nums.length <= 2 * 104
    -1000 <= nums[i] <= 1000
    -107 <= k <= 107

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
    思路：前缀和＋哈希
    本题可转化为两数之差问题
    注意：需要先更新答案（19行）然后再更新map（22行）这俩是有序的 否则会有问题
 */
    var subarraySum = function(nums, k) {
        let s = [0]
        let ans = 0
        let map = new Map()
        for(let i = 0; i < nums.length; i++) {
            s[i + 1] = s[i] + nums[i]
        }
        for(let i = 0; i < s.length; i++) {
            if(map.has(s[i] - k)) {
                ans += map.get(s[i] - k)
            }
            if(map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1)
            } else {
                map.set(s[i], 1)
            }
        }
        return ans
    };
