class IKoa {
    constructor() {
        this.middleware = []
    }
    use(fn) {
        if(typeof fn !== 'function') throw new TypeError('傻逼 中间件得是函数')
        // if(Object.prototype.toString.call(fn) !== `[object gennerati]`)
        this.middleware.push(fn);
        return this;
    }
}