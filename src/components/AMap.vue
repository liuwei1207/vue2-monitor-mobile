<template>
    <div class="amap-wrapper" @click="handlePlay">
        <!-- 地图ElAmap -->
        <ElAmap></ElAmap>
        <!-- 下拉提示组件Popup -->
        <Popup></Popup>
        <!-- 站点选择列表AmapSelect -->
        <AmapSelect></AmapSelect>
        <!-- 信噪比展示 DashBoard-->
        <DashBoard></DashBoard>
    </div>
</template>
<script>
import ElAmap from '../components/childComponents/ElAmap.vue';
import Popup from '../components/childComponents/Popup.vue';
import AmapSelect from '../components/childComponents/AmapSelect.vue';
import DashBoard from '../components/childComponents/DashBoard.vue';

export default {
    data() {
            return {}
        },
        components: {
            Popup,
            AmapSelect,
            DashBoard,
            ElAmap
        },
        methods: {
            // 地图 label 播放
            handlePlay(event) {
                if (event.target.nextElementSibling && event.target.nextElementSibling.className === 'mu-icon material-icons m-playBTN') {
                    // 更改播放器title
                    window.sm2BarPlayers[0].actions.changeTitle(this.$store.state.title);
                    // 更改播放器url并播放
                    window.sm2BarPlayers[0].actions.reLoad(this.$store.state.url);
                }
            }
        }

}
</script>
<style>
/**
 * 地图部件左侧放大缩小的相关样式
 */
.amap-zoom-touch-minus, .amap-zoom-touch-plus {
    margin-bottom: 0;
    background: rgba(0, 0, 0, 0.80);
    height: 48px;
}
.amap-zoom-touch-minus>div, .amap-zoom-touch-plus>div {
    line-height: 48px
}
/**
 * 地图图标上的content的样式
 */
.amap-info-content {
    border-radius: 23px;
    padding: 8px 10px 8px 8px;
}


.amap-container img {
    max-width: 28px !important;

}

/*popup组件API，这个版本中已去掉*/

.demo-popup-top {
    width: 100%;
    /*opacity: .8;*/
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
    background-color: rgba(77, 209, 183, .8);
    color: rgb(250, 250, 250);
    /*z-index: 1000;*/
}

.amap-wrapper {
    width: 100%;
    height: 100%;
}

.m-siteLabel {
    color: #ff4081;
}

.amap-info-close {
    display: none;
}

/*popup组件中圆圈样式*/

.mu-circular-progress {
    /*overflow: visible;*/
    line-height: 0;
    padding-right: 2px;
    margin-right: 8px;
}
</style>
