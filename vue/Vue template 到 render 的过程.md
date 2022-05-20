调用parse方法将template转化为ast（抽象语法树, abstract syntax tree）
对静态节点做优化。如果为静态节点，他们生成的DOM永远不会改变，这对运行时模板更新起到了极大的优化作用。
生成渲染函数. 渲染的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名，子节点，文本等等）

template =>  vue ast => js ast => render函数