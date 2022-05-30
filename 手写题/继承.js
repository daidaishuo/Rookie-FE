// 1. 原型链继承
// function Parent() {
//     this.name = 'kevin';
// }

// Parent.prototype.getName = function() {
//     console.log(this.name);
// }

// function Child(){

// }

// Child.prototype = new Parent();

// var child1 = new Child();

// console.log(child1.getName()) // kevin
//问题  1.引用类型的属性被所有实例共享 2.在创建 Child 的实例时，不能向Parent传参

// 2


// https://github.com/mqyqingfeng/Blog/issues/16


// 完美 组合寄生继承
// function Parent(name) {
//     this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
//     this.arr = [1]; // (该属性，强调私有)
// }
// Parent.prototype.say = function() { // --- 将需要复用、共享的方法定义在父类原型上 
//     console.log('hello')
// }
// function Child(name,like) {
//     Parent.call(this,name,like) // 核心  
//     this.like = like;
// }
// Child.prototype = Object.create(Parent.prototype) // 核心  通过创建中间对象，子类原型和父类原型，就会隔离开。不是同一个啦，有效避免了方式4的缺点。

// <!--这里是修复构造函数指向的代码-->
// Child.prototype.constructor = Child

// let boy1 = new Child('小红','apple')
// let boy2 = new Child('小明','orange')
// let p1 = new Parent('小爸爸')

// https://segmentfault.com/a/1190000015216289

// 为啥‘组合继承’这种方式，会执行两次父类构造函数？？
// 第一次：Child.prototype = new Parent()
// ‘new 的过程’的第三步，其实就是执行了父类构造函数。
// 第二次：Parent.call(this,name,like)
// call的作用是改变函数执行时的上下文。比如：A.call(B)。其实，最终执行的还是A函数，只不过是用B来调用而已。所以，你就懂了Parent.call(this,name,like) ,也就是执行了父类构造函数。