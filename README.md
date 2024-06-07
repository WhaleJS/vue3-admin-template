
# vue3-admin-template

一个基于Vue3 + Vite的PC项目模板，通过以下命令创建
```sh
npm create vue@latest 
该命令会下载create-vue工具并自动执行，创建的项目基于Vite
项目基于组合式API和 `<script setup>` setup是一个模板属性标识,Vue会根据标识在编译时进行一些处理,
从而简洁的使用组合式API,并且导入的顶层变量和函数都可以在模板中直接使用(选项式API其实在组合式API基础上衍生的)

选项式和组合式API都来自同一个底层系统，提供的两套不同的接口，选项式更贴近面向对象的方式，以组件实例为中心，通过this关键字调用,组合式API更像函数式编程


```

## 安装依赖

```sh
npm install
```

### 编译和启动

```sh
npm run dev
```

### 打包编译

```sh
npm run build // 此命令会在 ./dist 文件夹中为应用创建一个生产环境的构建版本
```

## 推荐IDE设置
VSCode + Volar


## TS类型检查

使用 vue-tsc 代替 tsc 进行TS类型检测，脚手架已经自动安装了，并且Vue官方库自带了类型检查，因为Vue就是TypeScript开发的
查看[TypeScript搭配使用Vue](https://cn.vuejs.org/guide/typescript/overview.html)

Vite天生支持.ts文件

## 自定义Vite配置

查看 [Vite配置参考](https://cn.vitejs.dev/)



### 项目结构说明
 - `.vscode`
   - IDE配置文件
 - `node_modules`
   - 依赖文件
 - `public`
   - 公用文件，不会被打包工具构建，在顶层创建的其他文件夹 都不会被打包工具打包
 - `src`
   - 源代码文件 被构建工具接管
   - `assets`
     - 静态资源
   - `components`
     - 公用组件文件夹
   - `App.vue`
     - 根组件
   - `main.ts`
     - 入口内的核心文件
- `.gitignore`
  - git忽略文件
- `env.d.ts`
- `index.html`
  - 主入口文件 Vite启动时以该文件为入口
- `package-lock.json`
  - 依赖锁定文件
- `package.json`
  - 项目依赖文件
- `tsconfig.app.json`
  - 该文件定义前端程序的Ts编译配置
  - 包含了针对浏览器环境的编译选项，用于编译和打包前端代码  如.vue文件
  - 这个文件可有可无
- `tscconfig.node.json`
  - 该文件定义了NodeJS相关的TS编译配置
  - 包含了针对NodeJS相关的代码如服务器端代码
- `tscconfig.json`
  - 这个文件就是一个总的配置文件 其实大多数项目只需要一个tsconfig文件即可，只不过create-vue作为工具提供了比较细致规范的支持,生成了三个ts文件
  - 该文件内引用了app和node - tsconfig文件，因此大多数配置在app.json里面就可以
- `vite.config.ts`
  - 该文件就是构建工具Vite的配置文件了


### 项目依赖
**sass**

Vite天生具备处理CSS预处理器的能力(如sass、scss),因为其内置了预处理器的支持，项目工程只需要安装依赖即可
```sh
npm install sass // 安装

<style lang="scss" scoped> // 使用scss
```
需要注意的是 如果需要全局使用scss变量 需要在Vite里面配置，如果直接在main.ts中引入只能使用全局样式，而不能使用到全局的变量 配置如下:
```sh
Vite.config.ts
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/assets/styles/global.scss";`
    }
  }
}


```

**Vue Router 管理路由**

它是一个客户端路由的解决方案 4版本 用于Vue3
客户端路由主要是是SPA应用中将浏览器的URL和界面UI相关联，浏览不同的界面，URL随之更新，单页面不需要重服务器加载

本质上URL对应的就是需要显示的组件
```sh
npm install vue-router@4
```
```javascript
Vue Router 提供了两个组件 如下:
// 用于创建链接 使得Vue Router在不重新加载页面的情况下改变URL,处理URL的生成、编码和其他功能
<RouterLink/>
// 用于渲染URL对应的组件，其实就是路由出口,可以放在任何地方
<RouterView />
// 当前路由对象 可以在模板中使用
$route

详情内容请看Router/index.ts
```

**UI组件库 Element - PLUS**
```sh
npm install element-plus --save 安装element plus组件库
```