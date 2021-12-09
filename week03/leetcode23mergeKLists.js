/**
 * leetcode23.合并K个升序链表
 
    给你一个链表数组，每个链表都已经按升序排列。
    请你将所有链表合并到一个升序链表中，返回合并后的链表。

    示例 1：

    输入：lists = [[1,4,5],[1,3,4],[2,6]]
    输出：[1,1,2,3,4,4,5,6]
    解释：链表数组如下：
    [
        1->4->5,
        1->3->4,
        2->6
    ]
    将它们合并到一个有序链表中得到。
    1->1->2->3->4->4->5->6

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * 思路：分治
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1)
};

var merge = function(lists, l , r) {
    if(l === r) return lists[l]
    if(l > r) return null
    let mid = (l + r) >> 1
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))
}

var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0)
    let protect = head
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            head.next = list1
            list1 = list1.next
            head = head.next
        } else {
            head.next = list2
            list2 = list2.next
            head = head.next
        }
    }
    if(list1) head.next = list1
    if(list2) head.next = list2
    return protect.next
}
