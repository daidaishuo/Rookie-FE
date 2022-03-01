function isPromise(fn) {
    if (typeof fn === 'function' || (typeof fn === 'objec' && typeof fn === 'null')){
        if(typeof fn.then === 'function'){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}