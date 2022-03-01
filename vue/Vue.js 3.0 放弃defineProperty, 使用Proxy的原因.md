Object.defineProperty缺陷

监控到数组下标的变化时，开销很大。所以Vue.js放弃了下标变化的检测；
Object.defineProperty只能劫持对象的属性，而Proxy是直接代理对象。Object.defineProperty需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。而 Proxy 直接代理对象，不需要遍历操作。
Object.defineProperty对新增属性需要手动进行Observe。vue2时需要使用 vm.$set 才能保证新增的属性也是响应式
Proxy支持13种拦截操作，这是defineProperty所不具有的
Proxy 作为新标准，长远来看，JS引擎会继续优化 Proxy，但 getter 和 setter 基本不会再有针对性优化
