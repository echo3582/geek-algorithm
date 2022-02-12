/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    this.m = grid.length
    this.n = grid[0].length
    let dx = [0, 0, 1, -1], dy = [1, -1, 0, 0]
    // 建立并查集时注意二维转一维
    this.fa = new Array(m * n).fill(-1)
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') fa[i * n + j] = i * n + j
        }
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                // 每一个点的四个方向如果也是1的话就把他们union起来
                for(let d = 0; d < 4; d++) {
                    let ii = i + dx[d], jj = j + dy[d]
                    if(ii >= 0 && ii < m && jj >= 0 && jj < n && grid[ii][jj] === '1') {
                        union(i * n + j, ii * n + jj)
                    }
                }
            }
        }
    }
    // 利用set的性质数有几个集合
    let set = new Set()
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                set.add(find(i * n + j))
            }
        }
    }
    return set.size
};

var union = function(x, y) {
    x = find(x), y = find(y)
    if(x !== y) this.fa[x] = y
}

var find = function(i) {
    if(this.fa[i] === i) return i
    return this.fa[i] = find(this.fa[i])
}
