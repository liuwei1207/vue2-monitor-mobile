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
                this.bottomNav = val;
                this.$router.push(val);
            }
        }
}
</script>
<style type="text/css">
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
.mu-bottom-nav-shift-wrapper {
    background-color: rgb(65,192,209);
}
.mu-paper {
    background-color: rgb(65,192,209);
}
.mu-bottom-item-active .mu-bottom-item-text {
    color: #ffffff;
}
.mu-bottom-item-active .mu-bottom-item-icon {
    color: #ffffff;
}
.mu-bottom-item-text {
    color: #eae4e4;
}
.mu-bottom-item-icon {
    color: #eae4e4;
}
</style>
