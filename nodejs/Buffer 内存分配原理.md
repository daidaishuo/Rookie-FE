## Buffer 内存分配原理
Node.js 中采用了 slab 机制进行预先申请、事后分配。slab 是一种动态的内存管理机制，它就是一块申请好的固定大小的内存区域，有 3 种状态

full: 完全分配
partial: 部分分配
empty: 没有被分配

这种机制以 8kb 为界限决定当前分配的对象是大对象还是小对象

#### 内存分配总结
在初次加载时就会初始化 1 个 8KB 的内存空间，根据申请的内存大小分为 小 Buffer 对象 和 大 Buffer 对象
1. 小 Buffer （小于 4kb ）情况，判断这个 slab 剩余空间是否足够容纳若足够就去使用剩余空间分配，偏移量会增加
2. 若不足，就调用 createPool 创建一个新的 slab 空间用来分配
3. 大 Buffer （大于 4kb ）情况，直接 createUnsafeBuffer(size) 创建。
之所以要判断区别大对象还是小对象，就只是希望小对象不要每次申请时都去向系统申请内存调用。

不论是小 Buffer 对象还是大 Buffer 对象，内存分配是在 C++ 层面完成，内存管理在 JavaScript 层面，最终还是可以被 V8 的垃圾回收标记所回收，回收的是 Buffer 对象本身，堆外内存的那些部分只能交给 C++。