<template>
    <section>
        <div class="title">
            <div class="left" @click="goback()">
                <img src="~assets/common/back-left.png" alt="">
            </div>
            <div class="center" v-for="(item,index) in titleList" :key="item.key" :class="{ active: index === currentIndex}" @click="clickHandle(index)">
                {{item}}
            </div>
            <div class="right"></div>
        </div>
    </section>
</template>
<script>
import NavBar from 'components/common/NavBar' // 引入组件

export default {
    name: 'detailNavbar',

    data() {
        return {
            id: this.$route.params.id, // 监听主页ID
            titleList: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    created() {

    },
    methods: {
        // 获取下标
        clickHandle(index){
            this.currentIndex = index
            switch(index) {
                case 0:
                    break
            }
            console.log('-----',this.currentIndex)
            console.log('***',this.id)
        },
        // 返回主页面
        goback() {
            // this.$router.push('/homePage')
            this.$router.back()
        },

    },
    components:{
        NavBar
    }
}
</script>
<style lang="scss" scoped>
.title {
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: center;
    box-shadow: 0 1px 1px rgba(100,100,100, .1);

    .left, .right {
        width: 60px;
    }
    .left img {
        margin: 10px 23px;
    }
    .center {
        flex: 1;
        text-align: center;
    }
    .active {
        color: var(--color-high-text);
    }
}
</style>
