<template>
    <section>
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
            <tab-control :titleList="titleList" @tabClick="tabClick" ref="tabControl"></tab-control>
            <goods-item :goods="showGoods"></goods-item>
        </scroll-model>
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
import { Debounce } from 'utils/index' // 引入防抖函数

export default {
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
            tabOffsetTop:0
        }
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



        console.log('-------',this.$refs.tabControl.$el.offsetTop)


    },
    methods:{
        swipperImgLoad() {

            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
            console.log(this.tabOffsetTop)

        },

        // 向父组件传递子组件事件
        scrollHandle(position) {
            this.$emit('scrollButton',position)
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

        // 返回顶部
        scrollTo(x,y){
            this.$refs.scroll.scrollTo(x,y)
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
        GoodsItem
    }
}
</script>
<style lang="scss" scoped>
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
