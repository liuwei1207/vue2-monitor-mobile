<template>
    <div class="out-warpper">
        <Site-Nav></Site-Nav>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script type="text/javascript">
import SiteNav from './common/SiteNav.vue';
export default {
    data() {
            return {

            }
        },
        components: {
            SiteNav
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
