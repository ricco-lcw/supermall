<template>
    <section>
        <div class="icon-top">
            <img src="~assets/common/top.png" alt="">
        </div>
    </section>
</template>
<script>
export default {
    name: 'BackClick',

    data() {
        return {

        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.icon-top {
    position: fixed;
    right: 5px;
    bottom: 45px;
    z-index: 999;
    img {
        width: 50px;
        height: 50px;
    }
}
</style>
