/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let map = new Map(), count = 0
    for(let jewel of jewels) {
        map.set(jewel, true)
    }
    for(let stone of stones) {
        if(map.get(stone)) {
            count++
        }
    }
    return count
};