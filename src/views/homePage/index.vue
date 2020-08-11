<template>
    <section>
        <div class="homenav">
            <nav-bar class="top">
                <template #center>首页</template>
            </nav-bar>
            <children-model ref="scroll" @scrollButton="scrollButton"/>
            <top-button @click.native="backClick" v-if="displacement"></top-button>
        </div>
    </section>
</template>
<script>
import NavBar from 'components/common/NavBar' // 引入顶部组件
import ChildrenModel from './childPage/modules' // 引入子组件集成
import TopButton from 'components/content/TopButton' //引入返回顶部按钮


export default {

    name: 'homePage',
    data() {
        return {
            displacement: 0
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {
        // 点击返回顶部
        backClick() {
            this.$refs.scroll.scrollTo(0,0)
        },

        // 获取坐标
        scrollButton(position) {
            this.displacement = position.y < -1000
        }
    },
    // 注册组件
    components:{
        NavBar,
        ChildrenModel,
        TopButton
    }
}
</script>
<style lang="scss" scoped>
.homenav {
    padding-top: 44px;
    height: 100vh;

    .top {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
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
