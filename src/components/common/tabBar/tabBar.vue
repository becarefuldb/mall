<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data() {
    return {};
  },
};
</script>


<style scoped>
  #tab_bar {
    display: flex;    
    background-color: #f6f6f6;
    box-shadow: 0px -1px 5px rgba(100, 100, 100,0.3);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>