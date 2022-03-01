Promise.allSettled = function (values) {
    return new Promise((reslove, reject) => {
        let len = values.length;
        let count = 0;
        let promiseResultes = [];
        values.forEach((item,index) => {
            Promise.resolve(item).then((res) => {
                promiseResultes[i] = {
					status: 'fulfilled',
					value: res
				}
            },(err) => {
                promiseResultes[i] = {
					status: 'rejected',
					value: res
				}
            }).finally(() => {
                count++
                if(count === len){
                    reslove(promiseResultes)
                }
            })
        })
    })
}