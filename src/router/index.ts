/*
 * @Author: yan_c 1905812142@qq.com
 * @Date: 2024-05-24 16:13:04
 * @LastEditors: yan_c 1905812142@qq.com
 * @LastEditTime: 2024-05-29 17:39:23
 * @FilePath: \vite-routerd:\PersonalProject\VueProject\vue3-admin-template\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @@ 引入vue-router中的两个核心方法  通过createRouter去创建路由器实例
 * @@ createMemoryHistory() - 忽略浏览器的 URL 而使用其自己内部的 URL
 * @@ createWebHistory()
 * @@ createWebHashHistory()
 */
import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'



// import { useRoute, useRouter } from 'vue-router';
// 在script setup的SFC中不能使用this访问组件实例 因此提供了这个两个函数获取路由对象和路由器


// 引入界面级别的组件(其实就是普通组件)
import Layout from '../pages/Layout/index.vue'
import HomeView from '../pages/Home/index.vue';
import AboutView from '../pages/About/index.vue';


// 定义一组路由 把URL映射到组件 用于RouterView渲染
const routes = [
    {
        path: '/',
        name:'Layout',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name:'home',
                component: HomeView,
                meta: { requiresAuth: true,title:'首页'}
            },
            {
                path: 'about',
                name:'about',
                component: AboutView,
                meta: { requiresAuth: true,title:'关于我们'}
            }
        ]
    }

]


// 创建路由器实例
const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// 暴露路由器实例 供给main.ts导入 使用App实例上的use方法进行初始化
export default router;