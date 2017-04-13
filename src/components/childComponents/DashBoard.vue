<template>
    <div class="m-dashboard">
        <div class="m-dashboard-text">
            场强：<span>{{FMReviceRSSI}}</span>dBuV
            信噪比：<span>{{FMReviceSNR}}</span>dB
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {}
        },
        computed: {
            // 场强信噪比
            FMReviceRSSI: function() {
                return this.$store.state.FMReviceRSSI;
            },
            FMReviceSNR: function() {
                return this.$store.state.FMReviceSNR;
            }
        }
}
</script>
<style>
/**
 * 场强信噪比样式设置
 */
.m-dashboard {
    display: inline-block;
    position: fixed;
    width: 65%;
    bottom: 116px;
    right: 0;
    z-index: 1000;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.80);
    padding: 0 14px;
    height: 46px;
    font-size: 15px;
    /*下话的凹陷样式分割线*/
    box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.6), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);
}

.m-dashboard-text {
    height: 46px;
    width: 100%;
    /*overflow: hidden;*/
}

.m-dashboard span {
    display: inline-block;
    width: 10%;
    height: 46px;
    line-height: 46px;
}
</style>
