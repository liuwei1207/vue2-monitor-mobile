// 单页面应用路由配置文件
// 具体请参考vue2 官网关于router部分

/* 引用vue2模块 */
import Vue from 'vue';
/* 引用vue2 router 模块 */
import Router from 'vue-router';

// 注册router模块
Vue.use(Router);

// 加载页面组件
import NotFoundPage from '../page/NotFound/index.vue';
import MapMonitorPage from '../page/MapMonitor/index.vue';
import AudioMatchPage from '../page/AudioMatch/index.vue';

export default new Router({
    routes: [{
        // 地图监听页面
        path: '/',
        component: MapMonitorPage
    }, {
        // 地图监听页面
        name: 'MapMonitor',
        path: '/MapMonitor',
        component: MapMonitorPage
    }, {
        // 音频比对页面
        name: 'AudioMatch',
        path: '/AudioMatch',
        component: AudioMatchPage
    }, { // 404页面
        name: '404',
        path: '*',
        component: NotFoundPage
    }]
})
