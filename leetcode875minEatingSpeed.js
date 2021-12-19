/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let max = 0
    for(let p of piles) {
        max = Math.max(p, max)
    }
    let left = 1, right = max
    while(left < right) {
        let mid = (left + right) >> 1
        if(possible(mid, piles, h)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
};

var possible = function(k, piles, h) {
    let sum = 0
    for(let p of piles) {
        sum += Math.ceil(p / k)
    }
    if(sum <= h) return true
}
