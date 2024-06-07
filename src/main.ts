/*
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-22 19:12:12
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-28 18:44:44
 * @FilePath: \vite-routerd:\PersonalProject\VueProject\vue3-admin-template\src\main.ts
 */

import '@/assets/styles/main.css' // 全局的样式 初始化的样式

import { createApp } from 'vue' // 引入createApp函数 用于创建Vue实例

import ElementPlus from 'element-plus' // ElementPLUS 组件库
import zhCn from 'element-plus/es/locale/lang/zh-cn' /// 组件库语言
import 'element-plus/dist/index.css' // 组件库样式

import App from './App.vue' // 根组件

import router from './router' // 路由数据


const app = createApp(App) // 创建一个app实例



app.use(router) // 初始化路由
app.use(ElementPlus,{ size: 'small', zIndex: 3000, locale: zhCn }) // 初始化路由器

app.mount('#app') // app挂载到页面

// app.component('TodoDeleteButton', TodoDeleteButton) 注册全局组件的方法
