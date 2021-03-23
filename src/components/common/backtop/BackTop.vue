<template>
  <div class='back-top'>
    <img src="~assets/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {};
  },
};
</script>


<style scoped>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 50px;    
  }
  .back-top img{
    width: 42px;
  }

</style>