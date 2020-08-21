<template>
    <section>
        <!-- 导航栏 -->
        <detail-navbar></detail-navbar>
        <!-- 内容 -->
        <scroll-model class="content" ref="scroll">
            <!-- 头部轮播图 -->
            <detail-swiper :dateList="dateList" />
            <!-- 商品价格信息 -->
            <detail-base-info :baseItems="baseItems" />
            <!-- 店铺评价信息 -->
            <detail-store-info :storeItems="storeItems" />
            <!-- 图片列表 -->
            <detail-img-list :imgItems="imgItems" @scrollRefreshImg="scrollRefreshImg" />
            <!-- 参数信息 -->
            <detail-param-info :paramInfo="paramInfo" />
        </scroll-model>
    </section>
</template>

<script>
import { itemListenerMixin } from'@/mixins' // 引入mixins
import { getDetailInfo, Goods } from 'apis' // 引入接口
import DetailNavbar from './childPage/detailNavbar' // 导航引入组件
import ScrollModel from 'components/content/ScrollModel' // scroll引入组件
import DetailSwiper from './childPage/detailSwiper' // 引入组件
import DetailBaseInfo from './childPage/detailBaseInfo' // 引入组件
import DetailStoreInfo from './childPage/detailStoreInfo' // 引入组件
import DetailImgList from './childPage/detailImgList' // 引入组件
import DetailParamInfo from './childPage/detailParamInfo' // 引入组件

export default {
    name: 'detail',
    mixins: [ itemListenerMixin ],
    data() {
        return {
            id: this.$route.query.iid, // 监听主页ID
            dateList: [], // 商品图片list
            baseItems: {}, // 商品信息
            storeItems: {}, // 店铺信息
            imgItems: {}, // 图片列表信息
            paramInfo: {} // 参数信息
        }
    },
    created() {
        this.getDetail(this.id)
    },
    methods: {
        // 获取数据
        async getDetail(id) {
            const res = await getDetailInfo(id)
            if(!res) return
            const data = res.result
            this.dateList = res.result.itemInfo.topImages
            this.baseItems = new Goods(data.itemInfo, data.columns,data.shopInfo)
            this.storeItems = data.shopInfo
            this.imgItems = data.detailInfo
            this.paramInfo = data.itemParams
        },
        // 刷新
        scrollRefreshImg() {
            this.$refs.scroll.refresh()
        }
    },
    components: {
        DetailNavbar,
        ScrollModel,
        DetailSwiper,
        DetailBaseInfo,
        DetailStoreInfo,
        DetailImgList,
        DetailParamInfo
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
}
</style>
