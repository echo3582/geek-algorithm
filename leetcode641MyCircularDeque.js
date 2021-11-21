/**
 *  leetcode641. 设计循环双端队列
 *  设计实现双端队列。
    你的实现需要支持以下操作：

    MyCircularDeque(k)：构造函数,双端队列的大小为k。
    insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
    insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
    deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
    deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
    getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
    getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
    isEmpty()：检查双端队列是否为空。
    isFull()：检查双端队列是否满了。
    示例：

    MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
    circularDeque.insertLast(1);			        // 返回 true
    circularDeque.insertLast(2);			        // 返回 true
    circularDeque.insertFront(3);			        // 返回 true
    circularDeque.insertFront(4);			        // 已经满了，返回 false
    circularDeque.getRear();  				// 返回 2
    circularDeque.isFull();				        // 返回 true
    circularDeque.deleteLast();			        // 返回 true
    circularDeque.insertFront(4);			        // 返回 true
    circularDeque.getFront();				// 返回 4
     
     

    提示：

    所有值的范围为 [1, 1000]
    操作次数的范围为 [1, 1000]
    请不要使用内置的双端队列库。
 */

/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.queue = []
    this.size = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.queue.length < this.size) {
        this.queue.unshift(value)
        return true
    } else {
        return false
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.queue.length < this.size) {
        this.queue.push(value)
        return true
    } else {
        return false
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.queue.length) {
        this.queue.shift()
        return true
    } else {
        return false
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.queue.length) {
        this.queue.pop()
        return true
    } else {
        return false
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.queue.length) {
        return this.queue[0]
    } else {
        return -1
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.queue.length) {
        return this.queue[this.queue.length - 1]
    } else {
        return -1
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return !this.queue.length ? true : false
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queue.length >= this.size ? true : false
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
