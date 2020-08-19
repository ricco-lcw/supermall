<template>
    <section>
        <div class="item" @click="handle">
            <template v-if="!isActive"> <slot name="itemIcon"></slot></template>
            <template v-else> <slot name="itemIconActive"></slot></template>
            <template :style="activeStyle"><slot name="itemName"></slot></template>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        activeColor: {
            type: String,
            default: '#ff5777'
        },
        path: {
            type: String,
            default: '/homePage'
        },
        params: {
            type: Object,
            default: () => ({})
        }
    },
    data(){
        return {

        }
    },
    computed:{
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        handle() {
            this.$router.push({name:this.path})
        }
    }
}
</script>
<style lang="scss" scoped>
.item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 49px;
}

.item img {
    height: 24px;
    width: 24px;
}
</style>
