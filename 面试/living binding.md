https://stackoverflow.com/questions/52211309/what-does-it-mean-by-live-bindings$$
ES Module 与 CommonJs 有一个比较大的差别在于，ES Module 中导出的变量只是一个占位符，并不在 import 的时候进行赋值操作，而是当真正用到的时候才会去 import 的模块中取值，而且导入的值只能在声明值的模块内部被修改
还有一处值得留意的细节是，webpack 把 export 放在了所有 import 的上方，这么做也是符合 ESM 语义的，因为在模块执行前，模块的代码就应该被 parse 一遍，模块的 import 和export 在当时就已经确定了。
那为什么 export 会在 import 之上呢？ 因为 export 是一个没有副作用的语句，所做的仅仅是把 expert 出去的变量包裹在 get 方法里，这样能够有效解决循环引用的问题。而 import 是一个有副作用的函数，会跳到另一个模块中执行语句，当下一个模块依赖于当前模块（即造成了循环引用），提前 export 声明可以确定被引用模块的 export。

https://juejin.cn/post/6844903782934020103

对于 ES 模块来说，这主要有三个步骤：

构造 —— 查找、下载并解析所有文件到模块记录中。
实例化 —— 在内存中寻找一块区域来存储所有导出的变量（但还没有填充值）。然后让 export 和 import 都指向这些内存块。这个过程叫做链接（linking）。
求值 —— 运行代码，在内存块中填入变量的实际值。