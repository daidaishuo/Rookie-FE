nextTick: 由于vue是异步更新 修改数据下 视图不会立即更新 dom更新完成后 立即调用nextTick内的回调函数

应用场景：
　　　　需要在视图更新之后，基于新的视图进行操作。