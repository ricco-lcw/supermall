<template>
    <section>
        <nav-bar class="homenav">
            <template #center>首页</template>
        </nav-bar>
        <home-detail :banners="banners"/>
        <home-recommend :recommends="recommends"></home-recommend>
    </section>
</template>
<script>
import { createData } from 'apis' // 接口
import NavBar from 'components/common/NavBar'
import homeDetail from './childPage/homeSwiper'
import homeRecommend from './childPage/homeRecommend'

export default {
    name: 'homePage',
    data() {
        return {
            banners: [],
            recommends: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        // 获取数据
        async getData() {
            const res = await createData()
            if(!res) return
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list


        }
    },
    components:{
        NavBar,
        homeDetail,
        homeRecommend
    }
}
</script>
<style lang="scss" scoped>
.homenav {
    color: var(--color-background);
    background-color: var(--color-tint);
}
</style>
