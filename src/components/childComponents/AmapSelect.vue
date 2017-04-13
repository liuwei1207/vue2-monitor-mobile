<template>
    <!-- 站点选择列表 -->
    <div class="m-Amap-select">
        <mu-dropDown-menu :maxHeight="300" @change="handleChange" :open="open" @open="handleOpen" @close="handleClose" :value="1000" :anchorOrigin="{vertical: 'top', horizontal: 'left'}" :autoWidth="false">
            <mu-menu-item :value="1000" title="站点选择" id="selectTitle"/>
            <mu-menu-item v-for="(marker,index) in markers" :value="index" :title="marker.title" />
        </mu-dropDown-menu>
    </div>
</template>
<script>
export default {
    data() {
            return {
                // 站点切换 js
                // 初始默认value值
                value: 1000,
                open: false
            }
        },
        computed: {
            markers: function() {
                return this.$store.state.mapMarkers;
            }
        },
        methods: {
            // 站点切换 select
            handleChange(index) {
                //获取所点击的站点
                let marker = this.$store.state.mapMarkers[index];

                //console.log(index);
                //判断若用户点击的是第一行的站点选择，则终止函数
                if (index === 1000) {return false}
                let URL = marker.extData;
                // this.center = marker.position;
                // this.$store.state.mapWindows[0].position = marker.position;
                // this.$store.state.mapWindows[0].content = changeSiteContent(marker.title);
                // 提交mutation来更改windows，站点列表选择后将其位置置为窗口中心
                this.$store.commit('UPDATE_WINDOWS', {
                    position: marker.position,
                    content: marker.title
                });
                // 设置播放的站点id等数据，将站点的URL等数据设置到播放器内容上
                this.$store.commit('SET_PLAYID', {
                    url: URL,
                    id: index,
                    title: marker.title,
                    deviceID: marker.deviceID
                })
            },
            toggle() {
                this.open = !this.open
            },
            handleOpen() {
                this.open = true
            },
            handleClose() {
                this.open = false
            }
        }


}
</script>
<style>
/*站点列表样式*/

.m-Amap-select {
    position: fixed;
    width: 35%;
    bottom: 116px;
    /* left: 12px; */
    height: 46px;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.80);
    box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.6), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);
}


/**
 * "站点选择"文字样式"
 */

.mu-dropDown-menu-text {
    color: #ffffff;
    line-height: 46px;
}


/**
 * 站点选择的右边小三角图标样式
 */

.mu-dropDown-menu-icon {
    top: 12px;
    color: #ffffff;
}


/**
 * 站点列表的下划线样式，在此设置了透明
 */

.mu-dropDown-menu-line {
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0);
}
/**
 * 站点列表展开后的列表样式
 */
.mu-menu {
    background: #000000;
    width: 142px !important;
}
.mu-menu-destop {
    padding: 3px 0;
}
/**
 * 站点列表展开后每一条目的颜色样式
 */
.mu-menu-item{
    color: #ffffff;
}
.mu-menu-item{
    color: #ffffff;
}
.mu-menu-item :active{
    color: #87da86;
}
/**
 * 列表展开后第一个条目"站点选择"样式
 */
#selectTitle {
    box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.3), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);
}

</style>
