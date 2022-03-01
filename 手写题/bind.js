Function.prototype.myBind=function(ctx){
    let self = this;
    return function(){
        self.apply(ctx,[...arguments])
    }
}