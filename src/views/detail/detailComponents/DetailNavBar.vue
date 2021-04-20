<template>
  <div>
    <childNavbar>
      <div slot="navBar-left" class="titleLeft" @click="titleLeftClick">
        <img src="~assets/common/back.png" alt="">
      </div>
      <div slot="navBar-center" class="titleCenter">
        <div
          v-for="(item, index) in titles"
          :key="item.id"
          class="titleItem"          
          :class="{ active: currentIndex === index }"
          @click="titleClick(index)" >
          {{ item }}
        </div>
      </div>
    </childNavbar>
  </div>
</template>

<script>
import childNavbar from "components/common/navbar/NavBar"

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
        
    };
  },
  components: {
    childNavbar,
  },
  
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("navClick",index)

    },
    titleLeftClick(){
      this.$router.back(-1)
    }
  },
};
</script> 

<style scoped>
.titleCenter {
  display: flex;  
}
.titleLeft img{
  width: 30px;
  margin-top: 8px;
}
.titleItem {
  flex: 1;
  font-size: 13px;
  font-weight: bold;
}
.active {
  color: var(--color-text);
  /* border-bottom: solid 3px var(--color-text); */
}
</style>