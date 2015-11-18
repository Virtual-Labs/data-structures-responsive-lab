function BinaryTree(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}
BinaryTree.prototype.preorder  = function(f) {this.walk(f,['this','left','right'])}
BinaryTree.prototype.inorder   = function(f) {this.walk(f,['left','this','right'])}
BinaryTree.prototype.postorder = function(f) {this.walk(f,['left','right','this'])}
BinaryTree.prototype.walk = function(func, order) {
    for (var i in order) 
        switch (order[i]) {
            case "this": func(this.value); break;
            case "left": if (this.left) this.left.walk(func, order); break;
            case "right": if (this.right) this.right.walk(func, order); break;
        }
}
BinaryTree.prototype.levelorder = function(func) {
    var queue = [this];
    while (queue.length != 0) {
        var node = queue.shift();
        func(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
 
// convenience function for creating a binary tree
function createBinaryTreeFromArray(ary) {
    var left = null, right = null;
    if (ary[1]) left = createBinaryTreeFromArray(ary[1]);
    if (ary[2]) right = createBinaryTreeFromArray(ary[2]);
    return new BinaryTree(ary[0], left, right);
}
 
var tree = createBinaryTreeFromArray([1, [2, [4, [7]], [5]], [3, [6, [8],[9]]]]);
 
print("*** preorder ***");   tree.preorder(print); 
print("*** inorder ***");    tree.inorder(print); 
print("*** postorder ***");  tree.postorder(print);
print("*** levelorder ***"); tree.levelorder(print);

function preorder(n) {
    return [n[v]].concat(
        n[l] ? preorder(n[l]) : []
    ).concat(
        n[r] ? preorder(n[r]) : []
    );
}
 
function inorder(n) {
    return (
        n[l] ? inorder(n[l]) : []
    ).concat(
        n[v]
    ).concat(
        n[r] ? inorder(n[r]) : []
    );
}
 
function postorder(n) {
    return (
        n[l] ? postorder(n[l]) : []
    ).concat(
        n[r] ? postorder(n[r]) : []
    ).concat(
        n[v]
    );
}
 
function levelorder(n) {
    return (function loop(x) {
        return x.length ? (
            x[0] ? (
                [x[0][v]].concat(
                    loop(
                        x.slice(1).concat(
                            [
                                x[0][l],
                                x[0][r]
                            ]
                        )
                    )
                )
            ) : loop(x.slice(1))
        ) : [];
    })([n]);
}
 
var v = 0,
    l = 1,
    r = 2,
 
    tree = [1,
                [2,
                    [4,
                        [7]
                    ],
                    [5]
                ],
                [3,
                    [6,
                        [8],
                        [9]
                    ]
                ]
            ];
 
console.log(
    [preorder, inorder, postorder, levelorder].map(
        function (f) {
            return f.name + ':\t\t' + f(tree).join(' ');
        }
    ).join('\n')
);