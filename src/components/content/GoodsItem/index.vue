<template>
    <section>
        <div class="goods">
            <goods-item  class="items" v-for="item in goods" :key="item.key" :goodItem="item"></goods-item>
        </div>
        <!-- <div class="content">
            <ul v-for="item in 100" :key="item">
                <li>
                    {{`列表${item}`}}
                </li>
            </ul>
        </div> -->
    </section>
</template>
<script>
import GoodsItem from './goodsItem'
// import BScroll from 'utils/bscroll'
// import BScroll from 'better-scroll'
export default {
    name:'goods',
    props:{
        goods: {
            type: Array,
            default: () => {}
        }
    },

    data() {
        return {
            scroll: {}
        }
    },

    created() {

    },

    mounted() {
        // this.createScroll()

    },

    components: {
        GoodsItem
    },

    methods: {
        createScroll(){
            this.scroll = new BScroll( document.querySelector('.content'),{
                // click: true,
                // probeType: 3,
                // pullUpload: true
            })
            // console.log( this.scroll)

            // this.scroll.on('scroll',(position) => {
            //     console.log(position)
            // })

            // this.scroll.on('pullingUp', () => {
            //     console.log('________')
            //     setTimeout( () => {
            //         scroll.finishPullUp()
            //     },2000)
            // })
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    height: 200px;
    text-align: center;

    overflow: hidden;
    overflow-y: scroll;
}
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    // height: 500px;
    // background: indianred;

    // overflow: hidden;
    // overflow-y: scroll;

    .items {
        width: 48%;
    }
}
</style>
