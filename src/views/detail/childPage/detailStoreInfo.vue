<template>
    <section>
        <div class="store"  v-if="Object.keys(storeItems).length !== 0">
            <!-- 商标 -->
            <div class="store_brand">
                <a :href="storeItems.shopUrl">
                    <img :src="storeItems.shopLogo" alt="">
                </a>
                <p>{{storeItems.name}}</p>
            </div>
            <!-- 内容 -->
            <div class="store_content">
                <div class="store_content_left">
                    <div>
                        <span>{{storeItems.cSells | itemsFilter}}万</span>
                        <p>总销量</p>
                    </div>
                    <div>
                        <span>{{storeItems.cGoods}}</span>
                        <p>全部宝贝</p>
                    </div>
                </div>
                <div class="store_content_right">
                    <div class="detail" v-for="item of storeItems.score" :key="item.key">
                        <p>{{item.name}} </p>

                        <p v-if="!item.isBetter" class="lowText">{{item.score}}</p>
                        <p  v-else  class="highText">{{item.score}}</p>

                        <div v-if="!item.isBetter" class="low box">低</div>
                        <div v-else class="high box">高</div>
                    </div>
                </div>
            </div>
            <!-- 底部链接 -->
            <div class="store_link">
                    <a :href="storeItems.shopUrl">
                        <div class="store_link_item">
                            进店逛逛
                        </div>
                    </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'detailStoreInfo',

    props: {
        storeItems: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    filters:{
        itemsFilter: v => ( v === 0 ? 0 : (v/10000).toFixed(1) ? (v/10000).toFixed(1) : '--')
    },

    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
$--color-store-border: #999;

.store {
    padding: 20px 8px;
    border-bottom: 3px solid #f2f5f8;

    &_brand {
        display: flex;
        align-items: center;
        font-size: 24px;
        a img{
            width: 60px;
            height: 60px;
            border: 1px solid $--color-store-border;
            border-radius: 50px ;
            margin-right: 20px;
        }
    }
    &_content {
        margin: 10px 0;
        display: flex;
        align-items: center;
        color: #000;
        &_left {
            width: 50%;
            display: flex;
            justify-content: space-around;
            text-align: center;
            border-right: 1px solid $--color-store-border;
            span {
                font-size: 22px;
                line-height: 36px;
            }
        }
        &_right {
            width: 50%;
            padding-left: 20px;
            font-size: 16px;
            line-height: 18px;

            .detail {
                padding:  5px 0;
                display: flex;
                text-align: left;
                justify-content: space-between;
            }
            .box {
                color: white;
                width: 16px;
                height: 16px;
            }
            .low {
                background-color: green;
            }
            .high {
                background-color: var(--color-high-text);
            }
            .lowText {
                color: green;
            }
            .highText {
                color: var(--color-high-text);
            }
        }
    }
    &_link {
        display: flex;
        justify-content: center;

        &_item {
            background-color: #efefef;
            padding: 5px 40px;
            border-radius: 10px;
        }
    }
}
</style>
