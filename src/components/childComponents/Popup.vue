<template>
    <!-- 组件popup，弹出的框框 -->
    <div class="m-Amap-popup">
        <!-- <mu-raised-button label="上面弹出" @click=""/> -->
        <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="popupFlag">
            <mu-circular-progress :size="14" :strokeWidth="2" color="#FFFFFF" />正在加载音频，请稍候
        </mu-popup>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //Popup组件API
            popupFlag: false
        }
    }
}
</script>
