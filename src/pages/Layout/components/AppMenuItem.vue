<template>
    <el-menu-item v-if="!menu.children" :index="menu.path" :is-active="activeMenu === menu.path">
      <el-icon v-if="menu.icon">
        <component :is="menu.icon" />
      </el-icon>
      <span>{{ menu.name }}</span>
    </el-menu-item>

    <el-sub-menu v-else :index="menu.path" :is-active="activeMenu.startsWith(menu.path)">
      <template #title>
        <el-icon v-if="menu.icon">
          <component :is="menu.icon" />
        </el-icon>
        <span>{{ menu.name }}</span>
      </template>
      <side-menu-item
        v-for="child in menu.children"
        :key="child.path"
        :menu="child"
        :active-menu="activeMenu"
      />
    </el-sub-menu>
  </template>

  <script setup lang="ts">
  import type { MenuItem } from './AppMenu.vue'

  defineProps<{
    menu: MenuItem
    activeMenu: string
  }>()
  </script>