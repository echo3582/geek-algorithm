/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
    思路：全排列 关键点在于去重 剪枝条件 注意先给数组排序
    剪枝条件解释： 后一个元素nums[i]与前一个元素nums[i - 1]相等，并且前一个元素nums[i - 1]是刚刚被回退的 这种情况下 跳过当前元素
    举例： [1, 1', 2]  当第一个位置选了1 走到第二个位置还选1（为了区别1，用1'表示） 这是没问题的 但是如果是第一个位置选了1的情况已经穷举完毕 再次回退到没有选择任何元素的状态下，第一个位置选择了1‘ 就会造成重复 所以应该跳过
 */
    var permuteUnique = function(nums) {
        nums.sort((a, b) => a - b)
        this.ans = []
        this.used = []
        this.a = []
        dfs(0, nums)
        return ans
    };
    
    var dfs = function(index, nums) {
        if(index === nums.length) {
            this.ans.push(this.a.slice())
            return
        }
        for(let i = 0; i < nums.length; i++) {
            // 剪枝条件
            if(i > 0 && nums[i] === nums[i - 1] && !this.used[i - 1]) continue
            if(!this.used[i]) {
                this.a.push(nums[i])
                this.used[i] = true
                dfs(index + 1, nums)
                this.used[i] = false
                this.a.pop()
            }
        }
    }