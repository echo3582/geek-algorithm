/**
 *  
 *  给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 *  完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/perfect-squares
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {number}
 */
/**
    思路：和322零钱兑换思路相同，只不过这里的递推公式是dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
    注意：j的范围在[1, 根号i] 所以循环范围是j = 1; j * j <= i
 */
    var numSquares = function(n) {
        let dp = new Array(n + 1)
        dp[0] = 0
        dp[1] = 1
        for(let i = 1; i <= n; i++) {
            dp[i] = Infinity
            for(j = 1; j * j <= i; j++) {
                if(i - j * j >= 0) {
                    dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
                }
            }
        }
        return dp[n]
    };