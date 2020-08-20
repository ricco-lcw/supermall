<template>
    <section>
        <div class="items" v-if="Object.keys(imgItems).length !== 0">
            <div class="items_title">
                <p>{{imgItems.desc}}</p>
            </div>
            <div class="items_imgs">
                <div v-for="item in imgItems.detailImage" :key="item.key">
                    <p>{{item.key}}</p>
                    <img v-for="items in item.list" :key="items.key" :src="items" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'detailImgList',
    props: {
        imgItems: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.items {
    padding: 10px 8px;
    &_title {
        padding: 20px 0;
        border: 1px solid #999;
    }
    &_imgs {
        color: #000;
        img {
            width: 100%;
        }
    }
}
</style>
