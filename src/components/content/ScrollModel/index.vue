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

        }
    },
    created() {

    },
    mounted() {
        this.createScroll()
    },
    methods:{
        createScroll() {
            const scroll = new BScroll( this.$refs.wrapper, {
                useTransition: true,
                click: true,
                probeType: this.probeType,
                pullUpLoad: true,
                pullDownRefresh: true
            })

            scroll.on('scroll', (position) => {
                this.$emit('scroll',position)
            })

            scroll.on('pullingUp',() => {
                // console.log('上拉刷新')

                setTimeout( () => {
                    scroll.finishPullUp()
                },2000)
            })

            scroll.on('pullingDown',() => {
                // console.log('下拉刷新')

                setTimeout( () => {
                    scroll.finishPullDown()
                },2000)
            })

            // scroll.scrollTo(0, 0)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
