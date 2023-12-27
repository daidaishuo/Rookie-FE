
const timeout = i => {
    return () => new Promise(resolve => {
        setTimeout(() => {
            console.log(`停止了：${i}`)
            resolve(i)
        }, i)
    })
};
const arr = [1000, 5000, 3000, 2000, 6000, 3000].map(i => timeout(i))

const limitPromiseAll = async (pArr, limit) => {
    let res = [], exArr = []
    for (let fn of pArr) {
        let p = Promise.resolve().then(() => fn())
        res.push(p)
        let e = p.then(() => exArr.splice(exArr.indexOf(e),1))
        exArr.push(e)
        if(exArr.length>=limit){
            await Promise.race(exArr)
        }
    }
    return Promise.all(res)
}

limitPromiseAll(arr, 3).then((c) => {
    console.log(2222, c)
})

