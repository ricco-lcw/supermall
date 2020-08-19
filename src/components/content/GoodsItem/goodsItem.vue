<template>
    <section>
        <div class="goods-item" @click="imgClick">
            <img :src="goodItem.show.img" alt="" @load="imgLoad">
            <div class="goods-info">
                <p>{{goodItem.title}}</p>
                <span class="price">￥{{goodItem.price}}</span>
                <span class="cfav">{{goodItem.cfav}}</span>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'goodsitems',
    props: {
        goodItem:{
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
        }
    },
    methods: {
        // 创建事件总线
        imgLoad() {

            this.bus.$emit('scrollRefresh')

        },

        // 点击图片根据图片ID跳转到相关页面
        imgClick() {

            this.$router.push( `detail/${this.goodItem.iid}` )

        }
    }
}
</script>
<style lang="scss" scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;

    // width: 48%;
}
.goods-item img {
    width: 100%;
    border-radius: 5px;
}
.goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-size-adjust: center;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .cfav {
        position: relative;
    }

    .cfav::before {
        position: absolute;
        left: 15px;
        top: -1;
        width: 14px;
        height: 14px;
        background: url("~assets/common/cfav.svg");
    }
}

</style>
