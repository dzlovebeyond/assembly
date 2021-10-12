<template>
  <!-- 全局配置国际化 -->
  <a-config-provider :locale="locale">
    <div id="app">
      <!-- 一级路由 -->
      <router-view />
      <!-- /一级路由 -->
    </div>
  </a-config-provider>
  <!-- /全局配置国际化 -->
</template>

<script>
// 引入国际化相关模块
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// 引入和配置国际化时间相关模块
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

export default {
  data () {
    return {
      locale: zhCN // 国际化所需要变量
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  // 设置页面高度 100% 撑开屏幕
  height: 100%;
}
</style>