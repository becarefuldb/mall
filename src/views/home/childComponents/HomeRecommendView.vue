<template>
  <div class='recommend'>
    <div  v-for="item in recommend" :key="item.id" class="recommendItem">
      <a :href="item.link">
      <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  data() {
    return {};
  },
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>


<style scoped>
  .recommend{
    display: flex;  
    text-align: center;    
    font-size: 14px;
    padding: 10px 0px 20px 0px;    
    border-bottom: 3px solid rgb(163, 214, 216);
  }
  .recommendItem{
    flex: 1;
  }
  .recommendItem img{
    width: 80px;
   }  
      
</style>