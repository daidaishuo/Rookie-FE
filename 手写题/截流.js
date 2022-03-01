function throttle(fn, delay) {
    let canRun = false;
    return function (arg) {
        let [that, _args] = [this, args]
        if (!canRun) return
        canRun = false;
        setTimeout(() => {
            fn.apply(that, _args)
            canRun = true
        }, delay)
    }
}

function throttle2(fn, delay) {
    let last = '';
    let deferTimer = null;
    return function () {
        let now = +new Date();
        if (last && now < last + delay) {
            deferTimer 
        }
    }
}
