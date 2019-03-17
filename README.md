
# 技术栈
## 【前端】
Vue：构建用户界面的 MVVM 框架，核心是响应的数据绑定和组系统件
vue-router：为单页面应用提供的路由系统，项目上线前使用了路由懒加载技术，来异步加载路由优化性能
vuex：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
axios：服务端通讯。基于 Promise 的网络请求插件
vue-lazyload：第三方图片懒加载库，优化页面加载速度
better-scroll：iscroll 的优化版，使移动端滑动体验更加流畅
stylus：css 预编译处理器
ES6：ECMAScript
vue-awesome-swiper： 图片轮播插件
fastClick: 解决300毫秒点击事件延迟问题
stylus-loader: 一像素边框问题 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
## 【后端数据】
使用本地模拟数据
## 【自动化构建及其他工具】
vue-cli：Vue 脚手架工具，快速初始化项目代码
ESLint：代码风格检查工具，规范代码书写
# 收获
对 vue 的组件、指令、选项、模版渲染、事件绑定、计算属性等有了一定了解
了解了 vue 组件之间的交互、传值
熟悉了在 vue 项目中使用第三方插件（组件）
熟悉了组件化、模块化的开发思维
熟悉了 vue-router 控制路由和子路由的方式
再次熟悉项目开发流程：项目分析设计 -> 项目环境搭建 -> 依赖安装 -> 页面架构设计 -> 组件开发 -> 测试联调 -> 发布上线
体会到组件化、模块化开发带来的便捷
体会到将对象封装成类(ES6 class) 的便捷性，以及利用工厂方式初始化类实例
学会利用过渡效果及动画效果制作良好的用户交互体验
# Build Setup

clone the repo into your disk.
git clone https://github.com/limuen/Travel.git

install dependencies
npm install

serve with hot reload at localhost:8080
npm run dev

build for production with minification
npm run build
License
The code is available under the MIT license.
