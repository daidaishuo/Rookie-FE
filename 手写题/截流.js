// 一段时间只执行一次
function throttle(func, wait) {
    let context, args;
    let previous = 0;
    return function () {
        let now = +new Date();
        context = this;
        args = [...arguments];
        if (now - previous > wait) {
            func.apply(context, args)
            previous = now;
        }
    }
}

function throttle(func, wait) {
    let timer, lastCall;
  
    return function(...args) {
      const now = new Date().getTime();
  
      if (lastCall && now < lastCall + wait) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          lastCall = now;
          func(...args);
        }, wait);
      } else {
        lastCall = now;
        func(...args);
      }
    };
  }