<template>
    <section>
        <div class="items" v-if="Object.keys(imgItems).length !== 0">
            <div class="items_title">
                <p>{{imgItems.desc}}</p>
            </div>
            <div class="items_imgs">
                <div v-for="item in imgItems.detailImage" :key="item.key">
                    <p>{{item.key}}</p>
                    <img v-for="items in item.list" :key="items.key" :src="items" alt="" @load="imgLoad">
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
                return {
                    counter: 0,
                    imgsLength: 0
                }
            }
        }
    },
    data() {
        return {

        }
    },
    watch: {
       imgItems() {
        // 获取图片数量
            this.imgsLength = this.imgItems.detailImage[0].list.length
        }
    },
    methods: {
        // 判断所有图片加载完，进行回调
        imgLoad() {
            if(++this.counter === this.imgsLength) {
                this.$emit('scrollRefreshImg')
            }
        },
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
