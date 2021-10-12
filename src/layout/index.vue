<template>
  <!-- Layout 布局 -->
  <a-layout class="layout">
    <!-- nav-bar 头部区域 -->
    <a-layout-header class="header">
      <!-- logo 图标 -->
      <div class="logo" />
      <!-- /logo 图标 -->
      <div class="right-menu">
        <!-- 系统菜单 -->
        <a-dropdown>
          <a class="ant-dropdown-link sys-menu" @click="e => e.preventDefault()">
            初装系统(ASSEMBLY)<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">资产管理(AM)</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">IP地址管理(IPM)</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">网络产品自服务(NPS)</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">DDOS策略管理系统(DDOS)</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">初装系统(ASSEMBLY)</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <!-- /系统菜单 -->
        <!-- 用户菜单 -->
        <a-dropdown>
          <a class="ant-dropdown-link sys-menu" @click="e => e.preventDefault()">
            测试账号<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;"><a-icon type="edit" />&nbsp;&nbsp;个人中心</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;"><a-icon type="logout" />&nbsp;&nbsp;退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <!-- /用户菜单 -->
      </div>

    </a-layout-header>
    <!-- /nav-bar 头部区域 -->
    
    <!-- 主体区域 -->
    <a-layout>
      <!-- 左侧边栏 -->
      <a-layout-sider class="left-sider" width="200" style="background: #fff">
        <a-menu
          theme="dark"
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="[1,2,3,4]"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <!-- 根据数据 嵌套循环输出左侧菜单项 和 子菜单项 -->
          <!-- menuItem.key 为菜单项的 key -->
          <!-- menuItem.key + '.' + ind 为子菜单项的 key，由主菜单 key 和子菜单 key 组合而成，形式为：2.1、2.2 ... -->
          <a-sub-menu v-for="menuItem in leftMenu" :key="menuItem.key">
            <span slot="title"><a-icon type="radar-chart" />{{ menuItem.menuName }}</span>
            <a-menu-item v-for="(subItem, ind) in menuItem.subMenuName" :key="menuItem.key + '.' + ind">
              <a-icon type="dashboard" />{{ subItem }}
            </a-menu-item>
          </a-sub-menu>
          <!-- /根据数据 嵌套循环输出左侧菜单项 和 子菜单项 -->
        </a-menu>
      </a-layout-sider>
      <!-- /左侧边栏 -->

      <!-- 内容区域 -->
      <a-layout style="padding: 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
      <!-- /内容区域 -->
    </a-layout>
    <!-- /主体区域 -->

  </a-layout>
  <!-- /Layout 布局 -->
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      // 左侧菜单 数据
      leftMenu: [
        {
          key: 1,
          menuName: '看板分析',
          subMenuName: ['仪表盘']
        },
        {
          key: 2,
          menuName: '实施管理',
          subMenuName: ['初装实施', '变更实施']
        },
        {
          key: 3,
          menuName: '流程管理',
          subMenuName: ['初装统计', '变更记录']
        },
        {
          key: 4,
          menuName: '日志管理',
          subMenuName: ['操作日志']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.layout,.ant-layout {
  // 设置页面高度 100% 撑开屏幕
  height: 100%;

  /* nav-bar 顶部布局 */
  .ant-layout-header{
    padding: 0 25px;
    background-image: linear-gradient(90deg,#09203f 0,#537895);
  }
  .logo {
    width: 120px;
    height: 45px;
    background: url('~@/assets/nav-logo.png') no-repeat;
    background-size: contain;
    margin: 8px 68px 0 0;
    float: left;
  }

  /* nav-右侧菜单布局 */
  .right-menu {
    display: flex;
    justify-content: space-between;
  }
  .sys-menu, .sys-menu:hover {
    color: #fff;
  }

  /* 侧边栏样式 */
  /deep/ .left-sider {
    .ant-menu {
      background: #09203f !important;
    }
    .ant-menu-dark, .ant-menu-inline, .ant-menu-sub {
      background: #09203f !important;
    }

  }

  /* 内容区域 */
  .content1 {
    margin-top: 20px;
  }

} 
</style>