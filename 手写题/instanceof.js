function myInstanceof(target, origin) {
    let proto = Object.getPrototypeOf(target);
    while (true) {
        if (proto === origin.prototype) {
            return true
        }
        if (proto === null) {
            return false;
        }
        proto = Object.getPrototypeOf(proto)
    }
}