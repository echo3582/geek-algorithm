var Twitter = function() {
    this.map = new Map()
    this.time = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(this.map.has(userId)) {
        for(let follower of this.map.get(userId).followerIds) {
            let params = this.map.get(follower)
            time = this.time++
            params.newsFeed.push({
                    key: time, 
                    userId, 
                    tweetId
            })
            params.tweeters.push({tweetId, key: time})
            this.map.set(follower, {
                ...params,
                tweeters: params.tweeters,
                newsFeed: params.newsFeed
        })}
    } else {
        let heap = new BinaryHeap()
        time = this.time++
        heap.push({
            key: time, 
            userId, 
            tweetId
        })
        this.map.set(userId, {
            // 我关注的人
            followeeIds: [userId], 
            // 关注者
            followerIds: [userId],
            tweeters: [{tweetId, key: time}],
            newsFeed: heap
        })
    }
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(!this.map.has(userId)) return []
    let ans = []
    let user = this.map.get(userId)
    let n = user.newsFeed.size() > 10 ? 10 : user.newsFeed.size()
    let temp = []
    while(n !== 0 && user.newsFeed.getMax()) {
        if(user.newsFeed.getMax() && user.followeeIds.indexOf(user.newsFeed.getMax().userId) !== -1) {
            ans.push(user.newsFeed.getMax().tweetId)
            n--
        }
        temp.push(user.newsFeed.getMax())
        user.newsFeed.pop()
    }
    for(let t of temp) {
        user.newsFeed.push(t)
    }
    return ans
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.map.has(followeeId)) {
        this.map.set(followeeId, {
            // 我关注的人
            followeeIds: [followeeId], 
            // 关注者
            followerIds: [followerId, followeeId],
            tweeters: [],
            newsFeed: new BinaryHeap()
        })
    } else {
        let followee = this.map.get(followeeId)
        if(followee && followee.followerId) {
            if(followee.followerIds.indexOf(followerId) === -1) {
                followee.followerIds.push(followerId)
            }
            this.map.set(followeeId, {
                ...followee,
                followerIds: followee.followerIds
            }) 
        }
    }
    

    if(!this.map.has(followerId)) {
        let heap = new BinaryHeap()
        if(this.map.has(followeeId)) {
            this.map.get(followeeId).tweeters.map((tweeter) => {
                heap.push({
                    key: tweeter.key, 
                    userId: followeeId, 
                    tweetId: tweeter.tweetId
                })
            })
        }
        this.map.set(followerId, {
            // 我关注的人
            followeeIds: [followeeId, followerId], 
            // 关注者
            followerIds: [followerId],
            tweeters: [],
            newsFeed: heap
        })
    } else {
        let follower = this.map.get(followerId)
        if(follower && follower.followeeIds) {
            if(follower.followeeIds.indexOf(followeeId) === -1) {
                follower.followeeIds.push(followeeId)
            }
            if(this.map.has(followeeId)) {
                this.map.get(followeeId).tweeters.map((tweeter) => {
                    if(!follower.newsFeed.heap.filter((item) => item.key === tweeter.key).length) {
                        follower.newsFeed.push({
                            key: tweeter.key, 
                            userId: followeeId, 
                            tweetId: tweeter.tweetId
                        })
                    }
                })
            }
            this.map.set(followerId, {
                ...follower,
                newsFeed: follower.newsFeed,
                followeeIds: follower.followeeIds
            })
        }
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
        let follower = this.map.get(followerId)
        let followee = this.map.get(followeeId)
        this.map.set(followerId, {
            ...follower,
            followeeIds: follower.followeeIds.filter((id) => id !== followeeId)
        }) 
        this.map.set(followeeId, {
            ...followee,
            followerIds: follower.followerIds.filter((id) => id !== followerId)
        }) 
};

class BinaryHeap {
    constructor() {
        this.heap = []
    }
    swap(i, j) {
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
    isEmpty() {
        return !this.heap.length
    }
    size() {
        return this.heap.length
    }
    push(num) {
        this.heap.push(num)
        this.heapifyUp(this.heap.length - 1)
    }
    pop() {
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.heapifyDown(0)
    }
    getMax() {
        let top = this.heap[0]
        return top
    }
    heapifyUp(p) {
        while(p > 0) {
            let father = p - 1 >> 1
            if(this.heap[father].key < this.heap[p].key) {
                this.swap(father, p)
                p = father
            } 
            else break
        }
    }
    heapifyDown(p) {
        let child = 2 * p + 1
        while(child < this.heap.length) {
            let other = 2 * p + 2
            if(other < this.heap.length && this.heap[other].key > this.heap[child].key) child = other
            if(this.heap[child].key > this.heap[p].key) {
                this.swap(p, child)
                p = child
                child = 2 * p + 1
            }
            else break
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */