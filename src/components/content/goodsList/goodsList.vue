<template>
  <div class='goodsList'>
    <goodsListItem 
    v-for="item in goods" 
    :key='item.id' 
    :goodsListItem="item"></goodsListItem> 
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem"
export default {
  name: 'goodsList',
  data() {
    return {};
  },
  components:{
    goodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>


<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>