<template>
    <section>
        <div class="base" v-if="Object.keys(baseItems).length !== 0">
            <!-- 内容 -->
            <div class="base_top">
                <span>{{baseItems.title}}</span>
            </div>
            <!-- 价格 -->
            <div class="base_content">
                <p class="base_content_price">{{baseItems.price}}</p>
                <p class="base_content_oldPrice">{{baseItems.oldPrice}}</p>
                <p class="base_content_activity">{{baseItems.discountDesc}}</p>
            </div>
            <!-- 默认 -->
            <div class="base_footer">
                <p>{{baseItems.columns[0]}}</p>
                <p>{{baseItems.columns[1]}}</p>
                <p>{{baseItems.services[ baseItems.services.length -1 ].name}}</p>
            </div>
            <!-- 底部 -->
            <div class="base_bottom">
                <p v-for="index of baseItems.services.length -1" :key="index">
                    <img :src="baseItems.services[index-1].icon" alt="">
                    {{baseItems.services[index-1].name}}
                </p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'detailBaseInfo',
    props: {
        baseItems:{
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
    created() {
    }
}
</script>
<style lang="scss" scoped>

$--color-price-text: #ff5777;
$--color-items-text: #999;
$--color-content-text: #000;
.base {
    margin-top: 15px;
    padding: 0 8px;
    color: $--color-content-text;
    border-bottom: 5px solid #f2f5f8;

    &_top {
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 10px;
    }

    &_content {
        display: flex;
        align-items: flex-end;
        height: 40px;
        margin-bottom: 10px;

        &_price {
            font-size: 28px;
            line-height: 28px;
            color: $--color-price-text;
        }

        &_oldPrice {
            margin-left: 10px;
            font-size: 16px;
            line-height: 16px;
            color: $--color-items-text;
            text-decoration: line-through
        }

        &_activity {
            align-self: flex-start;
            padding: 2px 8px;
            color: #eee;
            font-size: 14px;
            line-height: 14px;
            border-radius: 10px;
            border: 1px solid $--color-price-text;
            background-color: $--color-price-text;
        }
    }

    &_footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid #efefef;
        color: $--color-items-text;
    }

    &_bottom {
        padding: 20px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        p {
            img {
                width: 14px;
                height: 14px;
            }
        }
    }
}
// .base-info {
//     margin-top: 15px;
//     padding: 0 8px;
//
//
// }
</style>
