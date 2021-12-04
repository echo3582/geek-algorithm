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
