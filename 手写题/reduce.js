function myReduce(fn,initVal){
    if(!initVal) initVal=0
    for(let i = 0 ; i < this.length ; i++){
        initVal = fn(initVal, this[i], i ,this);
    }
    return initVal
}

function reduceRigth(fn,initVal){
    if(!initVal) initVal = 0 ;
    for(let i = this.length ; i >0 ; i--){
        initVal = fn(initVal, this[i], i ,this)
    }
    return initVal;
}