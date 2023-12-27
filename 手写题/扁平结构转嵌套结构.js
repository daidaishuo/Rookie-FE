// 扁平结构转嵌套结构.js
// 扁平结构
const list = [
    {
        name: '数据1',
        parent: null,
        id: 1,
    },
    {
        name: '数据2',
        id: 2,
        parent: 1,
    },
    {
        name: '数据3',
        parent: 2,
        id: 3,
    },
    {
        name: '数据4',
        parent: 3,
        id: 4,
    },
];

//   // 树形结构
const tree = [
    {
        name: '数据1',
        id: 1,
        children: [
            {
                name: '数据2',
                id: 2,
                children: [
                    {
                        name: '数据3',
                        id: 3,
                        children: [
                            {
                                name: '数据4',
                                id: 4,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];


function buildTree(list, root) {
    const map = {}
    let res = []
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let { parent, id } = item
        let parentNode = map[parent]
        if (!map[id]) {
            map[id] = item
        }
        if (parentNode) {
            Array.isArray(parentNode.children) ? parentNode.children.concat(item) : parentNode.children = [item]
        } else {
            if (root === parent) {
                res.push(item)
            }
        }
    }
    return res
}
const tree2 = buildTree(list, null);
console.log(JSON.stringify(tree2))