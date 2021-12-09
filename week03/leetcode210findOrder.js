/**
 * leetcode210. 课程表2
    
    现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
    例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
    返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。

    示例 1：

    输入：numCourses = 2, prerequisites = [[1,0]]
    输出：[0,1]
    解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
    示例 2：

    输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    输出：[0,2,1,3]
    解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
    因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。

    提示：
    1 <= numCourses <= 2000
    0 <= prerequisites.length <= numCourses * (numCourses - 1)
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    ai != bi
    所有[ai, bi] 互不相同

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/course-schedule-ii
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
/**
    思路：拓扑排序 有向无环图
    跟课程表1相同，只是返回不同，本题需要把lessons列表返回。注意有环时要返回空，结尾需要判断一下。再有就是注意一下出边数组顺序to[bi].push(ai)，别弄反了。
 */
    var findOrder = function(numCourses, prerequisites) {
        let to = new Array(numCourses).fill(0).map(() => new Array())
        let inDeg = new Array(numCourses).fill(0)
        let lessons = []
        let stack = []
        for(let item of prerequisites) {
            let ai = item[0]
            let bi = item[1]
            inDeg[ai]++
            to[bi].push(ai)
        }
        for(let i = 0; i < numCourses; i++) {
            if(!inDeg[i]) {
                stack.push(i)
            }
        }
        while(stack.length) {
            let top = stack.pop()
            lessons.push(top)
            for(let item of to[top]) {
                inDeg[item]--
                if(!inDeg[item]) {
                    stack.push(item)
                }
            }
        }
        return  lessons.length === numCourses ? lessons : []
    };