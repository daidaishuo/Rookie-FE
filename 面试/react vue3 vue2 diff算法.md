# react vue2 vue3 diff区别
## React diff
   递增法，通过对比新的列表中的节点，在原本列表中的位置是否是递增，来判断当前节点是否需要移动

Tree diff：采用分层求异的策略，将新旧两棵DOM树按照层级关系进行比较，这样只需要遍历一遍，就能搞找到那些元素需要更新。
Component diff：查看组件类型是否相同。如果类型不同，则需要更新，更新时先把旧组件删除，再创建一个新的组件插入之前删除的位置。
Element diff：通过唯一key，对元素diff进行优化。元素发生了改变，则找到需要修改的元素，有针对性进行修改。
## vue2 diff

## vue3 diff










资料
https://juejin.cn/post/6919376064833667080#heading-1·