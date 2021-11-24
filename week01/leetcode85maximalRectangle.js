/**
 * leetcode85.最大矩形
 * 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 * 
 * 示例 1：
 * 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：6
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */

/**
    思路：把矩阵转化为柱状图，本题就变成了84题 转化的方法是heights个元素初始化为0，之后如果matrix[i][j]为'0'，则heights[j]为0,否则heights[j] = heights[j] + 1
    注意：push(0)之前对参数height做一下拷贝 防止修改参数
 */
    var maximalRectangle = function(matrix) {
        if(!matrix.length || !matrix[0].length) {
            return 0
        }
        let max = 0
        let m = matrix.length
        let n = matrix[0].length
        let heights = new Array(n)
        heights.fill(0)
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                heights[j] = matrix[i][j] === '0' ? 0 : heights[j] + 1
            }
            max = Math.max(max, largestRect(heights))
        }
        return max
    };
    
    var largestRect = function(height) {
        let heights = height.slice(0)
        heights.push(0)
        let stack = []
        let ans = 0
        for(item of heights) {
            let width = 0
            while(stack.length && item < stack[stack.length - 1].height) {
                width += stack[stack.length - 1].width
                ans = Math.max(ans, stack[stack.length - 1].height * width)
                stack.pop()
            }
            stack.push({width: width + 1, height: item})
        }
        return ans
    }