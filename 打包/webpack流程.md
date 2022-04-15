1. 初始化阶段
   1. **初始化参数**
   2. **创建compiler**
   3. **初始化编译环境**
   4. **开始编译** compiler run方法
   5. **确定入口** compilition.addEntry 将入口文件转换为dependence对象
2. 构建阶段
   1. **编译模块（make）** 根据entry对应的dependence创建module 调用loader将模块转js内容，将js解释器将内容转AST找出依赖的模块递归
   2. **完成模块编译** 
3. 生成阶段
   1. **输出资源（seal）** module 组成 chunk 
   2. **写入文件系统（emitAssets）** 写入文件系统
4. 











https://zhuanlan.zhihu.com/p/363928061