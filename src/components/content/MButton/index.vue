<template>
    <section>
        <m-button>
            <!-- <template #itemIcon > <img  src="../../assets/imgs/computer.svg" alt=""> </template> -->
            <!-- <template #itemIconActive > <img  src="../../assets/imgs/switch.svg" alt=""> </template> -->
            <template #itemName > <div>首页</div> </template>
        </m-button>
    </section>
</template>
<script>
import MButton from 'components/common/MButton'
export default {
    data() {
        return {
            MButton
        }
    },
    components:{
        MButton
    }
}
</script>
<style scoped>

</style>
