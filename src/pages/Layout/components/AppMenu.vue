<!--
 * @Author: yanchang 1905812142@qq.com
 * @Date: 2024-05-29 15:01:39
 * @LastEditors: fang
 * @LastEditTime: 2024-05-30 11:20:30
 * @FilePath: \vite-routerd:\PersonalProject\VueProject\vue3-admin-template\src\pages\Layout\components\AppMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <el-menu :default-active="activeMenu" :collapse="isCollapse" :unique-opened="true" router>
      <app-men-item v-for="menu in menuData" :key="menu.path" :menu="menu" :active-menu="activeMenu" />
   </el-menu>
</template>

<script setup lang="ts">
/* 导入 */
import { computed,onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AppMenuItem from './AppMenuItem.vue'
import type { RouteRecordRaw } from 'vue-router' // Vue路由对象的类型

/* 普通数据和响应式数据 */
const router = useRouter() // 路由器
const route = useRoute() // 当前路由对象


/* TS定义 */
//描述菜单项类型的接口
export interface MenuItem {
   path: string
   name: string
   icon?: string
   children?: MenuItem[]
}


/** Props **/
const props = defineProps<{
   isCollapse?: boolean
}>()


/*** 计算属性 ***/
// 获取路由器的options下的routes路由数据
const menuData = computed<MenuItem[]>(() => {
   const routes = router.options.routes as RouteRecordRaw[]
   return formatRoutes(routes)
})
// 获取当前路由对象的path信息
const activeMenu = computed(() => {
   const { path } = route
   return path
})

/*** 方法 ***/

function formatRoutes(routes: RouteRecordRaw[], parent?: MenuItem): MenuItem[] {
   return routes.map((route) => ({
      path: route.path,
      name: route.meta?.title as string,
      icon: route.meta?.icon as string | undefined,
      children: route.children ? formatRoutes(route.children, { path: route.path, name: route.meta?.title as string }) : undefined
   }))
}

/*** 生命周期函数 ***/
onMounted(() => {
   console.log('Router')
   console.log(router)
   console.log('Route')
   console.log(route)
   console.log('menuData')
   console.log(menuData)
})
</script>