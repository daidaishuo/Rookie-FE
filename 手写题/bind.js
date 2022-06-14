
Function.prototype.myBind = function (ctx) {
    let self = this;
    let args = [...arguments].slice(1)
    return function () {
        let bindArgs = [...arguments]
        self.apply(ctx, args.concat(bindArgs))
    }
}

Function.prototype.myBind = function (ctx) {
    let self = this;
    let args = [...arguments].slice(1);

    let temp = function () {

    }

    let res = function () {
        let bindArgs = [...arguments]

        return self.apply(this instanceof res ? this : ctx, args.concat(bindArgs))
    }

    temp.prototype = this.prototype
    res.prototype = new temp()
    return res
}
https://github.com/mqyqingfeng/Blog/issues/12

Function.prototype.myBind = function (ctx) {
    let self = this;
    let args = [...arguments].slice(1);
    const temp = function () {}
    const res = function () {
        let bindArgs = [...arguments];

        return self.apply(this instanceof res ? this : ctx, args.concat(bindArgs))
    }

    temp.prototype = this.prototype;
    res.prototype = new temp()
    
    return res
}