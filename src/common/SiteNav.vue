<template>
    <mu-paper class="bottom-nav">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item value="MapMonitor" title="地图监听" icon="map" />
            <mu-bottom-nav-item value="AudioMatch" title="音频比对" icon="radio" />
        </mu-bottom-nav>
    </mu-paper>
</template>
<script>
export default {
    data() {
            return {
                bottomNav: 'MapMonitor',
                //bottomNavColor: 'MapMonitor'
            }
        },
        created() {
            this.bottomNav = this.$route.name;
        },
        methods: {
            handleChange(val) {
                //点击更改样式
                this.bottomNav = val;
                //点击图标后更改路径
                this.$router.push(val);
            }
        }
}
</script>
<style type="text/css">
/**
 * 顶部导航按钮的样式
 */
.bottom-nav {
    position: fixed;
    left: auto;
    right: auto;
    display: inline-block;
    width: 100%;
    height: 58px;
    top: 0;
    z-index: 999;
}
/**
 * 背景样式，纯色
 */
.mu-bottom-nav-shift-wrapper {
    background-color: #000000;
}
.mu-paper {
    background-color: #000000;
}
/**
 * 点击后按钮的激活样式，包括按钮和文字
 */
.mu-bottom-item-active .mu-bottom-item-text {
    color: #ffffff;
}
.mu-bottom-item-active .mu-bottom-item-icon {
    color: #ffffff;
}
/**
 * 未点击时的样式，包括按钮和文字
 */
.mu-bottom-item-text {
    color: #757575;
}
.mu-bottom-item-icon {
    color: #757575;
}
</style>
