<template>
    <section>
        <div class="homenav">
            <nav-bar class="top">
                <template #center>首页</template>
            </nav-bar>
            <home-detail :banners="banners"/>
            <home-recommend :recommends="recommends"></home-recommend>
            <feature></feature>
            <tab-control class="tab-control" :titleList="titleList" @tabClick="tabClick"></tab-control>
            <goods-item class="godds-item" :goods="showGoods"></goods-item>
            <!-- <ul v-for=" item in 20" :key="item">
                <li>{{item}}</li>
            </ul> -->
        </div>
    </section>
</template>
<script>
import { createData, createPage } from 'apis' // 接口函数
import NavBar from 'components/common/NavBar' // 引入组件
import homeDetail from './childPage/homeSwiper' // 引入组件
import homeRecommend from './childPage/homeRecommend' // 引入组件
import Feature from './childPage/feature' // 引入组件
import TabControl from 'components/content/TabControl' // 引入组件
import GoodsItem from 'components/content/GoodsItem/index' // 引入组件

export default {
    name: 'homePage',
    data() {
        return {
            banners: [],
            recommends: [],
            titleList: [ '流行', '新款', '精选' ],
            touchType: 'pop',
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] },
            },
            iitem: []
        }
    },

    created() {
        this.getData()
        this.getPage('pop')
        this.getPage('new')
        this.getPage('sell')
    },

    computed: {
        showGoods() {
            return this.goods[this.touchType].list
        }
    },

    methods: {

        // 获取滚动屏数据分类数据
        async getData() {

            const res = await createData()
            if(!res) return
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        },

        // 获取列表数据
        async getPage(type) {
            const page = this.goods[type].page + 1
            const res = await createPage(type,page)
            if(!res) return
            this.goods[type].list.push( ...res.data.list )
            this.goods[type].page + 1
            // console.log('this.res',res)
        },

        // 响应请求
        tabClick(index){
            switch(index) {
                case 0:
                    this.touchType = 'pop'
                    console.log('this.index0',index)
                    break
                case 1:
                    this.touchType = 'new'
                    console.log('this.index1',index)
                    break
                case 2:
                    this.touchType = 'sell'
                    console.log('this.index2',index)
                    break
            }
        }

    },

    // 注册组件
    components:{
        NavBar,
        homeDetail,
        homeRecommend,
        Feature,
        TabControl,
        GoodsItem
    }
}
</script>
<style lang="scss" scoped>
.homenav {
    padding-top: 44px;

    .top {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        color: var(--color-background);
        background-color: var(--color-tint);
    }

    .tab-control {
        position: sticky;
        top: 44px;
    }
}

</style>
