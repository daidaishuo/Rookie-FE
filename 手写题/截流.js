function throttle(fn, delay) {
    let canRun = false;
    return function (args) {
        let [that, _args] = [this, args]
        if (!canRun) return
        canRun = false;
        setTimeout(() => {
            fn.apply(that, _args)
            canRun = true
        }, delay)
    }
}

function throttle(fn, wait) {
    var prev = 0
    return function () {
        let now = Date.now()
        let context = this
        let args = arguments
        if (now - prev > wait) {
            fn.apply(context, args)
            prev = now
        }
    }
}
