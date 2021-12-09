/**
 * leetcode106. 从中序与后序遍历序列构造二叉树
 * 注意:你可以假设树中没有重复的元素。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

/**
 * 思路：递归 算坐标
 */
 var buildTree = function(inorder, postorder) {
    this.inorder = inorder
    this.postorder = postorder
    return build(0, inorder.length - 1, 0, postorder.length -1)
};

var build = function(l1, r1, l2, r2) {
    if(l1 > r1) return null
    let rootValue = this.postorder[r2]
    let mid = l1
    while(this.inorder[mid] !== rootValue) mid++
    let root = new TreeNode(rootValue)
    root.left = build(l1, mid - 1, l2, l2 + mid - l1 - 1)
    root.right = build(mid + 1, r1, l2 + mid - l1 , r2 - 1)
    return root
}
