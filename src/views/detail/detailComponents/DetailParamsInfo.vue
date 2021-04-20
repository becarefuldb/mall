<template>
  <div class='DetailParamsInfo' v-if="Object.keys(paramsInfo).length !== 0">
    <div class="info-key">{{paramsInfo.rule.key}}</div>
    <div >
      <table v-for="(item,index) in paramsInfo.rule.tables" :key="index" class="info-table">
        <tr v-for="tr in item" :key="tr.id">
          <td v-for="td in tr" :key="td.id">{{td}}</td>
        </tr>        
      </table>
    </div>

    <div class="params-key">{{paramsInfo.info.key}}</div>
    <div>
      <table class="info-params">
        <tr v-for="item in paramsInfo.info.set" :key="item.id">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div> 
    
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  data() {
    return {};
  },
  props:{
    paramsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>


<style scoped>
.DetailParamsInfo{
  padding: 10px;
}
.info-key,.params-key{
  margin:10px 0px ;
}
.info-table, .info-params {
  border: 1px solid #333;
  text-align: center;
  border-spacing: 0px;
  margin-top: 10px;
  
} 
.info-table tr td{
  border: 1px solid #333;
  width: 80px;
  height: 30px;  
}
.info-params tr td{
  border: 1px solid #333;
}
.info-params tr td:first-child{
  width: 80px;  
}
</style>