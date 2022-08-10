//防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行
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

function debounce(func, delay) {
    let timer = null;
    return function (...args) {
        let ctx = this;
        if (timmer) {
            clearTimeout(timer)
        } else {
            timer = setTimeout(function () {
                func.apply(ctx, args)
            })
        }
    }
}

function debounce(fn){
    let timer = null
    return function (...args){
        let ctx = this;
        if(timeer){
            clearTimeout()
        }else{
            timer = setTimeout(() => {
                fn.apply(ctz,args)
            });
        }
    }
}



function debounce(fn, timmer, immdiate) {
    let timeout, result;
    return function () {
        let self = this
        let args = [...arguments];

        if (timeout) clearTimeout(timeout);

        if (immdiate) {

            let callNow = !timeout;

            timeout = setTimeout(function () {
                timeout = null;
            }, wait)

            if (callNow) result = func.apply(self, args)

        } else {

            timeout = setTimeout(function () {
                result = fn.apply(self, args)
            }, timmer)

        }
        return result;
    }
}