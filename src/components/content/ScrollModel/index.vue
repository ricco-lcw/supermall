<template>
    <section ref="wrapper">
        <div class="content">
            <template >
                <slot></slot>
            </template>
        </div>
    </section>
</template>
<script>

import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        },
        pullDownRefresh: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    created() {

    },
    mounted() {
        this.createScroll()
    },
    methods:{
        createScroll() {

            this.scroll = new BScroll( this.$refs.wrapper, {
                useTransition: true,
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                pullDownRefresh: this.pullDownRefresh
            })

            if(this.probeType === 2 || this.probeType === 3){
                this.scroll.on('scroll', (position) => {
                    this.$emit('scroll',position)
                })
            }

            if(this.pullUpLoad === true) {
                this.scroll.on('pullingUp',() => {
                    this.$emit('pullingUp')
                    // setTimeout( () => {
                    //     this.scroll.finishPullUp()
                    // },2000)
                })
            }
            if(this.pullDownRefresh === true) {
                this.scroll.on('pullingDown',() => {
                    this.$emit('pullingDown')
                    setTimeout( () => {
                        this.scroll.finishPullDown()
                    },2000)
                })
            }
        },

        // 坐标返回到指定位置
        scrollTo(x,y,time=300) {
            this.scroll && this.scroll.scrollTo(x,y,time)
        },

        // 上拉加载
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },

        // 下拉刷新
        finishPullDown() {
            this.scroll && this.scroll.finishPullDown()
        },
        // 实时刷新
        refresh() {
            this.scroll && this.scroll.refresh()
        },

    }
}
</script>
<style lang="scss" scoped>

</style>
