function myInstanceof(target, origin) {
    if (typeof target !== 'object' || target === null) return false;
    let proto = Object.getPrototypeOf(target);
    while (true) {
        if (origin.prototype === proto) {
            return true
        }
        proto = Object.getPrototypeOf(proto);

    }
    return false
}

function myInstanceof(target,origin){
    let proto = Object.getPrototypeOf(target);
    while(true){
        if(proto === origin.prototype){
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false
}