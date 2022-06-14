## 内存
node 内存分为堆内存 和 堆外内存
堆内存是v8管理的 
堆外内存 buffer这东西
1. 堆内存api
   1. useedHeapSize
   2. heapSizeLimit
   3. totalHeapSize
2. 内存使用率 usedHeapSize / heapSizeLimit
3. 生产环境可以使用内存快照 heap snapshots
## cpu
1. 分类
   1. user 用户态
   2. system 内核态
   3. clock 时间片 
      1. cpu使用率  =>  程序占用cpu的时间 / 采样间隔的时间
2. 为什么容器内有cpu使用率 还要进行node cpu使用率的检测？
    <!-- 2核4gb 看容器监控 cpu 满了 1master 2worker  Worker只 -->
   
3. cpuprofile

## 异常捕获
1. js error
2. c++ error

## http

## eld 时间循环阻塞时间    libuv

## active handles  libuv

## GC
堆内内存非为 新生代内存 老生代内存

新生代内存： Minor GC from里存活的对象中移到to 然后对调 达到次数后移动到老生代内存

老生代内存：major GC mark sweept , compact  会产生磁盘碎片   会在主线程执行 阻塞js执行 200ms 

## deopt （退优化）/ bailout（进制优化）


## 排查
v8-profiler	可以对v8堆内存抓取快照，并对cpu进行分析
node-heapdump	可以对v8堆内存抓取快照，用于事后分析
node-mtrace	使用gcc的mtrace工具来分析堆的使用
dtrace	在smartos上使用的内存分析工具
node-memwatch	采用wtfpl许可发布的内存分析工具

