// 
function debounce(fn, delay) {
    let timmer = null;
    return function () {
        if (!timmer) {
            timmer = setTimeout(fun, delay)
        } else {
            clearTimeout(timmer)
            timmer = setTimeout(fun, delay)
        }
    }
}