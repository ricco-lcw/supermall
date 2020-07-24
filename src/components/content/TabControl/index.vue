<template>
    <section>
        <div class="tab-control">
            <div v-for="(item,index) in titleList" :key="item"
            class="tab-control_item"
            :class="{active: index === currentIndex}"
            @click="handle(index)">
                <span>{{item}}</span>
            </div>
        </div>
    </section>
</template>
<script>
import MButton from 'components/common/MButton'

export default {
    name: 'tabControl',
    props:{
        titleList: {
            type: Array,
            default() {
                return [

                ]
            }
        },
    },
    data () {
        return {
            currentIndex: 0
        }
    },
    methods:{
        handle(index) {
            this.currentIndex = index
            this.$emit('tabClick',index)
        }
    },
    components: {
        MButton
     }
}
</script>

<style lang="scss" scoped>
.tab-control {
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    z-index: 999;
    background-color: #fff;

    &_item {
        flex: 1;
    }
    &_item span {
        padding-bottom: 5px;
    }

    .active {
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 2px solid var(--color-tint)
    }
}
</style>
