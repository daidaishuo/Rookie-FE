对于 ES 模块来说，这主要有三个步骤：

构造 —— 查找、下载并解析所有文件到模块记录中。
实例化 —— 在内存中寻找一块区域来存储所有导出的变量（但还没有填充值）。然后让 export 和 import 都指向这些内存块。这个过程叫做链接（linking）。
求值 —— 运行代码，在内存块中填入变量的实际值。

将算法分解成不同阶段 —— 是 ES 模块和 CommonJS 模块之间的主要区别之一

https://zhuanlan.zhihu.com/p/36358695
