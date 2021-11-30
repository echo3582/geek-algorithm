/**
 * leetcode1074. 元素和为目标值的子矩阵数量
 * 给出矩阵 matrix 和目标值 target，返回元素总和等于目标值的非空子矩阵的数量。

    子矩阵 x1, y1, x2, y2 是满足 x1 <= x <= x2 且 y1 <= y <= y2 的所有单元 matrix[x][y] 的集合。

    如果 (x1, y1, x2, y2) 和 (x1', y1', x2', y2') 两个子矩阵中部分坐标不同（如：x1 != x1'），那么这两个子矩阵也不同。

    示例1：
    输入：matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
    输出：4
    解释：四个只含 0 的 1x1 子矩阵。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

/**
 * 
 * 思路：二维前缀和
 * 注意边界条件检查
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
 var numSubmatrixSumTarget = function(matrix, target) {
    let s = new Array(matrix.length + 1).fill(0).map(() => new Array(matrix[0].length + 1).fill(0))
    let count = 0
    for(let i = 1; i <= matrix.length; i++) {
        for(let j = 1; j <= matrix[0].length; j++) {
            s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + matrix[i - 1][j - 1]
        }
    }
    for(let i = 1; i < s.length; i++) {
        for(let p = 1; p <= i; p++) {
            for(let j = 1; j < s[0].length; j++) {
                for(q = 1; q <= j; q++) {
                    if(s[i][j] - s[p - 1][j] - s[i][q - 1] + s[p - 1][q - 1] === target) {
                        count++
                    }
                }
            }
        }
    }
    return count
};