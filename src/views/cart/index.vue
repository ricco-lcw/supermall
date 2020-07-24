<template>
    <section>
        <p class="content">
            this is cart
        </p>
        <canvas ref="myCanvas" ></canvas>
    </section>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.getCanvas()
        // console.log('----this.mounted')
    },
    created() {
        // console.log('----this.created')
    },
    methods: {
        async getCanvas() {
            const can = await this.$refs.myCanvas
            console.log(can)
            const ctx = can.getContext('2d')
            console.log(ctx)
            ctx.fillStyle = '#00f'
            ctx.strokeStyle = '#0f0'
            ctx.fillRect(0,0,200,100)
        }
    }
}
</script>
<style lang="scss" scoped>
    .content {
        color:black
    }
</style>
