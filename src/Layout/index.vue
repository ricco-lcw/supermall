<template>
    <section>
        <keep-alive exclude="detail">
            <router-view></router-view>
        </keep-alive>
        <m-button ></m-button>
    </section>
</template>
<script>
import MButton from 'components/content/MButton'
export default {
    name: 'Layout',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        MButton
    }
}
</script>
<style lang="scss" sopced>

</style>
