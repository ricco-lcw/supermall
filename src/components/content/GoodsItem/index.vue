<template>
    <section>
        <div class="goods">
            <goods-item  class="items" v-for="item in goods" :key="item.key" :goodItem="item"></goods-item>
        </div>

    </section>
</template>
<script>

import GoodsItem from './goodsItem'

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

    },

    components: {
        GoodsItem
    },

    methods: {

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
