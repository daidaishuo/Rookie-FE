function flatten(arr) {
    return arr.reduce((pre, curr) => {
        if (Array.isArray(curr)) {
            return pre.concat(curr)
        } else {
            return pre.concat(flatten(curr))
        }
    }, [])
}

function flatten(arr){
    return arr.reduce((pre,curr) => {
        return pre.concat(Array.isArray(curr) ? flatten(curr) : curr)
    },[])
}

function flatten(arr){
    return reduce((pre,curr)=> {
        pre.concat(Array.isArray(curr) ? flatten(curr) : curr )
    },[])
}
