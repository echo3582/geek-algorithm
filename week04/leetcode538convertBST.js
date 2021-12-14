/**
 * 
 * leetcode538.把二叉搜索树转换为累加树
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

    示例 1：
    输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
    输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/convert-bst-to-greater-tree
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/**
    思路：反中序遍历 右根左 遍历时修改root的值
 */
    var convertBST = function(root) {
        this.sum = 0
        inorder(root)
        return root
    };
    
    var inorder = function(root) {
        if(!root) return null
        inorder(root.right)
        this.sum += root.val
        root.val = this.sum
        inorder(root.left)
    }
