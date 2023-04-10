// curry
function curry(fn) {
    return function currySum(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (args2) {
                return currySum.apply(this, args.concat(args2))
            }
        }
    }
}

// 异步调度器
class Scheduler {
    constructor() {
        this.task = []
        this.runningTask = []
    }

    add(promisecreator) {
        return new Promise((resolve, reject) => {
            promisecreator.resolve = resolve
            if (this.runningTask.length < 2) {
                this.run(promiseCreator)
            } else {
                this.task.push(promisecreator)
            }
        })
    }

    run(promiseCreator) {
        this.runningTask.push(promiseCreator)
        promiseCreator.then(() => {
            promiseCreator.resolve()
            this.runningTask.splice(this.runningTask.findIndex(promiseCreator), 1)
            if (this.task.length > 0) {
                this.run(this.task.shift())
            }
        })
    }
}


// 合并有序链表 https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/solution/he-bing-liang-ge-pai-xu-de-lian-biao-by-g3z6g/
function mergeTwoList(l1, l2) {
    if (l1 === null) {
        return l2
    }

    if (l2 === null) {
        return l1
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoList(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoList(l1, l2.next)
        return l2
    }
}
// 买卖股票最佳时机 https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
function maxProfit() {
    
}

// 两数之和
function twoSum(nums, target) {
    const hash = new Map()
    for (let i = 0; i < nums.length; ++i) {
        if (hash.has(target - nums[i])) {
            return [hash.get(target - nums[i]), i]
        }
        hash.set(nums[i], i)
    }

    return []
}
// 最长字串
function longestStr(str) {
    let res = 0;
    let start = 0;
    let last = {}

    for (let i = 0; i < str.length; ++i) {
        const key = str[i]
        start = Math.max(start, (last[key] || 0) + 1)
        res = Map.max(res, i - start + 1)

        last[key] = i
    }
    return res;
}

// 版本号对比
function compareVision(version1, version2) {
    const v1 = version1.split('.')
    const v2 = version2.split('.')

    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i])
        }
        if (i < v2.length) {
            y = parseInt(v2[i])
        }

        if (x > y) return 1

        if (x < y) return -1

        return 0
    }
}

// 扑克牌顺子 https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

// 实现计算器 id：224
var calculate = function (s) {
    const ops = [1];
    let sign = 1;

    let ret = 0;
    const n = s.length;
    let i = 0;
    while (i < n) {
        if (s[i] === ' ') {
            i++;
        } else if (s[i] === '+') {
            sign = ops[ops.length - 1];
            i++;
        } else if (s[i] === '-') {
            sign = -ops[ops.length - 1];
            i++;
        } else if (s[i] === '(') {
            ops.push(sign);
            i++;
        } else if (s[i] === ')') {
            ops.pop();
            i++;
        } else {
            let num = 0;
            while (i < n && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
                num = num * 10 + s[i]
                i++;
            }
            ret += sign * num;
        }
    }
    return ret;
};

// 分割IP
// https://leetcode.cn/problems/0on3uN/solution/fu-yuan-ip-by-leetcode-solution-2lfx/


// 实现Promise.all
function PromiseAll(promises) {

    if (!Array.isArray(promises)) {
        return Promise.reject('Type Error')
    }

    return new Promise((resolve, reject) => {
        let count = 0
        let resList = []
        for (let i = 0; i < promises.length; ++i) {
            Promise.resolve(promises[i]).then(res => {
                count++
                resList[i] = res
                if (count === promises.length) {
                    return resolve(resList)
                }
            }, (err) => {
                reject(err)
            })
        }
    })
}

// 合并两个有序数组
function merge(nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    const sorted = new Array(m + n).fill(0)

    let cur
    while(p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++]
        } else if (p2 === n) {
            cur = nums1[p1++]
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++]
        } else {
            cur = nums12[p2++]
        }

        sorted[p1 + p1 - 1] = cur
    }

    for(let i = 0; i !== m +n; i++) {
        nums1[i] = sorted[i];
    }
}

// 字符串相加  '456' + '77'
function addStrings(s1, s2) {
    let i = s1.length - 1
    let j = s2.length - 1
    let add = 0
    const res = []

    while(i >= 0 || j >= 0 || add !== 0) {
        let x = 0
        let y = 0
        if (i >= 0) {
            x = s1[i]
        }
        if (j >= 0) {
            j = s2[j]
        }

        const result = x + y + add

        res.push(result % 10)

        add = Math.floor(result / 10)

        i -= 1
        j -= 1
    }

    return res.reverse().join('')
}

// 数组flat，并且去重
function toFlat(arr) {
    // return arr.flat(Infinity)
    return Array.from(new Set(arr.flat(Infinity)))
}

// 树 2 数组
function treeToArray(treeList) {
    return treeList.reduce((pre, cur) => {
        const { children = [], ...item } = cur
    
        return pre.concat([{...item}], treeToArray(children))
    }, [])
}

// 数组 2 树
function arrayToTree(arr) {
    const map = arr.reduce((pre, cur) => {
        pre[cur.id] = cur
        return pre
    }, {})

    const result = []


    for(let item of arr) {
        if (item.parent_id === 0) {
            result.push(item)
            continue
        }

        const d = map[item.parent_id]
        if (d) {
            d.children = d.children || []
            d.children.push(item)
        }
    }

    return result
}

// 括号
function isValid(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false
    }

    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ])

    const stk = []

    for (let ch of s) {
        if (map.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== map.get(ch)) {
                return false
            }
            stk.pop()
        } else {
            stk.push(ch)
        }
    }

    return !stk.length
}
