Promise.all = function (values) {

    let promiseResultes = [];
    let len = values.length;
    let sucessCount = 0

    return new Promise((reslove, reject) => {
        values.forEach((item) => {
            Promise.resolve(item).then((res,index) => {
                sucessCount++
                promiseResultes[index] = res
                if(len === sucessCount){
                    reslove(promiseResultes)
                }
            }).catch((e) => {
                reject(e)
            })
        })
    })
}