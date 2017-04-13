import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let changeSiteContent = (SiteName) => {
    return '<div class="mu-raised-button-wrapper m-siteLabel"><div class="mu-ripple-wrapper"></div> <i class="mu-icon material-icons m-playBTN">play_circle_outline</i> <span class="mu-raised-button-label">' + SiteName + '</span></div>'
}

const state = {
    /**************************************************************************/
    /**
     * 地图相关的状态数值
     */

    // 地图的站点MAPMARKERS
    mapMarkers: [],
    // 中心点CENTER（视图的中心，改变站点时要把站点的位置置为视图的中心）
    mapCenter: [116.369081, 39.952856],
    // 地图上站点的信息窗体WINDOWS
    mapWindows: [{
        position: [116.369081, 39.952856],
        offset: [15, -25],
        autoMove: true,
        content: ''
    }],
    /**************************************************************************/
    /**
     * 播放器相关的状态数值
     */

    // 播放器的PLAYSTATE
    playState: '',
    // 播放器的PLAYID
    url: '',
    id: '0',
    title: '智和测试-03',
    deviceID: 'Pp2GJlqr3F34zYUcQqIRSeAw5k45XYISQ3D',
    /**************************************************************************/
    /**
     * 信噪比数据相关的状态数值
     */

    // 信噪比数据FMREVICE
    FMReviceRSSI: 0,
    FMReviceSNR: 0
};

const mutations = {
    /**************************************************************************/
    /**
     * 地图的相关mutation
     * 数据以对象形式传递过来
     */
    //增加一个站点maker
    ADD_MAPMARKERS(state, markersObj) {
        state.mapMarkers.push(markersObj.everyMarker);
    },
    //地图平移后更新地图的视图中心
    UPDATE_CENTER(state, centerObj) {
        state.mapCenter = centerObj.center;
    },
    //选择站点后更新地图的视图中心
    UPDATE_WINDOWS(state, windowsObj) {
        state.mapCenter = windowsObj.position;
        state.mapWindows[0].position = windowsObj.position;
        state.mapWindows[0].content = changeSiteContent(windowsObj.content);
    },
    /**************************************************************************/
    /**
     * 播放器的相关mutation
     * 数据以对象形式传递过来
     */
    //设置播放器的播放状态值
    SET_PLAYSTATE(state, flagObj) {
        state.playState = flagObj.flag;
        console.log(state.playState);
    },
    //设置播放器的播放信息
    SET_PLAYID(state, idObj) {
        state.url = idObj.url;
        state.id = idObj.id;
        state.title = idObj.title;
        state.deviceID = idObj.deviceID;
    },
    /**************************************************************************/
    /**
     * 信噪比的相关mutation
     * 数据以对象形式传递过来
     */
    SET_FMREVICE(state, fmrObj) {
        state.FMReviceRSSI = fmrObj.FMReviceRSSI;
        state.FMReviceSNR = fmrObj.FMReviceSNR;
    }
};
const store = new Vuex.Store({
    state,
    mutations
})

export default store
