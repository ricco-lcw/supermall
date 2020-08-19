<template>
    <section>
        <tab-control :titleList="titleList" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tab-control>

        <scroll-model
            class="content"
            ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            :pullDownRefresh="true"
            @scroll="scrollHandle"
            @pullingUp="pullingUpHandle"
            @pullingDown="pullingDownHandle">

            <home-detail :banners="banners" @swipperImgLoad="swipperImgLoad"></home-detail>
            <home-recommend :recommends="recommends"></home-recommend>
            <feature></feature>
            <tab-control :titleList="titleList" @tabClick="tabClick" ref="tabControl2"></tab-control>
            <goods-item :goods="showGoods"></goods-item>
        </scroll-model>

        <top-button @click.native="backClick" v-if="displacement"></top-button>
    </section>
</template>
<script>
import { createData, createPage } from 'apis' // 接口函数
import ScrollModel from 'components/content/ScrollModel' // 引入组件
import homeDetail from './homeSwiper' // 引入轮播图组件
import homeRecommend from './homeRecommend' // 引入标签组件
import Feature from './feature' // 引入img组件
import TabControl from 'components/content/TabControl' // 引入tabs组件
import GoodsItem from 'components/content/GoodsItem/index' // 引入tabs-children组件
import TopButton from 'components/content/TopButton' //引入返回顶部按钮

import { Debounce } from 'utils/index' // 引入防抖函数

export default {
    name: 'childPage',
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
            displacement: 0,
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0
        }
    },
    activated() {
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
    },
    deactivated() {
        this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
        this.getData()

        this.getPage('pop')
        this.getPage('new')
        this.getPage('sell')
    },
    mounted() {
        // 防抖加载
        this.bus.$on('scrollRefresh', () => {
            Debounce(this.$refs.scroll.refresh(),500)
        })
    },
    methods:{

        // 获取吸顶坐标
        swipperImgLoad() {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },

        // 点击返回顶部
        backClick() {
            this.$refs.scroll.scrollTo(0,0)
        },

        // 获取坐标
        scrollHandle(position) {
            this.displacement = (-position.y) > 1000
            this.isTabFixed = (-position.y) > this.tabOffsetTop
        },

        // 上拉加载
        pullingUpHandle() {
            console.log('上拉加载')
            this.getPage(this.touchType)
        },

        // 下拉刷新
        pullingDownHandle(){
            console.log('下拉刷新')
        },

        // 获取多个数据
        async getData() {
            const res = await createData()
            if(! res ) return
            this. banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        },

        // 获取商品列表数据
        async getPage(type) {
            const page = this.goods[type].page + 1
            const res = await createPage(type,page)
            if(!res) return
            this.goods[type].list.push( ...res.data.list )
            this.goods[type].page + 1

            this.$refs.scroll.finishPullUp()
        },

        // 响应请求
        tabClick(index){
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index

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
                default:
                    break
            }
        }
    },

    computed: {
        showGoods() {
            return this.goods[this.touchType].list
        }
    },

    components: {
        ScrollModel,
        homeDetail,
        homeRecommend,
        Feature,
        TabControl,
        GoodsItem,
        TopButton
    }
}
</script>
<style lang="scss" scoped>
.tab-control {
    position: relative;
    z-index: 9;
}
.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    // overflow-y: scroll;
    // margin-top: 44px;
}
</style>
