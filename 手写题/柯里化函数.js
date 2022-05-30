function curry(fn) {
    let args = [...arguments].slice(1)
    return function () {
        let self = this
        fn.apply(this, args.concat(arguments))
    }
}