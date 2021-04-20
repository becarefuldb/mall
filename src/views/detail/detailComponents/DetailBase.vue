<template>
  <!-- 先判断goods对象是否都加载完毕，加载完毕后在创建这个组件 -->
  <div class="base-info" v-if="Object.keys(goods).length !== 0">

    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>

    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>

    <div class="info-services">
      <span
        class="info-services-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBase",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>


<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0px 5px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
  color: #222;
}
.info-price{
  margin-top: 10px;
}
.info-price .n-price{
  font-size: 24px;
  color: var(--color-high-text);  
}
.info-price .o-price{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount{
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /* 使用想对定位， 让元素上浮一些 */
  position: relative;
  top: -8px;
}
.info-other{
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #ededed;
	border-top: 1px solid #ededed;
	padding: 10px 4px;	
}
.info-other span{
  flex: 1;
}
.info-services{
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}
.info-services-item img{
  
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-services-item span{
  font-size: 13px;
  color: #333;
}
</style>