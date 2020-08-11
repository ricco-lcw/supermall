<template>
    <section>
        <swiper>
            <swiper-item v-for="item of banners" :key="item.key">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="imgLoad">
                </a>
            </swiper-item>
        </swiper>
    </section>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/Swiper'
export default {
    name: 'homeDetail',
    props: {
        banners:{
            type: Array,
            default() {
                return {
                    isload: false
                }
            }
        }
    },
    data(){
        return {
        }
    },
    methods:{
        imgLoad() {
            if(! this.isload) {
                this.$emit('swipperImgLoad')
                this.isload = true
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>
<style>

</style>
