const timeout = i => {
    return () => new Promise(resolve => {
        setTimeout(() => resolve(i), i)
    })
};
const arr = [1000, 5000, 3000, 2000].map(i => timeout(i))

const limitPromiseAll = async (limit, pArr) => {
    const res = [], execArr = []
    for (let fn of pArr) {
        const p = Promise.resolve().then(() => fn())
        res.push(p)
        const e = p.then(() => execArr.splice(execArr.indexOf(e), 1))
        execArr.push(e)
        if (execArr.length >= limit) {
            await Promise.race(execArr)
        }
    }
    // 最后只剩下一组没有resolve
    return Promise.all(res)
}

const limitPromise = async (limit, pArr) => {
    const res = [], execArr = [];
    for (let fn of pArr) {
        const p = Promise.resolve().then(() => fn())
        res.push(p)
        const e = p.then(() => execArr.splice(execArr.indexOf(e), 1))
        execArr.push(e)
        if (execArr.length >= limit) {
            await Promise.race(execArr)
        }
    }
    return Promise.all(res)
}

const limitPromise = async (limit, pArr) => {
    const res = [], execArr = [];
    for (let fn of pArr) {
        const p = Promise.resolve().then(() => fn())
        res.push(p)
        const e = p.then(() => execArr.splice(execArr.indexOf(e), 1))
        execArr.push(e)
        if (execArr.length >= limit) {
            await Promise.race(execArr)
        }
    }
    return Promise.all(res)
}


function myPromiseAll(arr, limit) {
    return new Promise((resolve, reject) => {
        let count = 0
        const n = arr.length
        const res = new Array(n)
        let index = 0
        function step(i) {
            if (count === n) {
                resolve(res)
                return
            }
            if (arr[index]) {
                arr[index]().then(result => {
                    res[i] = result
                    count++
                    step(index)
                })
            }
            index++
        }
        for (let i = 0; i < limit; i++) {
            step(i)
        }
    })
}


