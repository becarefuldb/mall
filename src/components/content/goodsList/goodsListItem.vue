<template>
  <div class="goodsListItem" @click="goodsItemClick()">
    <img :src="imageShow" alt="" @load="imgLoad" />
    <div class="goodsInfo">
      <p>{{ goodsListItem.title }}</p>
      <span class="price">{{ goodsListItem.price }}</span>
      <span class="collect">{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  data() {
    return {};
  },
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    imageShow(){
      return   this.goodsListItem.image || this.goodsListItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("goodsImgLoad");
    },
    goodsItemClick(){
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  },
};
</script>


<style scoped>
.goodsListItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  margin: 5px 0px 5px 0px;
}
.goodsListItem img {
  width: 100%;
  border-radius: 5px;
  width: 100%;
}
.goodsInfo {
  font-size: 12px;
  text-align: center;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
}
.goodsInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price {
  margin-right: 20px;
}
.goodsInfo .collect {
  position: relative;
}
.goodsInfo .collect::before {
  content: "";
  background: url("~assets/common/collect_icon.png") 0 0/14px 14px;
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  top: 1px;
}
</style>