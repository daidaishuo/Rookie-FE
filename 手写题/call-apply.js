Function.prototype.myCall = function(ctx){
    if(typeof this !== 'function'){
        throw new TypeError(this + ' is not a function');
    }
    ctx = ctx || window
    let key = Symbol(ctx);
    ctx[key] = this;
    let args= [...arguments].slice(1)
    const res = ctx[key](...args)
    delete ctx[key]
    return res
}

Function.prototype.mycall = function(ctx){
    if(typeof this !== 'function'){
        throw new TypeError(this + ' is not a function');
    }
    ctx = ctx || window;
    let fn = Symbol(ctx);
    ctx[fn] = this;
    let args = [...arguments].slice(1);
    ctx[fn](...args)
    delete ctx[fn]
    return res
}

Function.prototype.myCall= function(ctx){
    if(typeof this !== 'function'){
        throw new TypeError(this + ' is not a function');
    }
    ctx = ctx || window;
    const args = [...arguments].slice(1)
    let key = Symbol(ctx)
    ctx[key] = this;
    const res = ctx[key](...args)
    delete ctx[fn]
    return res
}
https://github.com/mqyqingfeng/Blog
https://juejin.cn/post/6844903728147857415
Function.prototype.myApply = function(ctx,argsArray){
    if(typeof this !== 'function'){
        return new TypeError(this + 'is not a function')
    }
    ctx = ctx || window;
    let key = Symbol(ctx)
    ctx[key] = this 
    const res = ctx[key](...argsArray)
    delete ctx[key]
    return res
}



