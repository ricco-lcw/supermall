<template>
    <section>
        <swiper class="detail-swiper">
            <swiper-item v-for="item in dateList" :key="item.key">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </section>
</template>
<script>

import { Swiper, SwiperItem } from 'components/common/Swiper'

export default {
    name: 'DetailSwiper',
    props:{
        dateList:{
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {

        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>
<style lang="scss" scoped>
.detail-swiper {
    overflow: hidden;
    height: 300px;
}
</style>
