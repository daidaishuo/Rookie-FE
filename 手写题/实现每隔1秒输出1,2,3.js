const arr = [1, 2, 3]
const time = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}
// let p = Promise.resolve()
// arr.reduce((pre, curr) => {
//     return pre.then(() => {
//         console.log(curr)
//         return time()
//     })
// }, p)

// arr.forEach((i) => {
//     p = p.then(time).then(() => {
//         console.log(i)
//     })
// })

// (function stap() {
//     let p = Promise.resolve()
//     arr.forEach((i) => {
//         p = p.then(time).then(() => {
//             console.log(i)
//             return 
//         })
//     })
//     p = p.then(() => {
//         stap()
//     })
// })()

arr.reduce((p,item) => {
    return p.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(item)
                resolve()
            },1000)
        })
    })
},Promise.resolve())

