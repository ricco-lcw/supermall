<template>
    <section>
        <div class="wrapper" ref="wrapper">
            <ul>
                <li v-for="item in 200" :key="item.key">{{item}}</li>
            </ul>
        </div>

    </section>
</template>
<script>

// import BScroll from 'better-scroll'
import BScroll from 'utils/bscroll'

import BackTop from 'components/content/BackTop'
export default {

    name: 'category',
    data() {
        return {
            items: 0,
            scroll: null
        }
    },

    //组件创建完成
    created() {

    },

    mounted() {
        this.createScroll()
    },

    methods: {
        handle() {
            console.log(`this.click${this.items ++}`)
        },

        createScroll() {

            this.scroll = new BScroll( this.$refs.wrapper, {
                // scrollY: true,
                click: false,
                probeType: 3,
            })
            this.scroll.on('scroll', (position) => {
                // console.log(position)
            })

        }

    },

    components: {
        BackTop
    }
}
</script>
<style lang="scss" scoped>

.wrapper {
    color: burlywood;
    height: 590px;
    background: rgba(100,100,100,.8);
    text-align: center;
    font-size: 40px;

    overflow: hidden;
    overflow-y: scroll;
}
.top {
    position: absolute;
    top: 20px;
    left: 0px;
    right: 0px;

}
</style>
