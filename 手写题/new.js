function myNew(constructor) {
    var o = Object.create(null)
    o._proto_ = constructor.prototype;
    constructor.apply(o, Array.prototype.slice.call(arguments, 1))
    return o;
}


function MyNew() {
    let Constructor = Array.prototype.shift.call(arguments); // 1：取出构造函数

    let obj = Object.create(null) // 2：执行会创建一个新对象

    obj.__proto__ = Constructor.prototype // 3：该对象的原型等于构造函数prototype

    var result = Constructor.apply(obj, arguments) // 4： 执行函数中的代码

    return typeof result === 'object' ? result : obj // 5： 返回的值必须为对象
}

function myNew(){
    const Constructor = Array.prototype.shift.call(arguments);
    const obj = Object.create(null);
    obj._proto_ = Constructor.prototype;
    const res = Constructor.apply(obj,arguments)
    return res instanceof Object ? res : obj
}
