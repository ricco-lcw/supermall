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
                pullUpLoad: true,
                pullDownRefresh: true
            })

            this.scroll.on('scroll', (position) => {
                this.$emit('scroll',position)
            })

            this.scroll.on('pullingUp',() => {
                console.log('上拉刷新')

                setTimeout( () => {
                    this.scroll.finishPullUp()
                },2000)
            })

            this.scroll.on('pullingDown',() => {
                console.log('下拉刷新')

                setTimeout( () => {
                    this.scroll.finishPullDown()
                },2000)
            })

            // this.scroll.scrollTo(0, 0)
        },

        scrollTo(x,y,time=300) {
            this.scroll.scrollTo(x,y,time)
        }

    }
}
</script>
<style lang="scss" scoped>

</style>
