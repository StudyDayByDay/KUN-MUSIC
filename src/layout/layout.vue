<template>
<div class="container">
    <div class="bottom">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
    <!-- <hello-word></hello-word> -->
</div>
</template>

<script>
// import helloWord from '@/components/HelloWorld.vue'
export default {
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
        height: 100px;
        width: 100%;
        background-color: pink;
        ul {
            display:  flex;
            li {
                flex: 1;
                height: 90px;
                background-color: black;
                margin: 5px;
            }
        }
    }
}
</style>