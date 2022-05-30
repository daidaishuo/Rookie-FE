function compose(middleware) {
  //  传入对象 context 返回Promise
  return function (context, next) {
    // last called middleware #
    let index = -1
    // 从第一个中间件开始执行
    return dispatch(0)
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]()
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        // 主要的区别在这里
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}

