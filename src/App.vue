<template>
    <div class="out-warpper">
        <BottomNav></BottomNav>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script type="text/javascript">
import BottomNav from './common/BottomNav.vue';
export default {
    data() {
            return {

            }
        },
        components: {
            BottomNav
        }
}
</script>
<style type="text/css">
html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.mu-buttom-item-wrapper {
    height: 38px;
}

.out-warpper {
    height: 100%;
}
</style>
