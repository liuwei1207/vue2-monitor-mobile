<template>
    <div class="out-wrapper">
        <AMap></AMap>
        <div class="m-control-box-warpper m-control-box-warpper-unlock">
            <AudioMeter></AudioMeter>
            <PlayerControl></PlayerControl>
        </div>
    </div>
</template>
<script type="text/javascript">
import AudioMeter from '../../components/AudioMeter.vue';
import PlayerControl from '../../components/PlayerControl.vue';
import AMap from '../../components/AMap.vue';

/* 引用SoundManager2 */
import '../../libs/SoundManager2-master/script/soundmanager2.js'; // soundmanager2
import '../../libs/SoundManager2-master/demo/bar-ui/script/bar-ui.js'; // soundmanager2 bar-ui
import '../../libs/SoundManager2-master/demo/bar-ui/css/bar-ui.css'; // soundmanager2 bar-ui.css


export default {
    data() {
            return {

            }
        },
        components: {
            AudioMeter,
            AMap,
            PlayerControl
        },
        mounted() {
            // 构建完成覆盖播放器的事件
            // console.log(window.sm2BarPlayers)
            window.sm2BarPlayers.on = {
                play: (event) => {
                    // 播放器事件 - onplay
                    this.$store.commit('SET_PLAYSTATE', {
                        flag: 'onplay'
                    })
                },
                load: (event) => {
                    // 播放器事件 - onload
                    this.$store.commit('SET_PLAYSTATE', {
                        flag: 'onload'
                    })
                },
                stop: (event) => {
                    // 播放器事件 - onstop
                    this.$store.commit('SET_PLAYSTATE', {
                        flag: 'onstop'
                    })
                },
                pause: (event) => {
                    // 播放器事件 - onpause
                    this.$store.commit('SET_PLAYSTATE', {
                        flag: 'onpause'
                    })
                }
            }

        }
}
</script>
<style type="text/css">
.out-wrapper {
    width: 100%;
    height: 100%;
}

</style>
