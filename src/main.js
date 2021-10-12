import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Ant Design
import Antd from 'ant-design-vue'
// 引入Ant Design CSS样式
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

// 全局注册所有Ant Design组件
Vue.use(Antd)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')