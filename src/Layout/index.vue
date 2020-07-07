<template>
    <section>
        <router-view></router-view>
        <m-button></m-button>
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
    components: {
        MButton
    }
}
</script>
<style lang="scss" sopced>

// $background-color: #e6e6e6;

// $link-color: blue;

// .content {
//     display: fixed;
//     width: 20vw;
//     height: 30vh;
//     background-color: $background-color;
//     color: $link_color;
//     color:cadetblue;
// }
</style>
