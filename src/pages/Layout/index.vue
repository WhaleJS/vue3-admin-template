<template>
  <div class="layout-container">
    <el-container>
      <el-aside class="aside" width="200px">
        <div class="aside-header">
          <p>Vite - Vue3</p>
        </div>
        <div class="aside-content-wrapper">
          <div class="aside-content">
            <AppMenu/>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue' // 头部区域组件
import AppMain from './components/AppMain.vue' // 主体区域组件
import AppMenu from './components/AppMenu.vue' // 系统菜单组件



</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
}

.aside {
  width: 200px;
  background-color: #304156;
  color: #fff;
  display: flex;
  flex-direction: column;

  .aside-header {
    width: 200px;
    height: 60px;
    background-color: #1f2d3d;
    font-size: 18px;
    font-weight: bold;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aside-content-wrapper {
    height:calc(100vh - 60px);
    // width: calc(200px - 8px); /* 减去滚动条的宽度 */
    .aside-content {
      width: 100%;
      height: 100%;
      background-color: rgb(57, 61, 76);
      overflow: auto;
      .cc{
        height: 100px;
        border: 1px solid black;
        background: darkgray;
      }
    }
  }
}

.header {
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 1;
}

.main {
  flex: 1;
  background-color: #f0f2f5;
  overflow-y: auto;

  .main-content {
    padding: 20px;
  }
}
</style>
