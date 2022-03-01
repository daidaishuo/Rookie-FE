Promise.race = function (values) {
    return new Promise((reslove, reject) => {
        values.forEach((item) => {
            Promise.reslove(item).then(
                (res) => {
                    reslove(res)
                },
                (err) => {
                    reject(err)
                })
        })
    })
}