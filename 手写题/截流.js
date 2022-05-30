// 一段时间只执行一次
function throttle(func, wait) {
    let context, args;
    let previous = 0;
    return function () {
        let now = +new Date();
        context = this;
        args = [...arguments];
        if (now - previous > wait) {
            func.apply(context, args)
            previous = now;
        }
    }
}

function throttle(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = [...arguments]
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
}