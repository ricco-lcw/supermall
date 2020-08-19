<template>
    <section>
        <div calss="detail">
             <detail-navbar/>
            <detail-swiper :dateList="dateList"/>
            <detail-base-info :items="baseItems"></detail-base-info>
            <div >
                <p v-for="item in 100" :key="item">{{item}}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { getDetailInfo, Goods } from 'apis' // 引入接口
import DetailNavbar from './childPage/DetailNavbar' // 引入组件
import DetailSwiper from './childPage/DetailSwiper' // 引入组件
import DetailBaseInfo from './childPage/DetailBaseInfo' // 引入组件

export default {
    name: 'detail',
    data() {
        return {
            id: this.$route.params.id, // 监听主页ID
            dateList: [],
            baseItems: {},

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
        }
    },
    components: {
        DetailNavbar,
        DetailSwiper,
        DetailBaseInfo
    }
}
</script>
<style lang="scss" scoped>
.detail {
    background-color: #fff;
}
</style>
