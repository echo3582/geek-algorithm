/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let ans = strs[0]
    for(let i = 1; i < strs.length; i++) {
        ans = getCommonPrefix(ans, strs[i])
        if(ans === '') return ans
    }
    return ans
};

var getCommonPrefix = function(a, b) {
    let i = 0; j = 0, prefix = ''
    while(i < a.length && j < b.length) {
        if(a[i] === b[i]) {
            prefix += a[i]
            i++
            j++
        } else {
            return prefix
        }
    }
    return prefix
}