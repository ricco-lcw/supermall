<template>
    <section>
        <div class="tabbar" >
            <m-button :path="'homePage'" :activeColor="'red'">
                <template #itemIcon > <img  src="~assets/tabbar/home.png" alt=""> </template>
                <template #itemIconActive > <img  src="~assets/tabbar/home_active.png" alt=""> </template>
                <template #itemName ><br>首页</template>
            </m-button>

             <m-button :path="'category'">
                <template #itemIcon > <img  src="~assets/tabbar/category.png" alt=""> </template>
                <template #itemIconActive > <img  src="~assets/tabbar/category_active.png" alt=""> </template>
                <template #itemName ><br>分类</template>
            </m-button>

             <m-button :path="'cart'">
                <template #itemIcon > <img  src="~assets/tabbar/cart.png" alt=""> </template>
                <template #itemIconActive > <img  src="~assets/tabbar/cart_active.png" alt=""> </template>
                <template #itemName ><br>购物车</template>
            </m-button>

            <m-button :path="'profile'">
                <template #itemIcon > <img  src="~assets/tabbar/profile.png" alt=""> </template>
                <template #itemIconActive > <img  src="~assets/tabbar/profile_active.png" alt=""> </template>
                <template #itemName ><br>我的</template>
            </m-button>
        </div>
    </section>
</template>
<script>
import MButton from 'components/common/MButton'
export default {
    data() {
        return {

        }
    },
    components:{
        MButton
    }
}
</script>
<style lang="scss" scoped>
.tabbar {
    display: flex;
    position: fixed;
    justify-content: space-around;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: var(--color-background-color);
    box-shadow:  0 -1px 1px rgba(100,100,100,.2);
}
</style>
