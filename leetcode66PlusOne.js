/**
 * LeetCode 66.加一
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例 1：
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 * 
 * 提示：
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

/**
 * 思路：
 * 1.从右往左找到第一个数字不为9的数字加1，然后把此位置右侧的位数均设为0
 * 2.若所有位数均为9，则补一位，首位设为1，其余位置设为0
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] !== 9) {
            digits[i]+=1
            for(let j = i + 1; j < digits.length; j++) {
                digits[j] = 0
            }
            return digits
        }
    }
    let newDigits = new Array(digits.length + 1)
    newDigits.fill(0)
    newDigits[0] = 1
    return newDigits
};
