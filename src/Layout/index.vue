<template>
    <section>
        <router-view></router-view>
        <!-- <top-button></top-button> -->
        <m-button ></m-button>
    </section>
</template>
<script>
import MButton from 'components/content/MButton'
// import TopButton from 'components/content/TopButton'
export default {
    name: 'Layout',
    data() {
        return {

        }
    },
    methods: {
        // backClick(){
        // }
    },
    components: {
        MButton
        // TopButton
    }
}
</script>
<style lang="scss" sopced>

</style>
