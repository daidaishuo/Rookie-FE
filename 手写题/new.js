function MyNew() {
    let Constructor = Array.prototype.shift.call(arguments); // 1：取出构造函数

    let obj = Object.create(null) // 2：执行会创建一个新对象

    obj.__proto__ = Constructor.prototype // 3：该对象的原型等于构造函数prototype

    var result = Constructor.apply(obj, arguments) // 4： 执行函数中的代码

    return typeof result === 'object' ? result : obj // 5： 返回的值必须为对象
}

function myNew() {
    const Constructor = Array.prototype.shift.call(arguments);
    const obj = Object.create(null);
    obj.__proto__ = Constructor.prototype;
    const res = Constructor.apply(obj, arguments)
    return res instanceof Object ? res : obj
}

function myNew() {
    const Constructor = Array.prototype.shift.call(arguments);

    let obj = Object.create(null);

    obj.__proto__ = Constructor.prototype

    const res = Constructor.apply(obj, arguments)

    return typeof res === 'object' ? res : obj;
}

function myNew() {
    const obj = Object.create(null);
    const Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    // 生成的新对象会绑定到函数调用的`this`。
    const res = Constructor.apply(obj, arguments)
    return typeof res === 'object' ? res : obj

}

function myNew() {
    const Constructor = [].shift.call(arguments);

    const obj = Object.create(null)

    obj.__proto__ = Constructor.prototype;

    const res = Constructor.apply(obj, arguments)

    return typeof res === 'object' ? res : obj
}

function myNew(){
    let Constructor = [].shift.call(arguments);
    const obj = Object.create(null);
    obj.__proto__ = Constructor.prototype;
    const res = Constructor.apply(obj,arguments);
    return typeof res === 'object' ? res: obj
}