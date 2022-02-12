/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    let n = 0
    for(let edge of edges) {
        n = Math.max(edge[0], edge[1], n)
    }
    // 建立并查集
    this.fa = new Array(n)
    for(let i = 0; i < n; i++) fa[i] = i
    
    for(let edge of edges) {
        let x = edge[0], y = edge[1]
        if(find(x) !== find(y)) union(x, y)
        else return edge
    }
};

var find = function(x) {
    if(this.fa[x] === x) return x
    return this.fa[x] = find(this.fa[x])
}

var union = function(x, y) {
    x = find(x), y = find(y)
    if(x === y) return
    this.fa[x] = y
}