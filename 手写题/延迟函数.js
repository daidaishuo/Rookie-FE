const delay1 = (n, value) => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, n)
    })
    let p2 = new Promise((resolve,reject) => {
        delay1.abort = reject;
    })
    return Promise.race([p1,p2])
}

delay1(2000,{value: 'hhahah'}).then((json) => {
    console.log(json)
}).catch((err) => {
    console.log(err)
})
