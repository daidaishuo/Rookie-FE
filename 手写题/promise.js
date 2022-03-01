// https://jacky-summer.github.io/2020/09/21/ES6%E7%B3%BB%E5%88%97%E4%B9%8B%E6%89%8B%E5%86%99Promise/
// http://www.ychaonote.com/article/316.html
const STATUS = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}
class Promise {
    constructor(executor) {
        this.status = STATUS.PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResloveCallbacks = [];
        this.onRejectedCallback = [];
        const reslove = (val) => {
            if (this.status === STATUS.PENDING) {
                this.status = STATUS.FULFILLED;
                this.value = val;
                this.onResloveCallbacks.forEach((fn) => fn())
            }
        }
        const reject = (val) => {
            if (this.status === STATUS.REJECTED) {
                this.status = STATUS.REJECTED
                this.reason = val;
                this.onRejectedCallback.forEach((fn) => fn())
            }
        }
        try {
            executor(reslove, reject)
        } catch (err) {

        }
    }
    then(onFulfilled,onRejected) {
        if(this.status === STATUS.FULFILLED){
            onFulfilled(this.val)
        }
        if(this.status === STATUS.FULFILLED){
            onRejected(this.val)
        }
        if(this.status === STATUS.PENDING){
            this.onResloveCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onResloveCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }
}