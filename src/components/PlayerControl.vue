<template>
    <div class="m-playbar">
        <div class="sm2-bar-ui compact full-width">
            <div class="bd sm2-main-controls">
                <div class="sm2-inline-texture"></div>
                <div class="sm2-inline-gradient"></div>
                <div class="sm2-inline-element sm2-button-element">
                    <div class="sm2-button-bd">
                        <a href="#play" class="sm2-inline-button sm2-icon-play-pause">Play / pause</a>
                    </div>
                </div>
                <div class="sm2-inline-element sm2-inline-status">
                    <div class="sm2-playlist">
                        <div class="sm2-playlist-target">
                            <!-- playlist <ul> + <li> markup will be injected here -->
                            <!-- if you want default / non-JS content, you can put that here. -->
                            <noscript>
                                <p>JavaScript is required.</p>
                            </noscript>
                        </div>
                    </div>
                    <div class="sm2-progress">
                        <div class="sm2-row">
                            <div class="sm2-inline-time">0:00</div>
                            <div class="sm2-progress-bd">
                                <div class="sm2-progress-track">
                                    <div class="sm2-progress-bar"></div>
                                    <div class="sm2-progress-ball">
                                        <div class="icon-overlay"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sm2-inline-duration">0:00</div>
                        </div>
                    </div>
                </div>
                <div class="sm2-inline-element sm2-button-element sm2-volume">
                    <div class="sm2-button-bd">
                        <span class="sm2-inline-button sm2-volume-control volume-shade"></span>
                        <a href="#volume" class="sm2-inline-button sm2-volume-control">volume</a>
                    </div>
                </div>
            </div>
            <div class="bd sm2-playlist-drawer sm2-element">
                <div class="sm2-inline-texture">
                    <div class="sm2-box-shadow"></div>
                </div>
                <!-- playlist content is mirrored here -->
                <div class="sm2-playlist-wrapper">
                    <ul class="sm2-playlist-bd">
                        <li>
                            <a href="http://123.57.215.156:10011/30BDA36C31B757BD2B3341669AC8FCEB?nisFLv=3600.mp3">
                            智和测试-03
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        mounted() {

        }
}
</script>
<style>
/**
 * 播放器
 */
.m-playbar {
    position: fixed;
    display: inline-block;
    width: 100%;
    height: 58px;
    bottom: 0px;
    z-index: 999;
        left: -2px;
}
/*播放器按钮宽度*/
.sm2-bar-ui .sm2-inline-element,
.sm2-bar-ui .sm2-button-element .sm2-button-bd {
    min-width: 3.5em !important;
    min-height: 3.5em !important;
}

.sm2-bar-ui.full-width {
    height: 100%;
}

.sm2-bar-ui > .bd {
    height: inherit;
}
/*播放器背景宽度*/
.sm2-bar-ui .bd .sm2-button-element {
    background-color: #000000 !important;
}
.sm2-bar-ui .sm2-inline-button {
    background-color: #000000 !important;
}
.sm2-bar-ui .sm2-inline-status {
    background-color: #000000 !important;
}
.sm2-progress .sm2-progress-track {
    background-color: #ffffff !important;
    height: 0.3em !important;
}
.sm2-progress .sm2-progress-ball {
    top: -2px !important;
}
</style>
