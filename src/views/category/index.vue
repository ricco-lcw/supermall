<template>
    <section>
        <div>
            {{items}}
        </div>
        <button @click="handle('111111111')">hhhhhh</button>
    </section>
</template>
<script>
import { Debounce } from 'utils/index'
export default {

    name: 'category',
    data() {
        return {
            items: 0,
        }
    },
    //组件创建完成
    created() {

    },
    mounted() {

    },
    methods: {
        handle: Debounce( val => {
            console.log(val)
        })
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>

</style>
