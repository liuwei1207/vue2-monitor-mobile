<template>
    <!-- 站点选择列表 -->
    <div class="m-Amap-select">
        <mu-dropDown-menu :maxHeight="300" @change="handleChange" :open="open" @open="handleOpen" @close="handleClose" :value="value">
            <mu-menu-item :value="1000" title="站点选择" />
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
                open: false //这里的this不可省略
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

                let marker = this.$store.state.mapMarkers[index];
                let URL = marker.extData;
                // this.center = marker.position;
                // this.$store.state.mapWindows[0].position = marker.position;
                // this.$store.state.mapWindows[0].content = changeSiteContent(marker.title);
                // 提交mutation来更改windows
                this.$store.commit('UPDATE_WINDOWS', {
                    position: marker.position,
                    content: marker.title
                });
                // 设置播放的站点id等数据
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
    background: rgba(255, 255, 255, .8);
    box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.6), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);
}

.mu-dropDown-menu {
    font-size: 14px;
}

.mu-dropDown-menu-text {
    color: #ff4181;
    line-height: 46px;
}

.mu-dropDown-menu-icon {
    top: 12px;
    color: #ff4181;
}

.mu-dropDown-menu-line {
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0);
}
</style>
