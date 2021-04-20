<template>
  <div class='detail-info'>
    <div class="info-start"></div>
    <div class="info-desc">{{details.desc}}</div>
    <div class="info-end"></div>

    <div class="info-img" v-for="(item,index) in details.detailImage" :key="index">
        <div class="img-key" >{{item.key}}</div>
        <img class="img-list"  
        v-for="list in item.list" 
        :src="list" alt="" 
        :key="list.id"
        @load="detailImgLoad"
         >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data() {
    return {
      counters:0,

    };
  },
  props:{
    details:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    detailImgLoad(){
      if( ++this.counters==this.details.detailImage[0].list.length){
          this.$emit('detailImgLoad')
      }     
    }
  }

};
</script>


<style scoped>
  .detail-info{
    padding: 10px 5px;
  }
  .info-desc{
    font-size: 15px;
    line-height: 18px;
    color: #333;
  }
  .img-key{
    height: 25px;    
    font-size: 15px;
    color: #333;
    margin: 10px 0px; 
  }
  .img-list {
    width: 100%;
  }
</style>