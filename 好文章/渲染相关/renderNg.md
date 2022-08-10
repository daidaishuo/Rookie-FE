#renderNG
1. Animate: change computed styles and mutate property trees over time based on declarative timelines.
2. Style: apply CSS to the DOM, and create computed styles.
3. Layout: determine the size and position of DOM elements on the screen, and create the immutable fragment tree.
5. Pre-paint: compute property trees and invalidate any existing display lists and GPU texture tiles as appropriate.
6. Scroll: update the scroll offset of documents and scrollable DOM elements, by mutating property trees.
7. Paint: compute a display list that describes how to raster GPU texture tiles from the DOM.
8. Commit: copy property trees and the display list to the compositor thread.
9. Layerize: break up the display list into a composited layer list for independent rasterization and animation.
Raster, decode and paint worklets: turn display lists, encoded images, and paint worklet code, respectively, into GPU texture tiles.
10. Activate: create a compositor frame representing how to draw and position GPU tiles to the screen, together with any visual effects.
11. Aggregate: combine compositor frames from all the visible compositor frames into a single, global compositor frame.
12. Draw: execute the aggregated compositor frame on the GPU to create pixels on-screen.


Within a single browser tab, frames from different sites are always in different render processes from each other, but frames from the same site are always in the same render process. From the perspective of rendering, the important advantage of multiple render processes is that cross-site iframes and tabs achieve performance isolation from each other. In addition, origins can opt into even more isolation.



主线程运行脚本、渲染事件循环、文档生命周期、命中测试、脚本事件调度、HTML、CSS等数据格式的解析


https://developer.chrome.com/articles/renderingng/

https://web.dev/efficiently-load-third-party-javascript/?utm_source=devtools



Chromium网页Render Object Tree创建过程分析

https://blog.csdn.net/Luoshengyang/article/details/50615628

https://blog.csdn.net/Luoshengyang?type=blog

https://zhuanlan.zhihu.com/p/54601110