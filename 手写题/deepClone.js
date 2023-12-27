// function deepClone(obj, hash = new WeakMap()) {
//   if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof RegExp) return new RegExp(obj);
//   // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
//   if (typeof obj !== "object") return obj;
//   // 是对象的话就要进行深拷贝
//   if (hash.get(obj)) return hash.get(obj);
//   let cloneObj = new obj.constructor();
//   // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
//   hash.set(obj, cloneObj);
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // 实现一个递归拷贝
//       cloneObj[key] = deepClone(obj[key], hash);
//     }
//   }
//   return cloneObj;
// }

// function deepClone(obj,hash = new WeakMap()){
//   if(obj === null) return obj;
//   if(obj instanceof Date) return new Date(obj);
//   if(obj instanceof RegExp) return new RegExp(obj);
//   if(typeof obj !== 'object') return obj;
//   if(hash.get(obj)) return hash.get(obj);
//   let cloneObj = new obj.constructor();
//   hash.set(obj,cloneObj);
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//       cloneObj[key] = deepClone(obj[key], hash)
//     }
//   }
//   return cloneObj
// }

// 循环引用的问题其实很简单，我们只需要在每次对复杂数据类型进行深拷贝前保存其值，如果下次又出现了该值，就不再进行拷贝，直接截止。
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj;
  if (typeof obj !== 'object') return obj;
  if (hash.get(obj)) {
    return hash.get(obj)
  } else {
    hash.set(obj, true)
  }
  let copyRes = Array.isArray(obj) ? [] : {}
  Object.keys((item) => {
    copyRes[item] = deepClone(obj[item], hash)
  })
  return copyRes
}
