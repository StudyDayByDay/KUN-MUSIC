<template>
<div class="container">
    <!-- 音频控件 -->
    <div class="mp3Play">
        <div class="image">
            <img src="../../public/img/flower.png" alt="图片">
        </div>
        <div class="middle-box">
            <span class="title">
                <span class="big">Better Now</span>
                <span class="small">-Blanks</span>
            </span>
            <!-- 播放按钮 -->
            <i class="WYY-font" :class="[playStatus ? 'WYYpause--outline--filled' : 'WYYplay--filled']" @click="play"></i>
        </div>
        <i class="WYY-font WYYbofangliebiao"></i>
        <audio
            src="../../public/mp3/young.mp3"
            ref="audio"
            @pause="musicPause()"
            @ended="musicEnded()"
            @play="playLoad()"
        ></audio>
    </div>
    <!-- 底部路由 -->
    <div class="bottom">
        <ul>
            <!-- 用for循环来把这里替代，数据自己构造 -->
            <li v-for="(item, index) in icons" :key="index" @click="currentIndex = index">
                <div class="cumb">
                    <i class="WYY-font" :class="[item.cla, currentIndex === index ? 'chose' : '']"></i>
                    <span :class="[currentIndex === index ? 'spanChange' : '']">{{item.label}}</span>
                </div>
            </li>
        </ul>
    </div>
    <!-- <hello-word></hello-word> -->
</div>
</template>

<script>
// import helloWord from '@/components/HelloWorld.vue'
export default {
    data() {
        return {
            playStatus: false,
            icons: [
                { cla: 'WYYmusiccloud', label: '发现' },
                { cla: 'WYYboke', label: '播客' },
                { cla: 'WYYyinyue', label: '我的' },
                { cla: 'WYYchangge', label: 'k歌' },
                { cla: 'WYYqun', label: '云村' }
            ],
            currentIndex: 0
        }
    },
    // components: {
    //     helloWord: helloWord
    // }
    methods: {
        // 播放按钮切换
        play() {
            if (this.playStatus) {
                // 暂停播放
                this.playStatus = !this.playStatus
                this.$refs.audio.pause();
            } else {
                // 开始播放
                this.playStatus = !this.playStatus
                this.$refs.audio.play();
            }
        },
        // 播放
        playLoad() {

        },
        // 暂停
        musicPause() {

        },
        // 结束
        musicEnded() {
            console.log('播放结束', '🤖')
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
    .mp3Play {
        position: fixed;
        bottom: 80px;
        left: 0;
        display: flex;
        justify-content: space-between;
        height: 40px;
        width: 100%;
        background: rgba($color: #000000, $alpha: .7);
        .image {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            bottom: 5px;
            height: 40px;
            width: 40px;
            margin-left: 10px;
            border-radius: 50%;
            background-color: #000;
            img {
                height: 30px;
                width: 30px;
                border-radius: 50%;
                border: 1px solid black;
                background-color: pink;
            }
        }
        .middle-box {
            flex: 1;
            display: flex;
            justify-content: space-between;
            .title {
                line-height: 40px;
                padding-left: 5px;
                color: #fff;
                .big {

                }
                .small {
                    font-size: 12px;
                    color: #cac6c6;
                }
            }
        }
        i {
            height: 40px;
            width: 40px;
            color: #fff;
            font-size: 32px;
            margin-right: 10px;
            // background-color: pink;
        }
    }
    .bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 80px;
        width: 100%;
        background: rgba($color: #000000, $alpha: .7);
        ul {
            display:  flex;
            li {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 70px;
                // background-color: pink;
                margin: 5px;
                .cumb {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: #8a8a8a;
                    i {
                        height: 30px;
                        width: 30px;
                        line-height: 30px;
                        text-align: center;
                        font-size: 23px;
                    }
                    .spanChange {
                        color: #be3f3a;
                    }
                    .chose {
                        color: #fff;
                        border-radius: 50%;
                        background-color: #be3f3a;
                    }
                }
            }
        }
    }
}
</style>