<template>
    <section>
        <div class="params" v-if="Object.keys(paramInfo).length !== 0">
            <div class="params_top" v-for="item of paramInfo.rule.tables[0]" :key="item.key" >
                <div class="params_top_item" v-for="items in item" :key="items.key">
                   {{items}}
                </div>
            </div>
            <div class="params_content" v-for="item of paramInfo.info.set" :key="item.key">
                <div class="params_content_left">
                    {{item.key}}
                </div>
                <div class="params_content_right">
                    {{item.value}}
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: '',
    props: {
        paramInfo: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>

$--color-price-text: #ff5777;
$--color-items-text: #eee;
$--color-content-text: #000;
.params {
    padding: 10px 8px;
    &_top {
        padding: 15px 0px;
        border-bottom: 1px solid $--color-items-text;
        display: flex;
        justify-content: space-between;
        &_item {
            width: 20vw;
        }
    }
    &_content {
        padding: 15px 0px;
        display: flex;
        border-bottom: 1px solid $--color-items-text;
        &_left {
            width: 30vw;
        }
        &_right {
            width: 70vw;
            color: $--color-price-text;
        }

    }
}
</style>
