<template>
  <div class='DetailBottomBar'>
    <div class="bar-left">
      <div class="service"></div>
      <div class="shop"></div>
      <div class="Collection">
        
      </div>
    </div>

    <div class="bar-right">
      <div class="addCart"></div>
      <div class="buy"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {};
  },
};
</script>


<style scoped>
  .DetailBottomBar{
    position:fixed;;    
    height: 49px;
    background-color: red;
    display: flex;
    bottom: 0;left: 0px;right:0px;   
    box-shadow: 0px -1px 5px rgba(100, 100, 100,0.3); 
  }
  .title{
    height: 49px;
    line-height: 49px;
    padding: 10px;
    width: 100%;
  }
</style>