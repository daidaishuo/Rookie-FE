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
        if(execArr.length >=limit){
            await Promise.race(execArr)
        }
    }
    return Promise.all(res)
}

