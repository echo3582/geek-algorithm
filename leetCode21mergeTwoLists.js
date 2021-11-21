/**
 * leetcode21. 合并有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * 示例1：
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 提示：
 * 两个链表的节点数目范围是 [0, 50]
 * -100 <= Node.val <= 100
 * l1 和 l2 均按 非递减顺序 排列
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * 思路：
 * 1.合并思路和数组一致，只不过链表遍历方法和数组有所不同，是通过指针移动
 * 2.加一个哨兵结点更方便
 */
 var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0, l1)
    let protect = head
    while(l1 || l2) {
        if(!l2 || (l1 && l1.val < l2.val)) {
            head.next = l1
            l1 = l1.next
            head = head.next
        } else {
            head.next = l2
            l2 = l2.next
            head = head.next
        }
    }
    return protect.next
};
