/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
    let max = weights[0], sum = 0
    for(let weight of weights) {
        max = Math.max(max, weight)
        sum += weight
    }
    for(let i = max; i <= sum; i++) {
        let sumBox = 0, box = [], count = 0
        for(let weight of weights) {
            sumBox += weight
            if(sumBox <= i) {
                box.push(weight)
            } else {
                sumBox = weight
                count++
                box = [weight]
            }
        }
        if((count + 1) <= days) return i
    }
};