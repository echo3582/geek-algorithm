/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    let m = triangle.length
    let dp = new Array(m)
    dp[0] = triangle[0][0]
    for(let i = 1; i < m; i++) {
        dp[i] = dp[i - 1] + triangle[i][i]
        for(let j = i - 1; j > 0; j--) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j]
        }
        dp[0] = dp[0] + triangle[i][0]
    }
    let min = Infinity
    for(let i = 0; i < m; i++) {
        if(dp[i] < min) {
            min = dp[i]
        }
    }
    return min
};