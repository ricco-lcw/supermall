<template>
    <section>
        <div class="homenav">
            <nav-bar class="top">
                <template #center>首页</template>
            </nav-bar>
            <children-model ref="scroll" />
        </div>
    </section>
</template>
<script>
import NavBar from 'components/common/NavBar' // 引入顶部组件
import ChildrenModel from './childPage/modules' // 引入子组件集成
export default {

    name: 'homePage',
    data() {
        return {
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {
    },
    // 注册组件
    components:{
        NavBar,
        ChildrenModel,
    }
}
</script>
<style lang="scss" scoped>
.homenav {
    height: 100vh;

    .top {
        // position: fixed;
        // top: 0;
        // left: 0;
        // right: 0;
        // z-index: 9;
        color: var(--color-background);
        background-color: var(--color-tint);
    }

    // .content {
    //     overflow: hidden;
    //     position: absolute;
    //     top: 44px;
    //     bottom: 49px;
    //     left: 0;
    //     right: 0;
    // }

    // .top_buttom {
    //     width: 50px;
    //     height: 50px;
    // }
}

</style>
