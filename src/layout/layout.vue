<template>
<div class="container">
    <div class="bottom">
        <ul>
            <!-- 用for循环来把这里替代，数据自己构造 -->
            <li>
                <div class="cumb">
                    <i class="WYY-font WYYmusiccloud"></i>
                    <span>发现</span>
                </div>
            </li>
            <li>
                <div class="cumb">
                    <i class="WYY-font WYYboke"></i>
                    <span>播客</span>
                </div>
            </li>
            <li>
                <div class="cumb">
                    <i class="WYY-font WYYyinyue"></i>
                    <span>我的</span>
                </div>
            </li>
            <li>
                <div class="cumb">
                    <i class="WYY-font WYYchangge"></i>
                    <span>k歌</span>
                </div>
            </li>
            <li>
                <div class="cumb">
                    <i class="WYY-font WYYqun"></i>
                    <span>云村</span>
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

        }
    }
    // components: {
    //     helloWord: helloWord
    // }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
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
                        font-size: 36px;
                    }
                }
            }
        }
    }
}
</style>