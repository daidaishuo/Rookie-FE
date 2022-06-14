nextTick: 由于vue是异步更新 修改数据下 视图不会立即更新 dom更新完成后 立即调用nextTick内的回调函数

data change  => setter => dep.notify => watcher.update => queue 推入watcher => 去重watcher

=> nexttick(flushSchedulerQueue) => flashCallback


https://segmentfault.com/a/1190000023649590
