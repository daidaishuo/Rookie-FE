vue.js 包含了模版编译功能
vue.runtime 不包含模版编译能力 需要通过vue-loader进行提前编译

$mount 方法为编译入口 
    如果没有render方法 进行模版编译 compileToFunctions


template => ast => 静态节点编译 => 生成可执行的代码

vue3 编译优化 Block Tree