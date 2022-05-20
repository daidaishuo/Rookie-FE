[](https://www.jianshu.com/p/ac426d511e2a)
1. webpack 会先把所有资源全部进行打包 然后启动开发服务器 vite 是先启动开发服务器 然后按需编译依赖文件
2. HMR 当某个模块改变时 vite 利用 esm 的特性会主动发起请求去获取所需文件，webpack 会把模块所依赖的东西都编译一遍 然后再扔给浏览器
3. vite 使用 esbuild 进行依赖预构建 文件编译
4. Vite 在打包的时候，将模块分成两个区域 依赖 和 源码 