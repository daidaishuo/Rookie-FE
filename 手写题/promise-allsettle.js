Promise.allSettled = function (values) {
    return new Promise((reslove, reject) => {
        let len = values.length;
        let count = 0;
        let promiseResultes = [];
        values.forEach((item, i) => {
            Promise.resolve(item).then((res) => {
                count++
                promiseResultes[i] = {
                    status: 'fulfilled',
                    value: res
                }
            }, (err) => {
                count++
                promiseResultes[i] = {
                    status: 'rejected',
                    value: err
                }
            }).finally(() => {

                if (count === len) {
                    reslove(promiseResultes)
                }
            })
        })
    })
}

Promise.allSettled = function (values) {
    let len = values.length;
    let promiseResultes = [];
    let count = 0;
    return new Promise((reslove, reject) => {
        values.forEach((item, index) => {
            Promise.reslove(item).then((res) => {
                count++
                promiseResultes[index] = {
                    status: 'fulfilled',
                    values: res
                }
            }).catch((e) => {
                count++
                promiseResultes[index] = {
                    status: 'fulfilled',
                    values: e
                }
            }).finally(() => {
                if (count === len) {
                    reslove(promiseResultes)
                }
            })
        })
    })
}