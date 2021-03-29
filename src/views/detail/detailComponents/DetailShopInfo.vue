<template>
  <div class='shopInfo'>
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>

    <div class="shop-middle">
      
    </div>




  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data() {
    return {};
  },
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>


<style scoped>

</style>