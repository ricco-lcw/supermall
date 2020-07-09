<template>
    <section>
        <div class="recommend">
            <div class="recommend-item" v-for="item of recommends" :key="item.key">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
                <div>
                    {{item.title}}
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'homeRecommend',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.recommend {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 14px;
    text-align: center;
    padding:  10px 0 20px;
    border-bottom: 10px solid #eee;

    &.item {
        flex: 1;
    }

    img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px ;
    }
}
</style>
