1. nativer 调用 js 客户端都只能拿到挂载到 window 对象上面的属性和方法。
   1.  loadUrl
   2.  evaluateJavascript

2. js 调用 native
   1. url shcema拦截 kwai://
      1. 问题 ： 因为 h5 的请求归根结底是一种模拟跳转，跳转这件事情上 webview 会有限制，当 h5 连续发送多条跳转的时候，webview 会直接过滤掉后发的跳转请求，因此第二个消息根本收不到，想要收到怎么办？js 里将第二条消息延时一下
      2. url长度限制 
   2. js注入上下文

https://juejin.cn/post/6844903585268891662