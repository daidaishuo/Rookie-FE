function debounce(func, delay) {
    let timmer = null;
    return function (...args) {
        let ctx = this
        if (timmer) {
            clearTimeout(timmer)
        }
        timmer = setTimeout(function () {
            func.apply(ctx, args)
        }, delay)
    }
}


function debounce(fn, timmer) {
    let timmer = null
    return function () {
        if (!timmer) {
            timmer = setTimeout(fn, timmer)
        } else {
            clearTimeout(timmer)
            timmer = setTimeout(fn, timmer)
        }
    }
}