<template>
    <section>
        <div class="navbar">
            <template class="left"> <slot name="left"></slot> </template>
            <template class="center"> <slot name="center"></slot> </template>
            <template class="right"> <slot name="right"></slot> </template>
        </div>
    </section>
</template>
<script>
export default {
    props:[

    ],
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>

.navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100, .1);

    .left {
        width: 60px;
        background-color: red;
    }
    /* // &.left .right {
    //     width: 60px;
    //     background-color: cadetblue;
    // }
    // .center {
    //     flex: 1;
    //     background-color: chocolate;
    // } */
}
</style>
