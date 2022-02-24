# 预加载属性 preload 与 prefetch

- preload 告诉浏览器立即加载资源;
- prefetch 告诉浏览器在空闲时才开始加载资源；
- preload、prefetch 仅仅是加载资源，并不会“执行”;
- preload、prefetch 均能设置、命中缓存；
- 正确使用 preload、prefetch 不会导致重复请求；


资源加载完成之前就已经完成了渲染，所以通过这两种方式资源的加载都不会阻塞关键渲染路径；

在使用 preload、prefetch 加载资源时，如果发生了页面跳转，此时没有完成的请求将会被取消掉；


