// 输入 45dss 返回 ['广东省', '深圳市']
const cityData = [
    {
        id: 'axzx',
        name: '广东省',
        children: [
            {
                id: 'sdsd',
                name: '深圳市',
                children: [
                    {
                        id: '45dss',
                        name: '南山区',
                    },
                    {
                        id: 'sdsd11',
                        name: '福田区',
                        children: [
                            {
                                id: 'ddrr2',
                                name: 'A街道',
                            },
                        ],
                    },
                ],
            },
            {
                id: '2323d',
                name: '东莞市',
                children: [
                    {
                        id: 'xxs2',
                        name: 'A区',
                    },
                    {
                        id: 'kklio2',
                        name: 'B区',
                    },
                ],
            },
        ],
    },
];

const findId = (targetStr) => {
    let res
    function dfs(values, arr) {
        if (typeof values === 'object' && !Array.isArray(values) && values.id === targetStr) {
            res = arr
            return
        }

        if (Array.isArray(values)) {
            for (let i = 0; i < values.length; i++) {
                dfs(values[i], arr.concat())
            }
        } else {
            if (!values.children) {
                return
            }
            dfs(values.children, arr.concat(values.name))
        }

    }
    dfs(cityData, [])
    return res
}
console.log(findId('45dss'))