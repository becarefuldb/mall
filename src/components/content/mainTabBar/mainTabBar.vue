<template>
  <div >
     <tab-bar class="tabbar">
      <!-- activeColor为文字颜色 -->
      <tabBarItem path="/home" >
        <img slot="tabbar_icon" src="~assets/tabbar/img/home.png" alt="" />
        <img slot="tabbar_active" src="~assets/tabbar/img/home(1).png" alt="" />
        <div slot="tabbar_text">主页</div>
      </tabBarItem>
      <tabBarItem path="/shopcart" >
        <img slot="tabbar_icon" src="~assets/tabbar/img/shop_cart.png" alt="" />
        <img slot="tabbar_active" src="~assets/tabbar/img/shop_cart(1).png" alt="" />
        <div slot="tabbar_text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/category" >
        <img slot="tabbar_icon" src="~assets/tabbar/img/category.png" alt="" />
        <img slot="tabbar_active" src="~assets/tabbar/img/Category(1).png" alt="" />
        <div slot="tabbar_text">分类</div>
      </tabBarItem>
      <tabBarItem path="/profile" >
        <img slot="tabbar_icon" src="~assets/tabbar/img/profile.png" alt="" />
        <img slot="tabbar_active" src="~assets/tabbar/img/Profile(1).png" alt="" />
        <div slot="tabbar_text">我的</div>
      </tabBarItem>
    </tab-bar>

  </div>
</template>

<script>
import tabBar from "components/common/tabBar/tabBar.vue";
import tabBarItem from "components/common/tabBar/tabBarItem.vue";
export default {
  name: 'mainTabBar',
  data() {
    return {};
  },
  components:{
    tabBar,
    tabBarItem
  }
};
</script>


<style scoped>
  .tabbar{    
   z-index: 99; 
  }
</style>