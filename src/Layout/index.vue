<template>
    <section>
        <m-button></m-button>
        <div class="content">
            this is layout page
        </div>
    </section>
</template>
<script>
import MButton from 'components/content/MButton'
export default {
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
    .content {
        display: fixed;
        width: 10vw;
        height: 10vh;
        color: red
    }
</style>
